import React from "react";
import Heading from "./Heading";

const Blogs = () => {
  return (
    <>
      <Heading></Heading>
      <div className="grid lg:grid-cols-2 px-4 lg:px-32 gap-8 mt-5 mb-5">
        <div className="rounded w-full h-auto  bg-blue-50 border px-4 py-3 border-gray-300 shadow-sm">
          <h1 className="text-2xl font-sans font-bold mb-4">
            1. differences between uncontrolled and controlled components?
          </h1>
          <p>
            React is one of the most favored languages when it comes to the
            development of User Interfaces, as it uses the concept of
            components. Consequently, there will be many times when you will
            deal with forms in react. There are two options in that case, and
            you can use controlled or uncontrolled components. You must have
            seen some warnings when using uncontrolled components and have to
            shift to controlled ones.
          </p>
        </div>
        <div className="rounded w-full h-auto px-4 py-3  bg-blue-50 border border-gray-300 shadow-sm">
          <h1 className="text-2xl font-sans font-bold mb-4">
            2. How to validate React props using PropTypes?
          </h1>
          <p>
            That's it! React's PropTypes will help you validate the props passed
            to your component and provide helpful warnings during development if
            any prop validation fails. Remember to remove the PropTypes checks
            in production builds, as they are only intended for development
            purposes..
          </p>
        </div>
        <div className="rounded w-full h-auto px-4 py-3 bg-blue-50 border border-gray-300 shadow-sm">
          <h1 className="text-2xl font-sans font-bold mb-4">
            3. difference between nodejs and express js?
          </h1>
          <p>
            Node.js is a runtime environment that allows you to execute
            JavaScript on the server-side, Express.js is a framework built on
            top of Node.js that provides additional features and abstractions to
            simplify web application development. Express.js leverages the
            capabilities of Node.js to handle HTTP requests and responses,
            routing, middleware, and other web-related tasks.
          </p>
        </div>
        <div className="rounded w-full h-auto px-4 py-3 bg-blue-50 border border-gray-300 shadow-sm">
          <h1 className="text-2xl font-sans font-bold mb-4">
            4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p>
            custom hooks provide a way to encapsulate and share reusable logic
            in React components. They promote code reusability, abstraction, and
            encapsulation, allowing you to manage state, handle side effects,
            and compose behavior in a modular and efficient manner..
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogs;
