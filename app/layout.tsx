import { QueryProvider } from "@/components/QueryProvider";
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
      <body>
        <QueryProvider>{children}</QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
