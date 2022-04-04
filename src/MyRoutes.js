import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reviews" element={<Reviews />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />}>
        {/* <Route path=":postId" element={<PostDetails />}></Route> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
