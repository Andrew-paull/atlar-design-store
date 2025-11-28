import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-bold tracking-tight">
            ATlAR DESIGN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-sm font-medium hover:text-accent transition-colors">
              Shop
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-accent transition-colors">
              Collections
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <Link
              to="/"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/products"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
