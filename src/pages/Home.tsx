import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";

const featuredProducts = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "New"
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "Trending"
  },
  {
    id: "3",
    name: "Summer Dress",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
    category: "Popular"
  },
  {
    id: "4",
    name: "Leather Boots",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=500&fit=crop",
    category: "Sale"
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] bg-muted flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            ATlAR DESIGN
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Discover Your Style. Define Your Elegance.
          </p>
          <Link to="/shop">
            <Button size="lg" className="gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              Shop Now <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders over $100</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-sm text-muted-foreground">100% secure transactions</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Dedicated customer service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Men", "Women", "Accessories", "Sale"].map((category) => (
              <Link
                key={category}
                to={`/shop?category=${category.toLowerCase()}`}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <img
                  src={`https://images.unsplash.com/photo-${category === "Men" ? "1490114538077-0a7f8cb49891" : category === "Women" ? "1483985988355-763728e1935b" : category === "Accessories" ? "1606760227091-3dd870d97f1d" : "1607522370275-f14206abe5d3"}?w=400&h=400&fit=crop`}
                  alt={category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold text-xl">{category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Featured Products
            </h2>
            <Link to="/shop">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-8 text-accent-foreground/90">
            Get exclusive offers and updates delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-white text-foreground"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
