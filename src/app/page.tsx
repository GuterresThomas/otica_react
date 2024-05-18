'use client'
import { useState, useEffect } from 'react';
import StickyNavbar from "@/components/navbar"
import CarouselTransition from "@/components/carroussel"
import SimpleFooter from"@/components/footer"
import HorizontalCard from "@/components/horizontalCard"
import BackgroundBlogCard from "@/components/backgroundCard"
import CardDefault from "@/components/cardTrab"
import CardPromoComponent from "@/components/cardPromo"
import PopUpCard from "@/components/popUpPromo";

export default function Home() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);

    const closePopUp = () => {
        setIsPopUpOpen(false);
    };

    useEffect(() => {
        // Abre o popup quando o site é carregado
        setIsPopUpOpen(true);
    }, []);
  return (
   <div className="">
    <StickyNavbar/>
    <CarouselTransition/>
    <div className="">
      <HorizontalCard/>
      <BackgroundBlogCard/>
    </div>
    <div>
      <CardPromoComponent/>
    </div>
    <div>
    <CardDefault/>
    <SimpleFooter/>
    </div>
    <PopUpCard isOpen={isPopUpOpen} onClose={closePopUp} />
   </div>
  )
}
