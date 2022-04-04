import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/Image/notFond.jpg";

const NotFound = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-center mb-5">OOPS! Page not be found</h2>
      <img src={notFound} alt="" />
      <br></br>
      <Link to="/" className="btn mt-2">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
