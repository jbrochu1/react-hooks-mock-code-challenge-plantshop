import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantDetails = plants.map(plant =>(
    <PlantCard 
      
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price} />
  ))
  
    

  return (
    <ul className="cards">{plantDetails}</ul>
  );
}

export default PlantList;
