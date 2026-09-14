import { Analytics } from "@/components/Analytics";
import "./globals.css";

export const metadata = {
  title: "Johnny Blake - Los Angeles-based Film Actor",
  description: "Dynamic, screen-tested performer with leading-role experience in TV and film.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "32x32" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* self-visit opt-out: visit with ?nostats to disable Umami on THIS browser; ?nostats=off to re-enable */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var m=/[?&]nostats(=([^&#]*))?/i.exec(location.search);if(!m)return;var off=(m[2]||"").toLowerCase()==="off";try{off?localStorage.removeItem("umami.disabled"):localStorage.setItem("umami.disabled","1");}catch(e){}window.addEventListener("DOMContentLoaded",function(){var b=document.createElement("div");b.textContent=(off?"✓ Umami tracking re-enabled":"✓ Umami tracking disabled")+" on this browser";b.style.cssText="position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#15C7E6;color:#012;font:600 14px/1.4 system-ui,-apple-system,sans-serif;padding:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,.25)";document.body.appendChild(b);});})();`,
          }}
        />
        <script
          defer
          src="https://stats.chiefsmurph.com/script.js"
          data-website-id="d266d1b1-aa0a-48ee-b59a-7f38bd3b26fe"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
