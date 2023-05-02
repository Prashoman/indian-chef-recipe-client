import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginWithSocalMidea from "./LoginWithSocalMidea";
import { AuthContextProvider } from "../../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { sinUpwithEmailPassword } = useContext(AuthContextProvider);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    const email = form.email.value;
    setError("");
    if (password.length == 0 || email == "") {
      setError("Fields is empty");
    }
    if (email && password) {
      sinUpwithEmailPassword(email, password)
        .then((result) => {
          const loggedUser = result.user;
          form.reset();
          navigate(from, { replace: true });
          //console.log(loggedUser);
        })
        .catch((error) => {
          const massage = error.message;
          if (massage) {
            setError("A user's email address or password doesn't match");
          }
        });
    }
  };
  return (
    <div className="px-4">
      <div className="border  lg:w-2/4 h-auto mx-auto py-12 mb-8 border-gray-400 shadow mt-20">
        <h1 className="text-center text-3xl font-bold font-sans mb-5">
          Login First
        </h1>
        <div className="px-12 mb-3 w-full h-auto">
          <p className="text-red-600 text-2xl font-sans font-bold">{error}</p>
        </div>
        <form onSubmit={handleLogin} className="px-12">
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

        <LoginWithSocalMidea></LoginWithSocalMidea>
      </div>
    </div>
  );
};

export default Login;
