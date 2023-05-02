import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipesCard = ({ recipe }) => {
  const { image, id, name, ingredients, cookingMethod, rating } = recipe;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl px-4 py-3">
        <figure>
          <img src={image} className="w-full h-40 rounded" alt="" />
        </figure>
        <div className="card-body mb-4 mt-3">
          <h2 className="card-title text-2xl font-sans font-bold mb-3">
            {name}
          </h2>
          <p>
            <span className="text-xl font-sans font-bold"> Ingredients :</span>
            <span>{ingredients.slice(0, 150)}....</span>
          </p>
          <p className="mt-3">
            <span className="text-xl font-sans font-bold">
              Cooking Method:{" "}
            </span>
            {cookingMethod}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="flex justify-center items-center">
            <Rating className="w-7 h-6" readOnly value={rating} />
            <span>{rating}</span>
          </p>

          <button className=" px-3 py-1 bg-orange-500 rounded text-white ">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
