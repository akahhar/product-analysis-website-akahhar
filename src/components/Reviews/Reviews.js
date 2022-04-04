import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewItem from "../ReviewItem/ReviewItem";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="container mt-5 pt-4">
      <h2 className="text-center mb-5">What our customer say!</h2>
      <div className="row">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
