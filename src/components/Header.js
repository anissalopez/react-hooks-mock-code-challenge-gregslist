import React from "react";
import Search from "./Search";

function Header({handleSelectedListings, sortByLocation}) {
  return (
    <>
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      
      <Search handleSelectedListings={handleSelectedListings}/>
    </header>
    <p>Sort by Name </p>
    <button onClick={sortByLocation}>⬆⬇</button>
    
    </>
  );
}

export default Header;
