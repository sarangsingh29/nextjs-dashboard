import Image from "next/image";
import {kanit} from "@/app/ui/fonts";
import clsx from "clsx";
import {border, up_clsx} from "@/app/glitterz/ui/cslx/borderToggleClsx";

interface ImageProps {
    path: string,
    degrees: string,
    fullName: string,
    description: string,
}


const imageMap = {
    "era": {
        path: "/glitterz/girl.svg",
        degrees: "BDS/MDS",
        fullName: "Dr. Era Singh",
        description: "Who are you to say what I should or should not say, huh?\n" +
            "                The life is one big puzzle and every one is living it one\n" +
            "                day at a time."
    },
    "saurav": {
        path: "/glitterz/boy.svg",
        degrees: "BDS/MDS",
        fullName: "Dr. Saurav Singh",
        description: "I know what you mean. I am just troubled at this point." +
            "All jokes apart though, I will cure you and make you better."
    }
}

export default function DoctorImages() {
    return (
        <div className={
            up_clsx(['flex', 'px-20 py-3'])
        }>
            <DoctorImageDescription {...imageMap.era}/>
            <DoctorImageDescription {...imageMap.saurav}/>

        </div>
    )
}

function DoctorImage(props: ImageProps) {
    return (<div className="flex items-center px-10 border-0">
            <Image
                src={props.path}
                alt={`${props.fullName}'s profile picture`}
                className="mr-4 rounded-full"
                width={100}
                height={100}
            />
            <div className="min-w-0 border-0">
                <p className="truncate text-sm font-semibold md:text-base">
                    {props.fullName}
                </p>
                <p className="hidden text-sm text-gray-500 sm:block">
                    {props.degrees}
                </p>
            </div>
        </div>
    )
}

function DoctorImageDescription(props: ImageProps) {
    return (<div className={up_clsx([
            "flex-row",
            "w-1/2",
            "px-10 py-2",
            "mr-2"
        ])}>
            <DoctorImage {...props} />
            <p className={kanit.className}>
                {props.description}
            </p>
        </div>
    )
}