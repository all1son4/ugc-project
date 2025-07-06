import React, { FC } from "react";

import { ReviewItemProps } from "./ReviewItem.types";

export const ReviewItem: FC<ReviewItemProps> = ({ reviewText, clientName }) => {
  return (
    <div className="bg-white border border-black rounded-2xl p-6 max-w-md shadow-sm">
      <p className="text-black text-base mb-4">{`"${reviewText}"`}</p>
      <p className="text-black text-sm font-semibold text-right">
        — {clientName}
      </p>
    </div>
  );
};

export default ReviewItem;
