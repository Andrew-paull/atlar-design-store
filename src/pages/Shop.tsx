import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const products = [
  { id: "1", name: "Classic White T-Shirt", price: 29.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop", category: "Men" },
  { id: "2", name: "Denim Jacket", price: 89.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop", category: "Women" },
  { id: "3", name: "Summer Dress", price: 59.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop", category: "Women" },
  { id: "4", name: "Leather Boots", price: 129.99, image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500&h=500&fit=crop", category: "Accessories" },
  { id: "5", name: "Casual Shirt", price: 45.99, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop", category: "Men" },
  { id: "6", name: "Wool Sweater", price: 79.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop", category: "Women" },
  { id: "7", name: "Sneakers", price: 99.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop", category: "Accessories" },
  { id: "8", name: "Black Jeans", price: 69.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop", category: "Men" },
];

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Header */}
        <div className="bg-muted py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Shop All</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of premium clothing and accessories
            </p>
          </div>
        </div>

        {/* Filters & Products */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing {products.length} products
            </p>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
