'use client'
import { Carousel } from "@material-tailwind/react";
 
export default function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="/atacadao_263.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/atacadao_250.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/atacadao_204.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}