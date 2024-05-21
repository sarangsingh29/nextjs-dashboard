import clsx from "clsx";

const showBorder = false

export function up_clsx(classes: string[], show: boolean = showBorder) {
    return clsx(
        ...classes,
        border(show)
    )
}

export function border(show: boolean = showBorder) {
    return {'border border-black rounded-2xl': show}
}