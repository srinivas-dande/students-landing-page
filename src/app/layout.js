import './globals.css';
import Script from "next/script";
import { Inter } from "next/font/google";

export const metadata = {
  title: 'AI & Machine Learning Career Program for Students | Dandes Academy',
  description:
    "Join India's most outcome-focused AI & ML course for students. Build 6 real-world projects, get placement support, and break into AI/ML engineering.",
  keywords: [
    'AI ML course for students',
    'ai courses online for students',
    'machine learning career program India',
    'AI engineering course',
    'AI ML program for engineering students',
    'learn machine learning online India',
    'Python ML course with placement',
    'AI projects for portfolio',
    'deep learning course India',
    'AI course for freshers',
    'MLOps training',
    'placement support AI course',
    'Dandes Academy',
    'AI course Tier-2 college students',
    'machine learning certification India',
    'AI career program 2026',
  ],
};

const inter = Inter({
  subsets: ["latin"],
});




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W865WG7N');
          `}
        </Script>
        {/* End Google Tag Manager */}

      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W865WG7N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <main className="pt-[90px] min-h-screen">
          {children}
        </main>

      </body>
    </html>
  )
}