import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #173f3a 0%, #1f4d47 40%, #c48847 100%)",
          color: "#fff8f1",
          padding: "64px",
          justifyContent: "space-between",
          alignItems: "stretch",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "72%",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "40px",
            padding: "48px",
            background: "rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
            }}
          >
            Stay Homes
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", fontSize: 82, lineHeight: 1.05 }}>
              Premium homes for slower, better stays
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                lineHeight: 1.4,
                color: "rgba(255,248,241,0.8)",
                maxWidth: "80%",
              }}
            >
              Boutique hospitality, curated rentals, and thoughtful hosting in one
              trusted brand.
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "22%",
            borderRadius: "32px",
            background: "rgba(255,248,241,0.12)",
            border: "1px solid rgba(255,255,255,0.18)",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 150,
          }}
        >
          SH
        </div>
      </div>
    ),
    size,
  );
}
