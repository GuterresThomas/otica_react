import StickyNavbar from "../../components/navbar"
import DefaulSimpleCard from "../../components/nossasLojas"

export default function Page() {
    return (
        <div>
            <StickyNavbar/>
            <div className="flex justify-center">
                 <div>
                    <DefaulSimpleCard/>
                 </div>
            </div>
        </div>
    )
}