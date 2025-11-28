import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden aspect-square bg-muted">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          {category && (
            <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
              {category}
            </span>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-sm mb-2 group-hover:text-accent transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${price}</span>
          <Button size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
