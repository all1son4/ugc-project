import React from "react";
import { stepsOfProcess } from "@/utils/constants";
import { motion } from "framer-motion";

const arrow = (
  <svg
    className="w-5 h-5 text-neutral-400 mx-2 hidden sm:block"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5l8 7-8 7" />
  </svg>
);

export const StepsOfProcess = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-center items-center gap-4 w-full">
      {stepsOfProcess.map((step, index) => (
        <React.Fragment key={step}>
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-neutral-300 opacity-20 blur-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4,
              }}
            />
            {/* Таблетка */}
            <div className="relative px-6 py-3 border-2 border-black text-black rounded-full text-lg font-medium bg-white shadow-sm whitespace-nowrap transition-all duration-300">
              {step}
            </div>
          </div>
          {index !== stepsOfProcess.length - 1 && arrow}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepsOfProcess;
