import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5 ">
      <h4>What is context api</h4>
      <p>
        Answer : The Context API is a React structure that enables you to
        exchange unique details and assists in solving prop-drilling from all
        levels of your application. Context API is a React API that can solve a
        lot of problems that modern applications face related to state
        management and how they’re passing state to their components. Instead of
        installing a state management library in your project that will
        eventually cost your project performance and increase your bundle size,
        you can easily go with Context API and be fine with it. This API solves
        one major problem–prop drilling.
      </p>
      <h4>What is semantic tags</h4>
      <p>
        Answer : Semantic HTML elements are those that clearly describe their
        meaning in a human- and machine-readable way. Elements such as "header"
        ,"footer" and "article" tags are all considered semantic because they
        accurately describe the purpose of the element and the type of content
        that is inside them.
      </p>
    </div>
  );
};

export default Blogs;
