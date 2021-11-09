import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [categories, SetCategories] = useState(["One Punch"]);
  //agregar elementos a un array
  //   const handleAdd = () => {
  //     SetCategories(["HunterXHunter", ...categories]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory SetCategories={SetCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
