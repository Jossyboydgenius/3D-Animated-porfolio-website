import clsx from "clsx";

type HeadingProps = {
 as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
 size?: "xl" | "lg" | "md" | "sm";
 children: React.ReactNode;
 className?: string;
};
export default function Heading({
    as: Comp = "h1",
    className,
    children,
    size = "lg",
}: HeadingProps) {
    return (
      <Comp
        className = {clsx(
            "font-bold leading-tight tracking-tight text-slate-300",
            size === "xl" && "text-7x1 md:text-9x1",
            size === "lg" && "text-6x1 md:text-8x1",
            size === "md" && "text-5x1 md:text-6x1",
            size === "sm" && "text-3x1 md:text-4x1",
            className,
        )}
        >
            {children}
        </Comp>
        );
     }