import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Zubair Javed Qureshi, Flutter & Mobile Application Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "src/assets/fonts");

export default async function Image() {
  const [regular, italic] = await Promise.all([
    readFile(join(fontDir, "InstrumentSerif-Regular.ttf")),
    readFile(join(fontDir, "InstrumentSerif-Italic.ttf")),
  ]);

  const ink = "#0b0d0c";
  const paper = "#eceae4";
  const muted = "#a6a69f";
  const accent = "#5fc8b8";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: ink,
          backgroundImage:
            "linear-gradient(rgba(236,234,228,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(236,234,228,0.06) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          color: paper,
          fontFamily: "Instrument Serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, color: muted }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "2px solid rgba(236,234,228,0.18)",
              paddingTop: 6,
            }}
          >
            <span style={{ fontStyle: "italic", fontSize: 44, color: paper }}>z</span>
            <span style={{ fontSize: 30, color: accent }}>q</span>
          </div>
          Zubair Javed Qureshi · Mumbai, India
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, lineHeight: 0.98, letterSpacing: -3 }}>
          <span>I build Flutter apps</span>
          <span style={{ display: "flex", gap: 24 }}>
            that <span style={{ fontStyle: "italic", color: accent }}>ship,</span> and keep
          </span>
          <span style={{ display: "flex", gap: 24 }}>
            them <span style={{ fontStyle: "italic" }}>running.</span>
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: muted }}>
          <span>Flutter · Dart · Riverpod · Android · Cross-platform</span>
          <span style={{ color: accent }}>Text Toolkit, live on Google Play</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: regular, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: italic, style: "italic", weight: 400 },
      ],
    },
  );
}
