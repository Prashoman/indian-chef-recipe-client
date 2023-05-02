import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error, status } = useRouteError();
  console.log(error);
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="w-3/4 rounded"
          src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg"
          alt=""
        />
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
