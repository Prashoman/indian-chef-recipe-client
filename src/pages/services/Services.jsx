import React from "react";

const Services = () => {
  return (
    <div className="mt-10 mb-5 px-4 lg:px-32">
      <h1 className="text-center text-orange-400 text-3xl font-sans font-bold mb-5">
        Recipe inspiration
      </h1>
      <p className="font-sans font-light text-center">
        Whether you're after an old favourite or inspiration for something new,
        we have the perfect recipe.
      </p>
      <h1 className="font-sans font-bold text-xl mt-3 mb-4">
        Most popular recipe collections this week
      </h1>
      <div className="grid lg:grid-cols-3 gap-8 ">
        <div className="card card-compact w-full  h-full px-2 py-3 bg-base-100 shadow-xl rounded">
          <figure>
            <img
              className="w-full h-52"
              src="https://itsu-production-assets.s3.eu-west-2.amazonaws.com/homepage_promo_dish_374_gyoza_noodles_1_26c6263817.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body mt-2">
            <h2 className="card-title text-2xl">Healthy vegan lunch recipes</h2>
          </div>
        </div>
        <div className="card card-compact w-full  h-full px-2 py-3 bg-base-100 shadow-xl rounded">
          <figure>
            <img
              className="w-full h-52"
              src="https://i2-prod.dailyrecord.co.uk/lifestyle/food-drink/article26485073.ece/ALTERNATES/s615b/0_itsu_food-1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Budget spring recipes</h2>
          </div>
        </div>
        <div className="card card-compact w-full  h-full px-2 py-3 bg-base-100 shadow-xl rounded">
          <figure>
            <img
              className="w-full h-52"
              src="https://media-cdn.tripadvisor.com/media/photo-p/15/e2/d9/c4/photo0jpg.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body mt-2">
            <h2 className="card-title text-2xl">Slow cooker pasta recipes</h2>
          </div>
        </div>
        <div className="card card-compact w-full  h-full px-2 py-3 bg-base-100 shadow-xl rounded">
          <figure>
            <img
              className="w-full h-52"
              src="https://static.wixstatic.com/media/ddab70_84b2b269daf14de590cacbf3bb65d4c4~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_580,h_546,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Augies.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body mt-2">
            <h2 className="card-title text-2xl">Easy midweek meals</h2>
          </div>
        </div>
        <div className="card card-compact w-full  h-full px-2 py-3 bg-base-100 shadow-xl rounded">
          <figure>
            <img
              className="w-full h-52"
              src="https://e7.pngegg.com/pngimages/606/648/png-clipart-california-style-pizza-sicilian-pizza-chrono-pizza-fast-food-pizza-menu-food-recipe.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body mt-2">
            <h2 className="card-title text-2xl">Mood-boosting lunch recipes</h2>
          </div>
        </div>
        <div className="card card-compact w-full h-full px-2 py-3 bg-base-100 shadow-xl rounded">
          <figure>
            <img
              className="w-full h-52"
              src="https://w7.pngwing.com/pngs/286/267/png-transparent-bibimbap-korean-cuisine-cooked-rice-u571fu934bu98ef-food-egg-thai-soup-leaf-vegetable-simple-thumbnail.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body mt-2">
            <h2 className="card-title text-2xl">Coronation hummus</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
