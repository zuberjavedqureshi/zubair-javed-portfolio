"use client";

import { ArrowUpRight, CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useId, useRef, useState, type FormEvent } from "react";
import { cn } from "@/lib/cn";

/**
 * Contact form that posts to a Formspree endpoint (free tier).
 * Set NEXT_PUBLIC_FORMSPREE_ENDPOINT, e.g. https://formspree.io/f/abcdwxyz. See .env.example.
 * The endpoint id is public by design (it is what any HTML form would post to); no secret lives here.
 * While it is unset, the form renders but submission is disabled with an honest notice.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim() || null;

const LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  subject: { min: 3, max: 120 },
  message: { min: 10, max: 2000 },
} as const;

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: Values = { name: "", email: "", subject: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FIELDS: Field[] = ["name", "email", "subject", "message"];

function validate(field: Field, raw: string): string | undefined {
  const v = raw.trim();
  switch (field) {
    case "name":
      if (!v) return "Please enter your name.";
      if (v.length < LIMITS.name.min) return "Name looks too short.";
      if (v.length > LIMITS.name.max) return `Keep it under ${LIMITS.name.max} characters.`;
      return;
    case "email":
      if (!v) return "Please enter your email address.";
      if (v.length > LIMITS.email.max || !EMAIL_RE.test(v)) return "Please enter a valid email address.";
      return;
    case "subject":
      if (!v) return "Please add a subject.";
      if (v.length < LIMITS.subject.min) return "Subject looks too short.";
      if (v.length > LIMITS.subject.max) return `Keep it under ${LIMITS.subject.max} characters.`;
      return;
    case "message":
      if (!v) return "Please write a message.";
      if (v.length < LIMITS.message.min) return `A little more detail, please (at least ${LIMITS.message.min} characters).`;
      if (v.length > LIMITS.message.max) return `Keep it under ${LIMITS.message.max} characters.`;
      return;
  }
}

function validateAll(values: Values): Errors {
  const errors: Errors = {};
  for (const f of FIELDS) {
    const e = validate(f, values[f]);
    if (e) errors[f] = e;
  }
  return errors;
}

const inputBase =
  "block w-full rounded-xl border bg-bg px-4 text-[0.9375rem] text-fg placeholder:text-fg-subtle/70 transition-[border-color,box-shadow] duration-300 focus:outline-none focus-visible:outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--accent-soft)] disabled:opacity-60";

export function ContactForm({ linkedin }: { linkedin: string }) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentName, setSentName] = useState("");

  const id = (f: string) => `${uid}-${f}`;
  const busy = status === "submitting";

  const onChange = (field: Field, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    // Re-validate live only once a field is already showing an error.
    if (errors[field]) setErrors((e) => ({ ...e, [field]: validate(field, value) }));
    if (status === "error") setStatus("idle");
  };

  const onBlur = (field: Field) => {
    if (values[field]) setErrors((e) => ({ ...e, [field]: validate(field, values[field]) }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !ENDPOINT) return;

    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    const firstInvalid = FIELDS.find((f) => nextErrors[f]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(firstInvalid))}`)?.focus();
      return;
    }

    const honeypot = new FormData(event.currentTarget).get("_gotcha");
    const name = values.name.trim();

    // Bots fill hidden fields. Quietly "succeed" without sending anything.
    if (typeof honeypot === "string" && honeypot.length > 0) {
      setSentName(name);
      setStatus("success");
      setValues(EMPTY);
      return;
    }

    setStatus("submitting");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: values.email.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
          _subject: `Portfolio: ${values.subject.trim()}`,
        }),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      setSentName(name);
      setValues(EMPTY);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="hero-rise flex min-h-[26rem] flex-col items-start justify-center gap-5 py-6">
        <span className="grid size-14 place-items-center rounded-full bg-accent-soft text-accent">
          <CircleCheck className="size-7" aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-4xl leading-tight tracking-[-0.02em]">Message sent.</p>
          <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-fg-muted">
            Thanks{sentName ? `, ${sentName.split(" ")[0]}` : ""}. I&rsquo;ll get back to you soon.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-2 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          Send another message
        </button>
      </div>
    );
  }

  const field = (
    name: Field,
    label: string,
    props: { type?: string; autoComplete?: string; max: number; textarea?: boolean; placeholder: string },
  ) => {
    const err = errors[name];
    const describedBy = [err ? id(`${name}-error`) : null, props.textarea ? id(`${name}-count`) : null]
      .filter(Boolean)
      .join(" ");
    const common = {
      id: id(name),
      name,
      value: values[name],
      maxLength: props.max,
      required: true,
      disabled: busy,
      placeholder: props.placeholder,
      "aria-invalid": err ? true : undefined,
      "aria-describedby": describedBy || undefined,
      className: cn(inputBase, err ? "border-danger" : "border-line hover:border-line-strong"),
    } as const;

    return (
      <div className={cn("flex flex-col gap-2", (name === "subject" || name === "message") && "sm:col-span-2")}>
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor={id(name)} className="text-sm text-fg">
            {label}
            <span className="text-fg-subtle" aria-hidden="true">
              {" "}
              *
            </span>
          </label>
          {props.textarea ? (
            <span id={id(`${name}-count`)} className="font-mono text-[0.6875rem] text-fg-subtle">
              <span className="sr-only">Characters used: </span>
              {values[name].length}/{props.max}
            </span>
          ) : null}
        </div>
        {props.textarea ? (
          <textarea
            {...common}
            rows={6}
            onChange={(e) => onChange(name, e.target.value)}
            onBlur={() => onBlur(name)}
            className={cn(common.className, "min-h-36 resize-y py-3 leading-relaxed")}
          />
        ) : (
          <input
            {...common}
            type={props.type ?? "text"}
            autoComplete={props.autoComplete}
            onChange={(e) => onChange(name, e.target.value)}
            onBlur={() => onBlur(name)}
            className={cn(common.className, "h-12")}
          />
        )}
        {err ? (
          <p id={id(`${name}-error`)} className="flex items-center gap-1.5 text-[0.8125rem] text-danger">
            <CircleAlert className="size-3.5 shrink-0" aria-hidden="true" />
            {err}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-label="Contact form" className="relative grid gap-6 sm:grid-cols-2 sm:gap-x-5">
      {field("name", "Full name", { autoComplete: "name", max: LIMITS.name.max, placeholder: "Your name" })}
      {field("email", "Email address", { type: "email", autoComplete: "email", max: LIMITS.email.max, placeholder: "you@example.com" })}
      {field("subject", "Subject", { max: LIMITS.subject.max, placeholder: "What’s it about?" })}
      {field("message", "Message", { textarea: true, max: LIMITS.message.max, placeholder: "Tell me a little about the role or project." })}

      {/* Honeypot: hidden from people and assistive tech, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("gotcha")}>Leave this field empty</label>
        <input id={id("gotcha")} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <div aria-live="polite" className="min-h-5 text-[0.8125rem] leading-relaxed">
          {status === "error" ? (
            <p role="alert" className="flex items-start gap-1.5 text-danger">
              <CircleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
              <span>
                Something went wrong sending your message. Please try again, or{" "}
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  message me on LinkedIn
                </a>
                .
              </span>
            </p>
          ) : !ENDPOINT ? (
            <p className="text-fg-subtle">
              The form is being set up. Until then,{" "}
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-fg-muted underline underline-offset-2 hover:text-fg">
                message me on LinkedIn
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </a>
              .
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={busy || !ENDPOINT}
          className="group inline-flex h-12 shrink-0 select-none items-center justify-center gap-2.5 rounded-full bg-accent px-7 text-[0.9375rem] font-medium tracking-[-0.01em] text-accent-ink shadow-[0_1px_0_0_rgb(255_255_255/0.15)_inset] transition-[background-color,transform,opacity] duration-300 ease-(--ease-out-expo) hover:bg-accent-strong active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
        >
          {busy ? (
            <>
              Sending
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              Send message
              <Send className="size-4 transition-transform duration-300 ease-(--ease-out-expo) group-hover:-translate-y-px group-hover:translate-x-0.5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
