'use client'

import { Carousel } from "@material-tailwind/react";
 
export default function CarouselDefaultGlasses() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="/oculos5.jpeg" alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos6.jpeg" alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos7.jpeg" alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos8.jpeg" alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos9.jpeg" alt="image 5"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos10.jpeg" alt="image 6"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos11.jpeg" alt="image 7"
        className="h-full w-full object-cover"
      />
      <img
        src="/oculos12.jpeg" alt="image 8"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}