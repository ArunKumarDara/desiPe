import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number;
    className?: string;
}

export function Loader({ size = 24, className, ...props }: LoaderProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center min-h-[100px] w-full",
                className
            )}
            {...props}
        >
            <Loader2
                className="animate-spin text-primary"
                size={size}
            />
        </div>
    );
}