import React from "react";
import { Link } from "react-router-dom";

const CardChef = ({ chef }) => {
  const { name, id, image, experience, numberRecipe, likes } = chef;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl px-4 py-6 rounded">
        <figure>
          <img src={image} className="w-full h-52 rounded" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-sans font-bold mt-3">
            {name}
          </h2>
          <h2 className="card-title text-xl font-sans font-bold mt-3">
            Experience: {experience}
          </h2>
          <div className="flex justify-between items-start">
            <p>
              <span className="text-xl font-sans font-semibold">Recipes:</span>{" "}
              {numberRecipe}
            </p>
            <p>
              <span className="text-xl font-sans font-semibold">Likes:</span>{" "}
              {likes}
            </p>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/chef/${id}`}>
              <button className="me-3 px-5 py-3 bg-orange-500 rounded text-white mt-8">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardChef;
