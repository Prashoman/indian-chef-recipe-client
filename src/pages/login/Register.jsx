import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginWithSocalMidea from "./LoginWithSocalMidea";
import { AuthContextProvider } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { user, userSinUp } = useContext(AuthContextProvider);
  //console.log(userSinUp);

  const handleSinUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    setEmailError("");
    setPasswordError("");
    setError("");
    if (email == "") {
      setEmailError("Email is empty");
    }

    if (password.length == 0) {
      setPasswordError("pass field is empty");
    } else if (password.length < 6) {
      setPasswordError(" Password at least 6 characters");
    }
    if (email && password.length >= 6) {
      console.log(email, password, name, photo);
      userSinUp(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateProfile(loggedUser, {
            displayName: name,
            photoURL: photo,
          });
          form.reset();
        })
        .catch((error) => {
          const massage = error.message;
          if (massage) {
            setError("This Email Already Exit");
          }
          //setError(massage);
          //console.log(error);
        });
    }
  };
  return (
    <div>
      <div className="border w-2/4 h-auto mx-auto py-12 mb-8 border-gray-400 shadow mt-20">
        <h1 className="text-center text-3xl font-bold font-sans mb-5">
          Register First
        </h1>
        <div className="px-12 mb-3 w-full h-auto">
          <p className="text-red-600 text-2xl font-sans font-bold">{error}</p>
          <p className="text-red-600 text-2xl font-sans font-bold">
            {emailError}
          </p>
          <p className="text-red-600 text-2xl font-sans font-bold">
            {passwordError}
          </p>
        </div>
        <form onSubmit={handleSinUp} className="px-12">
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
        <LoginWithSocalMidea></LoginWithSocalMidea>
      </div>
    </div>
  );
};

export default Register;
