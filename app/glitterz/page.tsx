import {up_clsx} from "@/app/glitterz/ui/cslx/borderToggleClsx";
import ServiceInfo from "@/app/glitterz/ui/serviceInfo";
import Glitterz from "@/app/glitterz/ui/glitterzCard";

export default function Page() {
    return (

        <div className={up_clsx([
            "flex flex-row",
            "ml-1 mr-1",
            "px-2 py-2",
        ], false)}>
            <Glitterz/>
            <div className="border-2 border-black rounded-2xl ml-1 mr-5 max-h-screen w-1"/>
            <ServiceInfo/>
        </div>

    )
}
