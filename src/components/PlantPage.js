import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantArr, setPlantArr] = useState([])

  const [plantSearch, setPlantSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((response) => response.json())
      .then((data) => setPlantArr(data))
  }, [])

  const filteredPlantArr = plantArr.filter((plant) => (
    plant.name.toLowerCase().includes(plantSearch.toLowerCase())
  ))

  return (
    <main>
      <NewPlantForm />
      <Search setPlantSearch={setPlantSearch} />
      <PlantList plantArr={filteredPlantArr} />
    </main>
  );
}

export default PlantPage;
