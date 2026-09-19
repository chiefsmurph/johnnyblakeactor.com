"use client";
import "./styles.css";
import { TypingText } from "@/components/TypingText";
import Image from "next/image";
import { Glitch } from "@/components/Glitch";
import styles from "./App.module.css";
import SocialIcons from "./components/SocialIcons";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function HomePage() {
  const shouldAnimate = true;

  return (
    <>
      <main className={styles.main}>
        {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head> */}

        {/* <Glitch
          delay={0.8}
          style={{ position: "relative", zIndex: 0 }}
          className="glitch"
        >
          <div className={styles.johnnyStage}>
            <Image
              src={"/images/johnnyanimated.webp"}
              alt="Johnny Blake picture"
              width={400}
              height={534}
            />
            <Image
              src={"/images/johnnyanimated1-ezgif.com-speed.webp"}
              alt="Johnny Blake picture"
              width={400}
              height={534}
            />
            
            <Image
              src={"/images/johnnyanimated.webp"}
              alt="Johnny Blake picture"
              width={400}
              height={534}
            />
            <Image
              src={"/images/johnnyanimated1-ezgif.com-speed.webp"}
              alt="Johnny Blake picture"
              width={400}
              height={534}
            />
            
          </div>
        </Glitch> */}

        <Glitch delay={0.4} className="glitch" style={{}}>
          <Image
            src={"/images/JB-headshot-sep-2026.jpg"}
            alt="Official headshot for Johnny Blake, Los Angeles film actor."
            width={800}
            height={1000}
          />
        </Glitch>
        <Glitch
          delay={0.4}
          className="glitch"
          style={{
            letterSpacing: "2px",
            marginTop: "1.5rem",
            fontSize: "clamp(2rem, 12vw, 2.5rem)",
          }}
        >
          Johnny Blake
        </Glitch>
        <Glitch delay={0.5} className="subheader">
          <TypingText
            text="Los Angeles | Film Actor"
            disabled={!shouldAnimate}
          />
        </Glitch>

        {/* <Glitch
          delay={1}
          className={styles.description}
          style={{
            fontSize: "0.9rem",
            fontStyle: "italic",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "gold",
          }}
          // className="subheader"
        >
          {" "}
          A <span onDoubleClick={() => setIsAdmin((cur) => !cur)}>
            new
          </span>{" "}
          kind of screen presence — subtle, magnetic, unforgettable.
        </Glitch> */}
        <Glitch delay={0.8}>
          <SocialIcons />
        </Glitch>

        <Glitch delay={3.5} className={styles.description}>
          Contact:{" "}
          <a
            href="mailto:johnny@johnnyblakeactor.com"
            className="email-link"
          >
            johnny@johnnyblakeactor.com
          </a>
        </Glitch>

        {`

Johnny Blake is a Los Angeles–based actor known for a grounded presence and quiet cinematic intensity. He brings precision and restraint to roles defined by authority, intelligence, and internal conflict. He leads the feature Bleed American as Chief Deputy Boe Dunn and appears as Stoney in Killer Revenge, with lead roles in the shorts The Magic Box and Gas. His natural stillness also serves sharp comedic timing, and he plays deadpan and offbeat characters with equal conviction.
Training: Berklee, Berg Studios.`
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Glitch
              delay={4.4 + index * 0.1}
              className={styles.description}
              key={`paragraph-${index}`}
              // className="subheader"
            >
              {paragraph}
            </Glitch>
          ))}

        {/* <Glitch
          delay={5.5}
          className={styles["video-wrapper"]}
          breathe={false}
          style={{ float: "left" }}
        >
          <Image
            src={"/images/fit me transparent.png"}
            alt="Fit shot for JB"
            width={200}
            height={333}
          />
        </Glitch> */}
        <Glitch delay={5.2} breathe={false} style={{ width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "8px",
              margin: "2rem 0",
            }}
          >
            {[
              { src: "/images/cleaned1.jpg", position: "center 20%" },
              { src: "/images/gallery/7795dcfb-6606-4ae9-8165-ed0d868bdb14-bWFpbi1uLW4tMC0wLTAtMC0w.jpg", position: "75% top" },
              { src: "/images/gallery/wifeisbackstill.png", position: "58% 8%" },
              { src: "/images/gallery/b757629e-5d80-4fab-ae9c-ae02c6e27625-bWFpbi1uLW4tMC0wLTAtMC0w.jpg", position: "5% center" },
            ].map(({ src, position }, i) => (
              <div key={i} style={{ height: "280px", overflow: "hidden" }}>
                <Image
                  src={src}
                  alt={`Johnny Blake - photo ${i + 1}`}
                  width={400}
                  height={533}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: position,
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </Glitch>

        <Glitch delay={6} className={styles["video-wrapper"]} breathe={false}>
          <h1>Acting Reel</h1>
          <YouTubeEmbed videoId="Ik2csbYI6Gg" />
          {/* <video controls width="100%">
            <source
              src="/videos/johnny_keeys_reel_feb_2026_web.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        </Glitch>

        <Glitch delay={6.6}>
          <a
            href="/Johnny-Blake-Actor-Resume-2026.pdf"
            download="/Johnny-Blake-Actor-Resume-2026.pdf"
            className="resume-button"
          >
            Download Acting Resume (PDF)
          </a>
        </Glitch>

        {/* <Guestbook isAdmin={isAdmin} /> */}
      </main>
    </>
  );
}
