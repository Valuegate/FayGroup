import "./globals.css";
import { Poppins } from "next/font/google";
import Script from "next/script";

import { Toaster, toast } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s | FayGroup",
    default: "Home | FayGroup",
  },
  description: "Empowering Businesses with Digital Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        async
        src="https:///www.googletagmanager.com/gtag/js?id=G-1CPWB2X7VM"
      ></script>
      <Script strategy="lazyOnload">
        {`
         if (typeof window !== 'undefined') {
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments)}
           gtag('js', new Date());
           gtag('config', 'G-1CPWB2X7VM');
         }
       `}
      </Script>
      <body className={poppins.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
