import { Footer } from "@/components/Footer.tsx"
import { HeadElement } from "@/components/HeadElement.tsx"
import { Header } from "@/components/Header.tsx"

export default function Home(ctx) {
  const { url } = ctx
  // const products = data.products.nodes
  return (
    <div>
      <HeadElement
        description="HTTP Error - We couldn't find something"
        image={url.href + "og-image.png"}
        title="404 Error"
        url={url}
      />
      <Header />
      <div
        class="w-11/12 max-w-5xl mx-auto mt-28"
        aria-labelledby="information-heading"
      >
        <h2>
          Error
        </h2>
        <p>There was an error, we failed to find something</p>
      </div>
      <Footer />
    </div>
  )
}
