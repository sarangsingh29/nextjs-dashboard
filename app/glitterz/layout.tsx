import {up_clsx} from "@/app/glitterz/ui/cslx/borderToggleClsx";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className={up_clsx([
            "flex flex-col",
            "justify-center",
            "h-screen",
            "bg-gradient-to-l from-blue-100 to-blue-200"
        ], false)}>{children}</div>
    );
}
