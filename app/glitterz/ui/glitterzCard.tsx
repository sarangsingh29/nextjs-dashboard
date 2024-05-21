import {up_clsx} from "@/app/glitterz/ui/cslx/borderToggleClsx";
import Image from "next/image";
import DoctorImages from "@/app/glitterz/ui/doctorImages";

export default function Glitterz() {
    return (
        <div className={up_clsx([
            "flex flex-col",
            "w-1/3 max-h-screen",
            "m-5",
            "p-0.5",
            "justify-center"
        ], false)}>
            <div className={up_clsx([
                "flex",
                "flex-col",
                "mb-1",
                "px-2 py-2",
                "items-end"
            ], false)}>
                <Image src="./glitterz/tooth.svg"
                       alt={"GlitterZ Logo"}
                       width={100}
                       height={500}
                       className={up_clsx([])}
                />
                <p className={up_clsx([
                    "flex",
                    "justify-center",
                ])}>
                    GlitterZ Dental Clinic
                </p>
            </div>
            <DoctorImages/>
        </div>
    )
}