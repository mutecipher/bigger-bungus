import '../styles/globals.css'
import { Inter, JetBrains_Mono } from '@next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`antialiased w-full max-w-4xl mx-auto h-full bg-black text-white ${inter.variable} ${jetBrainsMono.variable}`} >
      <body>{children}</body>
    </html >
  )
}
