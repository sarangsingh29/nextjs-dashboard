import {inter, lusitana} from "@/app/ui/fonts";
import {Suspense} from "react";
import {CardsSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import Image from "next/image";
import DoctorImages from "@/app/glitterz/ui/doctorImages";
import {up_clsx} from "@/app/glitterz/ui/cslx/borderToggleClsx";

export default function Page() {
    return (
        <div className={up_clsx([
            "flex-row",
            "px-3 py-3",
        ])}>
            <DoctorImages/>
            <DoctorImages/>
        </div>
    )
}
