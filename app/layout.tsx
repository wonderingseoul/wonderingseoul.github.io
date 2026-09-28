import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import { PageMotion } from "@/components/page-motion";
import { Header } from "@/components/header";
import { site } from "@/content/site";
import { assetPath } from "@/lib/assets";
import "./globals.css";

// 글꼴(Inter, OFL)은 app/fonts/에 포함되어 있어 네트워크 없이 빌드됩니다.
// 바꾸려면 여기와 app/theme.css의 --font-sans를 함께 수정하세요.
const inter = localFont({
  src: "./fonts/inter-variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.titleSuffix}`,
    template: `%s — ${site.name}`,
  },
  description: site.introduction,
  icons: { icon: assetPath("/favicon.svg") },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.language} className={inter.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <PageMotion />
        <main id="main">{children}</main>
        <footer className="wrap site-footer">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>{site.footerText}</span>
          <Link href="/">Back to top ↑</Link>
        </footer>
      </body>
    </html>
  );
}
