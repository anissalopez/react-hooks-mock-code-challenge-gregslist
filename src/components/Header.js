import React from "react";
import Search from "./Search";

function Header({handleSelectedListings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSelectedListings={handleSelectedListings}/>
    </header>
  );
}

export default Header;
