import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="border w-2/4 h-auto mx-auto py-12 mb-8 border-gray-400 shadow mt-20">
      <h1 className="text-center text-3xl font-bold font-sans mb-5">
        Login First
      </h1>
      <form className="px-12">
        <label className="text-2xl mb-3 block" htmlFor="email">
          Email:
        </label>
        <input
          className="border focus:outline-none focus:border-sky-500 border-black w-full h-10 px-3 rounded"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <label className="text-2xl mt-3 mb-3 block" htmlFor="password">
          Password:
        </label>
        <input
          className="border focus:outline-none focus:border-sky-500 mb-4  border-black w-full h-10 px-3 rounded"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <p>
          Are you first this website? Plz{" "}
          <Link to="/register">
            {" "}
            <span className="text-blue-400 underline">Register</span>{" "}
          </Link>
        </p>
        <input
          className="bg-red-600 text-fuchsia-50 mt-7 w-full h-10 px-3 rounded"
          type="submit"
          value="Login"
        />
      </form>

      <div className="flex justify-between items-center px-12">
        <button className="bg-blue-600 text-fuchsia-50 mt-7 w-40 h-10 px-3 rounded">
          Google
        </button>
        <button className="bg-gray-400 text-fuchsia-50 mt-7 w-40 h-10 px-3 rounded">
          Github
        </button>
      </div>
    </div>
  );
};

export default Login;
