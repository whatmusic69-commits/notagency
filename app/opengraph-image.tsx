import { ImageResponse } from "next/og";

export const alt = "NotAgency - Websites, Apps and Digital Systems";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#080808",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: 64,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#d8ff38",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 0,
              textTransform: "uppercase",
            }}
          >
            NotAgency / Riga / Remote
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 900,
              lineHeight: 0.92,
              maxWidth: 760,
              textTransform: "uppercase",
            }}
          >
            Websites, apps, controlled chaos
          </div>
          <div
            style={{
              color: "#00d9ff",
              fontSize: 34,
              fontWeight: 700,
              maxWidth: 720,
            }}
          >
            Sharp digital systems for serious projects with real ambition.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            background: "#d8ff38",
            border: "8px solid #ffffff",
            borderRadius: "34% 66% 42% 58%",
            boxShadow: "18px 18px 0 #ff2f8b",
            display: "flex",
            height: 260,
            justifyContent: "center",
            position: "relative",
            width: 260,
          }}
        >
          <div
            style={{
              background: "#080808",
              borderRadius: 999,
              height: 34,
              left: 72,
              position: "absolute",
              top: 88,
              width: 34,
            }}
          />
          <div
            style={{
              background: "#080808",
              borderRadius: 999,
              height: 34,
              position: "absolute",
              right: 72,
              top: 88,
              width: 34,
            }}
          />
          <div
            style={{
              background: "#ff2f8b",
              border: "6px solid #080808",
              borderRadius: "0 0 999px 999px",
              height: 48,
              position: "absolute",
              top: 148,
              width: 92,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
