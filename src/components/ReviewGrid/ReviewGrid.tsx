import React from "react";

import ReviewItem from "./components/ReviewItem";
import { reviews } from "@/utils/constants";

export const ReviewGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          clientName={review.clientName}
          reviewText={review.reviewText}
        />
      ))}
    </div>
  );
};

export default ReviewGrid;
