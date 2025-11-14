// React
import { forwardRef } from "react";

type InputProps = {
  label?: string;
  icon?: React.ReactNode;
  htmlFor?: string
  
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon,  htmlFor ,  ...props }, ref) => {
    const stylesDefault = "";

    return (
      <div>
        {label && (
          <label htmlFor={htmlFor}>
            <span>{icon}</span>
            {label}
          </label>
        )}

        <input className={stylesDefault} {...props} ref={ref} />
      </div>
    );
  }
);

Input.displayName = "Input";
