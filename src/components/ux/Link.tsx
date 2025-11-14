import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type LinkProps = {
  children: React.ReactNode;
  variant: "gray" 
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkNavegation({
  children,
  variant,
  href,
  className,
  ...props
}: LinkProps) {

    const StylesVariant = {
        gray: "flex items-center gap-3 text-gray-600 transition-all duration-300 hover:text-blue-500" 
    }

  return(
   <Link 
   className={`${StylesVariant[variant]} ${className}`}
   href={href}
   {...props}  
   >
    {children}
    </Link>
)
}
