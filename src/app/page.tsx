
import { Button } from "@nextui-org/react";
import SwipeCarousel from "@/components/Carousel/SwipeCarousel"
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main>
      <div className="w-[100%] pt-5 pr-20 pl-20 pb-32">
        <SwipeCarousel />
      </div>
      
      <div>
        <ProductList />
      </div>
    </main>
  );
}
