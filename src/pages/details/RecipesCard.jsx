import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipesCard = ({ recipe }) => {
  const { image, id, name, ingredients, cookingMethod, rating } = recipe;
  const [disable, setDisable] = useState(false);
  const handleFavorite = () => {
    console.log("asi");
    toast.success("Recipe is your favorite added successfully!");
    setDisable(!disable);
  };
  return (
    <div>
      <div className="card w-full h-full  bg-base-100 shadow-xl px-4 py-3">
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
            <Rating style={{ maxWidth: 150 }} readOnly value={rating} />
            <span>{rating}</span>
          </p>

          <button
            onClick={handleFavorite}
            disabled={disable}
            className={` px-3 py-1 rounded text-white ${
              disable ? "bg-slate-300" : "bg-orange-500"
            }`}
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipesCard;
