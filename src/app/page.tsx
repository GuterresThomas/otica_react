import StickyNavbar from "@/components/navbar"
import CarouselTransition from "@/components/carroussel"
import SimpleFooter from"@/components/footer"
import HorizontalCard from "@/components/horizontalCard"
import BackgroundBlogCard from "@/components/backgroundCard"
import CardDefault from "@/components/cardTrab"
import CardPromoComponent from "@/components/cardPromo"

export default function Home() {
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
   </div>
  )
}
