import "./globals.css"
import {Montserrat} from "@next/font/google"

const montserrat = Montserrat ({
  weight: ["400","700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} mx-23 my-9`}>
        {children}
        </body>
    </html>
  )
}
