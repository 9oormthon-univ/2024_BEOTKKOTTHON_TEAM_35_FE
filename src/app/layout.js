import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "돈버니";
const APP_TITLE = "돈버니";
const APP_DESCRIPTION = "대학생을 위한 금융 학습 서비스";

export const metadata = {
  applicationName: APP_NAME,
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_TITLE,
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
