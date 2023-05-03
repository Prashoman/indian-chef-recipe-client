import React, { useContext } from "react";
import { AuthContextProvider } from "../../provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginWithSocalMidea = () => {
  const { logInWithGoogle, logInWithGithub } = useContext(AuthContextProvider);

  //google login
  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //github login
  const handleGithubLogin = () => {
    logInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mt-7">
      <div className="flex justify-normal items-center px-12">
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-600 text-fuchsia-50 flex justify-between items-center px-5 py-2 rounded"
        >
          <FaGoogle className=" me-2"></FaGoogle>Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="bg-gray-400 ms-3 text-fuchsia-50 flex justify-between items-center px-5 py-2 rounded"
        >
          <FaGithub className="me-2"></FaGithub>
          Github
        </button>
      </div>
    </div>
  );
};

export default LoginWithSocalMidea;
