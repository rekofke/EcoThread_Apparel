// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">ET</div>
            <h1 className="text-2xl font-semibold tracking-tight">EcoThread</h1>
          </div>
          
          <nav className="flex items-center gap-8 text-sm font-medium">
            <a href="#shop" className="hover:text-emerald-600 transition-colors">Shop</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">Our Story</a>
            <a href="#sustainability" className="hover:text-emerald-600 transition-colors">Sustainability</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Cart (0)</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Much better version */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center opacity-40"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 text-sm">
            🌱 Carbon-negative • Ethically made
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            Fashion that gives back to the planet
          </h2>
          
          <p className="text-xl text-emerald-100 max-w-lg mx-auto mb-10">
            Premium sustainable clothing made from organic and recycled materials. 
            Feel good. Look good. Do good.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#shop" 
              className="bg-white text-emerald-950 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-emerald-100 transition-all active:scale-95"
            >
              Shop Collection
            </a>
            <a 
              href="#about" 
              className="border border-white/70 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Learn Our Story
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-sm text-emerald-200">
            <div>🌍 100% traceable supply chain</div>
            <div>♻️ Recycled packaging</div>
            <div>🌱 1 tree planted per order</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm flex flex-col items-center">
          Scroll to explore
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent mt-2"></div>
        </div>
      </section>
    </div>
  );
}