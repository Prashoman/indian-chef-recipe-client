import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import RecipesCard from "./RecipesCard";
import Spinner from "../spinner/Spinner";

const ChefBanner = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [recipesData, setRecipesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://indian-chef-recipe-server.vercel.app/recipes/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data) {
          setRecipesData(data);
          setLoading(false);
        }
      });
  }, []);
  //console.log(id);
  console.log(recipesData);
  return (
    <>
      {loading ? (
        <>
          <Spinner></Spinner>
        </>
      ) : (
        <>
          <div className="bg-blue-50 py-6 px-4 lg:px-32 lg:flex justify-between items-center ">
            <div className="lg:w-3/6">
              <img
                className="w-full h-96 lg:mt-10 mb-10 rounded"
                src={data?.image}
                alt=""
              />
            </div>
            <div className="lg:w-3/6 lg:ms-10">
              <h1 className="text-3xl font-sans font-bold mb-3">
                {data?.name}
              </h1>
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
          <div className="px-4 my-3 lg:px-32 mt-4">
            <h1 className="text-4xl text-center font-sans font-bold mt-10">
              selected chef's recipes
            </h1>
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              {recipesData.map((singleData) => (
                <RecipesCard
                  key={singleData.id}
                  recipe={singleData}
                ></RecipesCard>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChefBanner;
