import React, { FC } from "react";
import { ComponentWrapperProps } from "./ComponentWrapper.types";

export const ComponentWrapper: FC<ComponentWrapperProps> = ({
  children,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`flex justify-center items-center w-full h-full ${className || ""} ${onClick ? "cursor-pointer" : ""} px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default ComponentWrapper;
