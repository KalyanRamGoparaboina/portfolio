import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Kalyan Ram Goparaboina | Full-Stack Developer & AI Specialist",
  description: "Computer Science Graduate specializing in Python, Machine Learning, and Web Development. Built production-ready AI systems including real-time emotion detection and OCR engines.",
  keywords: ["Full Stack Developer", "Python Developer", "AI Specialist", "Machine Learning Engineer", "Data Science", "Flask", "Next.js", "Computer Vision", "Deep Learning"],
  authors: [{ name: "Kalyan Ram Goparaboina" }],
  openGraph: {
    title: "Kalyan Ram Goparaboina - Portfolio",
    description: "Full-Stack Developer & AI Specialist | Open to Opportunities",
    type: "website",
  },
  verification: {
    google: "kWm5BDClsluHNXEXKdTqeHo1inB8EwxYXepQuhRtabk"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
