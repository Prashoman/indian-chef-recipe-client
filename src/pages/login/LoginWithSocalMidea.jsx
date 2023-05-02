import React, { useContext } from "react";
import { AuthContextProvider } from "../../provider/AuthProvider";

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
    <div>
      <div className="flex justify-between items-center px-12">
        <button
          onClick={handleGoogleLogin}
          className="bg-blue-600 text-fuchsia-50 mt-7 w-40 h-10 px-3 rounded"
        >
          Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="bg-gray-400 text-fuchsia-50 mt-7 w-40 h-10 px-3 rounded"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default LoginWithSocalMidea;
