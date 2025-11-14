// React
import { ButtonHTMLAttributes } from "react";

// Import Icons
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

type ButtonProps = {
  children?: React.ReactNode;
  variant: "close" | "btnMenu" | "blue" | "white" | "gray"
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  const stylesDefault =
    "py-1 px-2 rounded-md flex items-center justify-center w-fit cursor-pointer gap-2 transition duration-300";

  const stylesVariant = {
    close:
      "bg-transparent text-2xl text-gray-600 border- border-gray-200 hover:text-red-500 ",
    btnMenu:
      "bg-transparent text-2xl text-gray-600 border border-gray-200  hover:text-blue-500 ",

    blue: "bg-blue-500 text-sm text-white border-none hover:bg-blue-600",
    white: "bg-white-500 text-sm text-gray-700 border hover:bg-blue-600 hover:text-white",
    gray: "bg-gray-100 text-sm text-gray-500  hover:bg-gray-600 hover:text-white",
  };

  const IconVariant = {
    close: <IoClose />,
    btnMenu: <IoMdMenu />,
    blue: null,
    white: null,
    gray: null
  };

  return (
    <button
      className={`${stylesDefault} ${stylesVariant[variant]} ${className}`}
      {...props}
    >
      {IconVariant && IconVariant[variant]}

      {children}
    </button>
  );
}
