import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
    title: "PrimeEdge Software — Cutting-Edge Software for a Smarter Future",
    description: "Sleek, trustworthy, and innovative solutions in web, mobile, AI/ML, and IoT.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
    openGraph: {
        title: "PrimeEdge Software",
        description: "Reliable, scalable, and intelligent software for startups to enterprises.",
        url: "https://primeedgesoftware.com",
        siteName: "PrimeEdge Software",
        type: "website"
    }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="font-sans">
                <Navbar />
                <main className="pt-20">{children}</main>
                <Footer />
            </body>
        </html>
    );
}