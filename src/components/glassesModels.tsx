'use client'

import { Carousel } from "@material-tailwind/react";
 
export default function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="/atacadao_222.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/atacadao_132.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/atacadao_85.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="/atacadao_204.jpg"
        alt="image 4"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}