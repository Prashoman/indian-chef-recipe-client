import React from "react";

const CategoryFood = () => {
  return (
    <div className="px-4 lg:px-32 mt-6 mb-8">
      <h1 className="text-2xl font-sans font-bold text-orange-500 mt-10 mb-10 text-center">
        Browse by category
      </h1>
      <div className="lg:grid grid-cols-4 gap-8">
        <div className="card w-full h-full bg-base-100 px-2 py-3 shadow-xl image-full">
          <figure>
            <img
              className="w-full h-40"
              src="https://png.pngtree.com/png-clipart/20190214/ourmid/pngtree-png-element-in-food-and-catering-industry-png-image_547274.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-sans mt-2">
              Dinner recipe ideas
            </h2>
          </div>
        </div>
        <div className="card w-full h-full bg-base-100 px-2 py-3  shadow-xl image-full">
          <figure>
            <img
              className="w-full h-40"
              src="https://img.freepik.com/free-photo/big-tasty-burger-with-fries_144627-24415.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-sans mt-2">
              Seasonal recipe ideas
            </h2>
          </div>
        </div>
        <div className="card w-full h-full bg-base-100 px-2 py-3  shadow-xl image-full">
          <figure>
            <img
              className="w-full h-40"
              src="https://cdn.imgbin.com/12/18/12/imgbin-roast-chicken-chicken-meat-food-air-fryer-roast-chicken-roasted-chicken-with-potatoes-and-herb-YFMgRL8DDzRc2vvBuX3kf5YhQ.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-sans mt-2">
              Cuisine recipe ideas
            </h2>
          </div>
        </div>
        <div className="card w-full h-full bg-base-100 px-2 py-3  shadow-xl image-full">
          <figure>
            <img
              className="w-full h-40"
              src="https://e7.pngegg.com/pngimages/472/640/png-clipart-spicy-fried-chicken-plattter-fried-chicken-chicken-meat-chicken-leg-dish-hd-delicious-fried-chicken-poster-food-advertisement-poster.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-sans mt-2">
              Poultry recipe ideas
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFood;
