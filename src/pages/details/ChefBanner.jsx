import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipesCard from "./RecipesCard";

const ChefBanner = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [recipesData, setRecipesData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/recipes/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data) {
          setRecipesData(data);
        }
      });
  }, []);
  //console.log(id);
  console.log(recipesData);
  return (
    <>
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
      <div className="px-32 mt-4 mb-10">
        <h1 className="text-4xl text-center font-sans font-bold mt-10">
          selected chef's recipes
        </h1>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {recipesData.map((singleData) => (
            <RecipesCard key={singleData.id} recipe={singleData}></RecipesCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChefBanner;
