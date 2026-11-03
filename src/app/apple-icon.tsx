import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const italic = await readFile(join(process.cwd(), "src/assets/fonts/InstrumentSerif-Italic.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0d0c",
          fontFamily: "Instrument Serif",
        }}
      >
        <span style={{ fontStyle: "italic", fontSize: 130, color: "#eceae4", marginTop: -14 }}>z</span>
        <span style={{ fontSize: 80, color: "#5fc8b8", marginTop: 14, fontFamily: "monospace" }}>q</span>
      </div>
    ),
    { ...size, fonts: [{ name: "Instrument Serif", data: italic, style: "italic", weight: 400 }] },
  );
}
