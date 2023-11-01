import StickyNavbar from "../../components/navbar";
import CarouselDefault from "../../components/glassesModels"
import CarouselDefaultGlasses from "@/components/glassesCaroussel";
export default function Page() {
    return (
        <div>
            <StickyNavbar/>
            <div>
                <CarouselDefault/>
            </div>
            <div>
                <CarouselDefaultGlasses/>
            </div>
        </div>
    )
}