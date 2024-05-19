import clsx from "clsx";

const showBorder = true

export function up_clsx(classes: string[]) {
    return clsx(
        ...classes,
        border
    )
}
export const border = {'border border-amber-500 rounded-2xl': showBorder}