import Image from "next/image";
import type { Screenshot } from "@/data/projects";
import { cn } from "@/lib/cn";

/**
 * A neutral CSS device frame around a genuine screenshot.
 * The frame is decoration; the screenshot inside is the real app.
 */
export function PhoneFrame({
  shot,
  className,
  priority,
  sizes = "(min-width: 1024px) 280px, 60vw",
}: {
  shot: Screenshot;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.1rem] bg-(--device-bezel) p-[0.45rem] shadow-[0_40px_80px_-30px_rgb(0_0_0/0.55),0_0_0_1px_rgb(255_255_255/0.06)_inset]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.55rem] bg-bg-sunken" style={{ aspectRatio: `${shot.width} / ${shot.height}` }}>
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
