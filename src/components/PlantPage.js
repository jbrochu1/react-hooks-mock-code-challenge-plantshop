
import React, { useState, useEffect } from 'react';
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [newPlant, setNewPlant] = useState({
  //   name: "",
  //   image: "",
  //   price:"",
  // });
  
  useEffect(() => {

    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));  
  }, []);

  

  function handleAdd(newPlant){
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  }

  const filteredPlants = plants.filter((plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  }))

  return (
    <main>
      <NewPlantForm onAdd={handleAdd} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList 
        plants={filteredPlants}
        // onUpdatePlant={handleUpdatePlant}
        />
    </main>
  );
}

export default PlantPage;
