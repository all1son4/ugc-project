import { Loader } from "lucide-react";
import { SpinnerProps } from "./Spinner.types";

export const Spinner = ({ size = 24, className = "" }: SpinnerProps) => {
  const sizeClass = typeof size === "number" ? `${size}px` : size;

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Loader
        className="animate-spin text-gray-500"
        style={{ width: sizeClass, height: sizeClass }}
      />
    </div>
  );
};

export default Spinner;
