import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plantArr} ) {

  const plantCardList = plantArr.map((plant) => {
    //console.log(plant)
    return <PlantCard 
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
    />
  })

  return (
    <ul className="cards">
      {plantCardList}
    </ul>
  );
}

export default PlantList;
