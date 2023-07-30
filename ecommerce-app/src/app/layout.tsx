import "././globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/src/config/site"
import { fontSans } from "@/src/lib/fonts"
import { cn } from "@/src/lib/utils"
import { Providers } from "@/src/components/providers"
import { SiteBlob } from "@/src/components/site-blob"
import { SiteFooter } from "@/src/components/site-footer"
import { SiteHeader } from "@/src/components/site-header"

export const metadata: Metadata = {
  title:siteConfig.name,
  description:siteConfig.description,
  icons:{
    icon:'./favicon.ico'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader/>
            <SiteBlob/>
            <div className="flex-1">{children}</div>
            <SiteFooter/>
          </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
