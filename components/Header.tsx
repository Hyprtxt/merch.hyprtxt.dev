import Cart from "../islands/Cart.tsx";

export function Header() {
  return (
    <header
      class="h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative"
      style={{
        backgroundImage: "url(/header_bg.svg)",
      }}
    >
      <div class="rainfall w-full h-full absolute" />
      <nav class="w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-between relative">
        <a href="/">
          <img
            src="/logo.png"
            alt="Deno Logo"
            class="h-14 w-14 border-2 rounded-full"
          />
        </a>
        <h1 class="text-white text-2xl">
          Custom Shopify Stores
        </h1>
        <Cart />
      </nav>
    </header>
  );
}
