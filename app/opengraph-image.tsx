import { ImageResponse } from "next/og";

export const alt = "Mohit Silla — COO at GenSync";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          background: "#f4f0e8",
          color: "#24271f",
          fontFamily: "Georgia, serif",
          border: "18px solid #315347",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Arial, sans-serif", fontSize: 24, letterSpacing: 2.6, textTransform: "uppercase" }}>
          <span>Mohit Silla</span>
          <span style={{ color: "#315347" }}>COO at GenSync</span>
        </div>
        <div style={{ display: "flex", maxWidth: 960, fontSize: 74, lineHeight: 1.02, letterSpacing: -3 }}>
          I build products, run delivery, and bring founders together.
        </div>
        <div style={{ display: "flex", fontFamily: "Arial, sans-serif", fontSize: 22, color: "#5e645b" }}>
          Product builder · Operator · Host
        </div>
      </div>
    ),
    size,
  );
}
