import Image from "next/image";
import {up_clsx} from "@/app/glitterz/ui/cslx/borderToggleClsx";

export interface ServiceInfoProps {
    readonly serviceName: string;
    readonly imagePath: string;
    readonly serviceDescription: string
}

const services = {
    "serviceA": {
        serviceName: "Service - A",
        imagePath: "/glitterz/girl.svg",
        serviceDescription: "Service - A is the best service that we provide. " +
            "This is definitely something that you must consider getting done " +
            "on a regular basis yes are you there what are you upto?"
    },
    "serviceB": {
        serviceName: "Service - B",
        imagePath: "/glitterz/boy.svg",
        serviceDescription: "Service - B is the best service that we provide. " +
            "This is definitely something that you must consider getting done " +
            "on a regular basis"
    }
}

export default function ServiceInfo() {

    return (
        <div className={up_clsx([
            "flex flex-row flex-wrap",
            "justify-center",
            "w-2/3"
        ], false)}>
            <ServiceInfoCard {...services.serviceA}/>
            <ServiceInfoCard {...services.serviceB}/>
            <ServiceInfoCard {...services.serviceB}/>
            <ServiceInfoCard {...services.serviceA}/>
            <ServiceInfoCard {...services.serviceA}/>
            <ServiceInfoCard {...services.serviceB}/>
            <ServiceInfoCard {...services.serviceB}/>
            <ServiceInfoCard {...services.serviceA}/>
        </div>

    )
}

function ServiceInfoCard(props: ServiceInfoProps) {
    return (<a href={"#"} className={up_clsx([
            "w-2/5",
            "m-1",
            "p-1",
            "border-2"
        ], true)}>
            <div className={up_clsx([
                "flex flex-row",
            ], false)}>
                <Image
                    src={props.imagePath}
                    alt={`${props.serviceName}'s image`}
                    className="mr-4 rounded-full"
                    width={100}
                    height={100}
                />
                <div className={up_clsx([
                    "flex flex-col",
                    "p-1",
                    "justify-center",
                ], false)}>
                    <p className="truncate text-sm font-semibold md:text-base">
                        {props.serviceName}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                        {props.serviceDescription}
                    </p>
                </div>
            </div>
        </a>
    )
}