import type { Metadata } from "next";
import { ModeProvider } from "./context/ModeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Myrtle & Mist",
  description: "Where Plants Meet Spirit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModeProvider>
          {children}
        </ModeProvider>
      </body>
    </html>
  );
}
