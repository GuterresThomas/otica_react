'use client'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
Carousel,
  } from "@material-tailwind/react";
   
export default function CardPromoComponent() {
    return (
        <div className="mt-2">
            <Carousel className="rounded-xl">
                <img src="promoazul.png"/>
            </Carousel>
        </div>
    )
}