'use client'
import { Carousel } from "@material-tailwind/react";
 
export default function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="/atacadao_263.webp"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/atacadao_250.webp"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/atacadao_204.webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}