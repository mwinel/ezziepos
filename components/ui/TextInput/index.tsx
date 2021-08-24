import { ReactNode, HTMLAttributes } from "react";

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  className?: any;
  icon?: ReactNode | any;
  innerRef?: any;
}

const TextInput = ({ label, icon, innerRef, ...props }: TextInputProps) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
          {...props}
          ref={innerRef}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
