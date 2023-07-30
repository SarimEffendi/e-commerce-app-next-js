import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/src/config/inventory"
import { ProductGallery } from "@/src/components/product-gallery"
import { ProductInfo } from "@/src/components/product-info"

interface Props {}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Product gallery */}
          {/* Product info */}
        </div>
      </div>
    </main>
  )
}
