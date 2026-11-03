import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <main id="main" className="shell grid min-h-dvh place-content-center gap-8 py-24 text-center">
      <p className="eyebrow">404 · Not found</p>
      <h1 className="font-display text-6xl leading-none tracking-[-0.03em] sm:text-8xl">
        This screen <em className="text-accent">isn&rsquo;t</em> in the build.
      </h1>
      <div className="flex justify-center">
        <ButtonLink href="/" icon={<ArrowLeft className="size-4" aria-hidden="true" />}>
          Back to the portfolio
        </ButtonLink>
      </div>
    </main>
  );
}
