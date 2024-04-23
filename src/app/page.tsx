
import { Button } from "@nextui-org/react";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main>
      <Hero />
      <div>
        <ProductList />
      </div>
    </main>
  );
}
