import StickyNavbar from "@/components/navbar"
import CarouselTransition from "@/components/carroussel"
import SimpleFooter from"@/components/footer"
import HorizontalCard from "@/components/horizontalCard"
import BackgroundBlogCard from "@/components/backgroundCard"
import CardDefault from "@/components/cardTrab"

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
    <CardDefault/>
    <SimpleFooter/>
    </div>
   </div>
  )
}
