import "./App.css";
import { useEffect, useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import DisplayList from "./components/DisplayList";
import FilteredList from "./components/FilteredList";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {

  const productList = bakeryData;

  return (
    <div className="App">
      <div className="Filter">
        <FilteredList list={productList}/>
      </div>
    </div>

  );
}

export default App;
