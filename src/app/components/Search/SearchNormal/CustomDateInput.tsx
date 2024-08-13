import React from "react";
import { IMaskInput } from "react-imask";

interface CustomDateInputProps {
  placeholder: string;
  className?: string;
}

const CustomDateInput: React.FC<CustomDateInputProps> = ({
  placeholder,
  className = "text-left mt-1 text-sm mb-3.5 w-[73px] mr-8 ml-2 outline-none",
}) => {
  return (
    <IMaskInput
      mask="00/00/00"
      unmask={true}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default CustomDateInput;
