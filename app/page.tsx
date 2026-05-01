

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-600">EcoThread</h1>
          <nav className="flex gap-8">
            <a href="#" className="hover:text-emerald-600">Shop</a>
            <a href="#" className="hover:text-emerald-600">About</a>
            <a href="#" className="hover:text-emerald-600">Cart (0)</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-emerald-900 text-white py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-6xl font-bold mb-6">Sustainable Fashion That Feels Good</h2>
            <p className="text-xl mb-8">Eco-friendly clothing for the conscous consumer</p>
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-full text-1g font-medium hover:bg-emerald-100">
              Shop Now
            </button>
          </div>
        </section>
      </main>
    </div>
    
  );
}
