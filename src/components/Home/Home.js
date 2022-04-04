import React from "react";
import { Link } from "react-router-dom";
import SliderImage from "../../assets/Image/img_banner4-2-new.jpg";
import useReviews from "../../hooks/useReviews";
import ReviewItem from "../ReviewItem/ReviewItem";

const Home = () => {
  const [reviews] = useReviews();
  const sliceReviews = reviews.slice(0, 3);
  return (
    <>
      <div className="home pt-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 d-flex">
              <div className="left pt-5 mb-5 pe-5">
                <h3>Tomatoes, Online & Garlic</h3>
                <p className="pe-5">
                  100% certified-organic mix of fruit and veggies. Perfect for
                  weekly cooking and snacking
                </p>
                <button className="btn">Shop now</button>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="right pt-5 mb-5">
                <img src={SliderImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review pb-5">
        <div className="review container mt-5">
          <h2 className="text-center mb-5">
            Customer Reviews ({sliceReviews.length})
          </h2>
          <div className="row">
            {sliceReviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/reviews" className="text-center btn">
              See All Reviews
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
