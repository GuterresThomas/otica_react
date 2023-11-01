'use client'

import { Carousel } from "@material-tailwind/react";
 
export default function CarouselDefaultGlasses() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="/oculos1.jpg" alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos2.jpg" alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos4.jpg" alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}