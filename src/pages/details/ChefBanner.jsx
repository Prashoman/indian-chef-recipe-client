import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefBanner = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-blue-50 px-32 flex justify-between items-center ">
      <div className="w-3/6">
        <img
          className="w-full h-96 mt-10 mb-10 rounded"
          src={data?.image}
          alt=""
        />
      </div>
      <div className="w-3/6 ms-10">
        <h1 className="text-3xl font-sans font-bold mb-3">{data?.name}</h1>
        <p className="text-xl font-sans mb-3">{data?.description}</p>
        <h2 className="text-3xl font-sans font-bold mb-4">
          Experience: {data?.experience}
        </h2>
        <div className="flex ">
          <p className="text-xl font-sans font-medium">
            Likes: {data?.likes} K
          </p>
          <p className="ms-5 text-xl font-sans font-medium">
            Recipes: {data?.numberRecipe}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
