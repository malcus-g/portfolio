import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garrett Couch | Portfolio",
  description: "Garrett is a full-stack developer who is passionate about collaboration, community engagement, and turning bold ambitions into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuSans.variable} antialiased 
                  bg-slate-50 text-slate-900 relative`}>
        <div className="bg-[#e8cbfbb9] absolute -z-10 top-[-1rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dddafeb1] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {children}
      </body>
    </html>
  );
}
