import React from "react";

const SubscribleEmail = () => {
  return (
    <div className=" lg:px-32 my-8">
      <div className="w-full h-auto bg-slate-200 py-6 rounded">
        <div className="lg:w-3/4 lg:flex px-4 lg:ms-20 lg:text-center">
          <div>
            <h1 className="text-3xl font-sans font-light mt-3 mb-4">
              Never miss a recipe from Indian chef Food
            </h1>
            <h1 className="text-2xl font-sans font-extralight mb-5">
              Sign up to receive our weekly newsletter!
            </h1>
            <div className="mb-5">
              <input
                type="text"
                className="border focus:outline-none focus:border-sky-500 border-black lg:w-60 h-8 px-3 rounded"
              />
              <button className="bg-orange-500 px-6 py-2 rounded text-white ms-5">
                Sing Up me
              </button>
            </div>
            <p className="text-xl font-sans font-light">
              By entering your details, you are agreeing to Indian Chef terms
              and conditions. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribleEmail;
