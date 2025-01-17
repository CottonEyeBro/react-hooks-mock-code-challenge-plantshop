import React, { useState } from "react"; //

function NewPlantForm( {setPlantArr} ) { //
//
  const [name, setName] =useState("")
  const [image, setImage] =useState("")
  const [price, setPrice] =useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newPlant = {
      name: name,
      image: image,
      price: price
    }

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then((response) => response.json())
      .then((data) => {
        setPlantArr(plantArr => [...plantArr, data])
      })
  }
//
  return (

    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}> //
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          onChange={(e) => setName(e.target.value)} //
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          onChange={(e) => setImage(e.target.value)} //
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          onChange={(e) => setPrice(e.target.value)} //
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
