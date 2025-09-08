import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: "Saifullah Rizwan's Portfolio",
  description: 'AI/ML Engineer & Blockchain Developer portfolio showcasing intelligent systems, LLMs, RAG systems, and decentralized applications.',
  keywords: ['AI/ML Engineer', 'Blockchain Developer', 'LLM', 'RAG', 'Agentic AI', 'Smart Contracts', 'Web3', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-dark-300 text-white antialiased`}>
        {/* Runtime config for static hosting - edit values below or inject via deployment */}
        <Script id="runtime-config" type="application/json" strategy="beforeInteractive">
          {JSON.stringify({
            emailjsServiceId: '',
            emailjsTemplateId: '',
            emailjsPublicKey: '',
            calendlyUrl: 'https://calendly.com/saifullah-rizw'
          })}
        </Script>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
