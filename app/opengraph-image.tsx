import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(201, 151, 88, 0.32), transparent 32%), linear-gradient(135deg, #f6efe5 0%, #efe4d5 48%, #ddc7aa 100%)",
          color: "#2b2218",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
          padding: "56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-40px",
            top: "80px",
            display: "flex",
            flexWrap: "wrap",
            width: "500px",
            gap: "20px",
            transform: "rotate(-18deg)",
            opacity: 0.95,
          }}
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "28px",
                background:
                  index % 2 === 0
                    ? "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(233,220,201,0.86))"
                    : "linear-gradient(145deg, rgba(112,89,63,0.96), rgba(62,46,31,0.92))",
                boxShadow: "0 28px 50px rgba(58, 42, 25, 0.18)",
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "720px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px 22px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.68)",
              border: "1px solid rgba(255,255,255,0.72)",
              fontSize: "24px",
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            Sydney Based
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <div
              style={{
                fontSize: "72px",
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: "34px",
                lineHeight: 1.25,
                color: "rgba(43,34,24,0.84)",
                maxWidth: "640px",
              }}
            >
              Professional floor, wall, bathroom, and outdoor tiling with premium finishes across Greater Sydney.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "18px",
              alignItems: "center",
              fontSize: "24px",
              color: "rgba(43,34,24,0.72)",
            }}
          >
            <span>Free Quotes</span>
            <span>•</span>
            <span>Waterproofing Expertise</span>
            <span>•</span>
            <span>Detail-Focused Craftsmanship</span>
          </div>
        </div>
      </div>
    ),
    size
  )
}
