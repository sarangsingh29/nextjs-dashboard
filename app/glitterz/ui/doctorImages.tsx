import Image from "next/image";
import {up_clsx} from "@/app/glitterz/ui/cslx/borderToggleClsx";

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
            "                day at a time. Of course, I'll ensure that you are doing it right, " +
            "but the end-goal always remains the same. You stop or you go."
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
        <div className={up_clsx([
            'flex flex-row',
            'justify-center'
        ], false)}>
            <DoctorImageDescription {...imageMap.era}/>
            <DoctorImageDescription {...imageMap.saurav}/>

        </div>
    )
}

function DoctorImage(props: ImageProps) {
    return (
        <div className={up_clsx([
            "flex flex-col",
            "items-center",
            "bg-sky-50",
            "p-0.5"
        ], true)}>
            <Image
                src={props.path}
                alt={`${props.fullName}'s profile picture`}
                width={70}
                height={70}
            />
            <div className={up_clsx([
                "md:block", "hidden",
                "flex flex-col",
                "items-center",
                "p-1"
            ])}>
                <p className="text-base font-semibold">
                    {props.fullName}
                </p>
                <p className="text-sm text-gray-500">
                    {props.degrees}
                </p>
            </div>
        </div>
    )
}

function DoctorImageDescription(props: ImageProps) {
    return (<div className={up_clsx([
            "w-1/2",
            "px-0.5 py-1",
        ])}>
            <DoctorImage {...props} />
            {/*<p className={kanit.className}>*/}
            {/*    {props.description}*/}
            {/*</p>*/}
        </div>
    )
}