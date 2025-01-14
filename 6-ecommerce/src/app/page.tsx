import Hero from "@/components/Hero";
import ProductsList from "@/components/ProductsList";
import ShoppingCart from "@/components/ShoppingCart";

export default function Home() {
  return (
      <div>
        <Hero />
        <ProductsList />
          <ShoppingCart />
      </div>
  );
}
