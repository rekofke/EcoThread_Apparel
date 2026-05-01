// app/page.tsx
import ProductCard from './components/ProductCard';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  material: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Organic Cotton Essential Tee",
    price: 48,
    image: "https://picsum.photos/id/1015/600/600",
    category: "Tops",
    material: "Organic Cotton",
  },
  {
    id: 2,
    name: "Recycled Denim Jacket",
    price: 128,
    image: "https://picsum.photos/id/1027/600/600",
    category: "Outerwear",
    material: "Recycled Denim",
  },
  {
    id: 3,
    name: "Bamboo Blend Hoodie",
    price: 89,
    image: "https://picsum.photos/id/106/600/600",
    category: "Hoodies",
    material: "Bamboo",
  },
  {
    id: 4,
    name: "Hemp Relaxed Fit Pants",
    price: 95,
    image: "https://picsum.photos/id/201/600/600",
    category: "Bottoms",
    material: "Hemp",
  },
  {
    id: 5,
    name: "Merino Wool Sweater",
    price: 115,
    image: "https://picsum.photos/id/251/600/600",
    category: "Tops",
    material: "Merino Wool",
  },
  {
    id: 6,
    name: "Recycled Polyester Joggers",
    price: 75,
    image: "https://picsum.photos/id/316/600/600",
    category: "Bottoms",
    material: "Recycled Poly",
  },
  {
    id: 7,
    name: "Organic Ribbed Tank",
    price: 32,
    image: "https://picsum.photos/id/342/600/600",
    category: "Tops",
    material: "Organic Cotton",
  },
  {
    id: 8,
    name: "Sustainable Cargo Shorts",
    price: 68,
    image: "https://picsum.photos/id/367/600/600",
    category: "Bottoms",
    material: "Recycled Materials",
  },
];

export default function Home() {
  return (
    <div
      className="
        min-h-screen
        bg-gray-50
      "
    >
      {/* Navigation */}
      <header
        className="
          z-50
          bg-white
          border-b
          sticky top-0
        "
      >
        <div
          className="
            flex
            max-w-7xl
            mx-auto px-6 py-5
            justify-between items-center
          "
        >
          <div
            className="
              flex
              items-center gap-3
            "
          >
            <div
              className="
                flex
                w-8 h-8
                text-white font-bold
                bg-emerald-600
                rounded-xl
                items-center justify-center
              "
            >ET</div>
            <h1
              className="
                text-2xl font-semibold tracking-tight
              "
            >EcoThread</h1>
          </div>
          
          <nav
            className="
              flex
              text-sm font-medium
              items-center gap-8
            "
          >
            <a
              href="#shop"
              className="
                transition-colors
                hover:text-emerald-600
              "
            >Shop</a>
            <a
              href="#about"
              className="
                transition-colors
                hover:text-emerald-600
              "
            >Our Story</a>
            <a
              href="#sustainability"
              className="
                transition-colors
                hover:text-emerald-600
              "
            >Sustainability</a>
            <a
              href="#"
              className="
                transition-colors
                hover:text-emerald-600
              "
            >Cart (0)</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="
          flex overflow-hidden
          h-screen
          bg-emerald-950
          relative items-center justify-center
        "
      >
        <div
          className="
            bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center
            opacity-40
            absolute inset-0
          "
        ></div>
        
        <div
          className="
            z-10
            max-w-4xl
            mx-auto px-6
            text-center
            relative
          "
        >
          <div
            className="
              inline-flex
              px-4 py-2 mb-6
              text-sm
              bg-white/10
              rounded-full
              items-center gap-2 backdrop-blur-md
            "
          >
            🌱 Carbon-negative • Ethically made
          </div>
          
          <h2
            className="
              mb-6
              text-6xl font-bold text-white tracking-tighter
              md:text-7xl
            "
          >
            Fashion that gives back to the planet
          </h2>
          
          <p
            className="
              max-w-lg
              mx-auto mb-10
              text-xl text-emerald-100
            "
          >
            Premium sustainable clothing made from organic and recycled materials. 
            Feel good. Look good. Do good.
          </p>

          <div
            className="
              flex flex-col
              gap-4 justify-center
              sm:flex-row
            "
          >
            <a
              href="#shop"
              className="
                px-10 py-4
                text-emerald-950 font-semibold text-lg
                bg-white
                rounded-2xl
                transition-all
                hover:bg-emerald-100 active:scale-95
              "
            >
              Shop Collection
            </a>
            <a
              href="#about"
              className="
                px-10 py-4
                text-white font-semibold text-lg
                border border-white/70 rounded-2xl
                transition-all
                hover:bg-white/10
              "
            >
              Learn Our Story
            </a>
          </div>

          <div
            className="
              flex
              mt-16
              text-sm text-emerald-200
              justify-center gap-8
            "
          >
            <div>🌍 100% traceable supply chain</div>
            <div>♻️ Recycled packaging</div>
            <div>🌱 1 tree planted per order</div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section
        id="shop"
        className="
          max-w-7xl
          mx-auto px-6 py-20
        "
      >
        <div
          className="
            flex
            mb-12
            justify-between items-end
          "
        >
          <div>
            <h2
              className="
                text-5xl font-bold tracking-tight
              "
            >Our Collection</h2>
            <p
              className="
                mt-3
                text-xl text-gray-600
              "
            >Sustainable essentials for everyday wear</p>
          </div>
          <div
            className="
              text-sm text-gray-500
            "
          >Showing {products.length} products</div>
        </div>

        <div
          className="
            grid grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}