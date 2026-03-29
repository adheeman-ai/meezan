import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mizaan - Balancing Aid Across Kashmir",
  description: "Zero fees. Direct giving. Real tracking. Kashmir's dedicated NGO fundraising tracker for all 10 districts.",
  keywords: ["NGO", "Mizaan", "Kashmir", "Fundraising", "Donations", "Charity", "UPI", "Direct Payment", "Srinagar", "Baramulla"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="watermark-container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

