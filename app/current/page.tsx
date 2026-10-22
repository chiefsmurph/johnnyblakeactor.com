import Image from "next/image";
import styles from "../App.module.css";

// Unlisted "current look" page for casting requests — not linked from the home page.
// Swap TAKEN + PHOTOS when the look changes (files live in public/images/current/).
const TAKEN = "October 21, 2026";

const PHOTOS: { src: string; width: number; height: number }[] = [
  { src: "/images/current/johnny-blake-oct-2026-smile.jpg", width: 1500, height: 2000 },
  { src: "/images/current/johnny-blake-oct-2026-2.jpg", width: 1500, height: 2000 },
];

export const metadata = {
  title: "Johnny Blake - Current Photos",
  description: `Current, unretouched photos of Johnny Blake, taken ${TAKEN}.`,
  robots: { index: false, follow: false },
};

export default function CurrentPage() {
  return (
    <main className={styles.main} style={{ marginTop: "48px" }}>
      <h1 style={{ letterSpacing: "2px", fontSize: "clamp(2rem, 10vw, 2.5rem)" }}>
        Johnny Blake
      </h1>
      <p className="subheader" style={{ margin: "1rem 0 0" }}>
        CURRENT PHOTOS
      </p>
      <p className={styles.description} style={{ textAlign: "center" }}>
        Taken {TAKEN} · No retouching
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "12px",
          margin: "1.5rem 0",
        }}
      >
        {PHOTOS.map(({ src, width, height }, i) => (
          <a key={src} href={src} target="_blank" rel="noopener">
            <Image
              src={src}
              alt={`Johnny Blake - current photo ${i + 1}, ${TAKEN}`}
              width={width}
              height={height}
              sizes="(max-width: 640px) 100vw, 400px"
              style={{ width: "100%", height: "auto", display: "block" }}
              priority={i < 2}
            />
          </a>
        ))}
      </div>

      <p className={styles.description} style={{ textAlign: "center", fontSize: "0.9rem" }}>
        Tap a photo for full resolution.
      </p>

      <p className={styles.description} style={{ textAlign: "center" }}>
        Contact:{" "}
        <a href="mailto:johnny@johnnyblakeactor.com" className="email-link">
          johnny@johnnyblakeactor.com
        </a>
      </p>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="/" className="resume-button">
          Reel &amp; Bio
        </a>
        <a
          href="/Johnny-Blake-Actor-Resume-2026.pdf"
          download="Johnny-Blake-Actor-Resume-2026.pdf"
          className="resume-button"
        >
          Resume (PDF)
        </a>
      </div>
    </main>
  );
}
