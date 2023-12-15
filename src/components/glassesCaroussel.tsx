'use client'

import { Carousel } from "@material-tailwind/react";
 
export default function CarouselDefaultGlasses() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="/oculos5.jpg" alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos6.jpg" alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos7.jpg" alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos8.jpg" alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos9.jpg" alt="image 5"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos10.jpg" alt="image 6"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos11.jpg" alt="image 7"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos12.jpg" alt="image 8"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}