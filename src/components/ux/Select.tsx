import { SelectHTMLAttributes } from "react";

type SelectProps = {
 
  icon?: React.ReactNode
  label?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export function Select({  icon , label , className , ...props}: SelectProps) {
  const stylesDefault = "py-1 px-2 border border-gray-300 rounded-md text-gray-600";

  return (
    <>
    <div className="flex flex-col text-sm gap-1 ">
        {label &&  (
            <label className="flex items-center gap-1 text-gray-500 "><span>{icon}</span>{label}</label>
        )}
          <select className={ `${stylesDefault} ${className}`} {...props}>
        
          </select>
    </div>
    </>
  );
}
