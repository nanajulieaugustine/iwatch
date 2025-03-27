import { Poppins as PoppinsFont } from "next/font/google";
import "./globals.css";

const poppins = PoppinsFont({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
