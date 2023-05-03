import React from "react";
import { useLoaderData } from "react-router-dom";
import CardChef from "./CardChef";

const ChefSection = () => {
  const chefData = useLoaderData();
  //console.log(chefData);
  return (
    <div className=" mt-10 lg:mt-20">
      <h1 className="text-5xl text-center font-sans font-semibold">
        Best Indian Chef
      </h1>
      <div className="grid lg:grid-cols-3 gap-4 mt-10 lg:mt-20 px-4 lg:px-32 mb-10">
        {chefData.map((data) => (
          <CardChef key={data.id} chef={data}></CardChef>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
