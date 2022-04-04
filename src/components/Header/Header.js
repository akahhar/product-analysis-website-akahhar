import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <header className="text-center mt-3">
      <nav>
        <ul>
          <li>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink to="/reviews">Reviews</CustomLink>
          </li>
          <li>
            <CustomLink to="/dashboard">Dashboard</CustomLink>
          </li>
          <li>
            <CustomLink to="/blogs">Blogs</CustomLink>
          </li>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
