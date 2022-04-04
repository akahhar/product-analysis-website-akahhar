import React from "react";

const Review = (props) => {
  const { name, image, content, ratings } = props.review;
  return (
    <div className="col-xl-4">
      <div className="review-wrapper text-center mb-5">
        <div className="review-image ">
          <img className="w-25 rounded-circle mb-2" src={image} alt="" />
        </div>
        <div className="content">
          <h4>{name}</h4>
          <p>{content}</p>
          <small>
            Ratings : <span style={{ color: "#40a944" }}>{ratings}</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Review;
