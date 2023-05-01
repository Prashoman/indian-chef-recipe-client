import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="border w-2/4 h-auto mx-auto py-12 mb-8 border-gray-400 shadow mt-20">
        <h1 className="text-center text-3xl font-bold font-sans mb-5">
          Register First
        </h1>
        <form className="px-12">
          <label className="text-2xl mb-3 block" htmlFor="name">
            Name:
          </label>
          <input
            className="border focus:outline-none focus:border-sky-500 border-black w-full h-10 px-3 rounded"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
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
          <label className="text-2xl mb-3 block" htmlFor="photo">
            Photo Url:
          </label>
          <input
            className="border focus:outline-none focus:border-sky-500 border-black w-full h-10 px-3 rounded"
            type="text"
            name="photo"
            placeholder="Enter your Photo url"
          />
          <p className="mt-2">
            You have already account this website? Plz
            <Link to="/login">
              {" "}
              <span className="text-blue-400 underline">Login</span>{" "}
            </Link>
          </p>
          <input
            className="bg-red-600 text-fuchsia-50 mt-7 w-full h-10 px-3 rounded"
            type="submit"
            value="SingUp"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
