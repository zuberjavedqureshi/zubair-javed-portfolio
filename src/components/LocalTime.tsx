"use client";

import { useSyncExternalStore } from "react";

function subscribe(cb: () => void) {
  const id = window.setInterval(cb, 15_000);
  return () => window.clearInterval(id);
}

/** Live local time in a given time zone. Renders a stable placeholder on the server. */
export function LocalTime({ timeZone, label }: { timeZone: string; label: string }) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone }).format(
        new Date(),
      ),
    () => "--:--",
  );

  return (
    <span className="tabular-nums" suppressHydrationWarning>
      {time} {label}
    </span>
  );
}
