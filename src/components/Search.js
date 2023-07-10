import React, {useState} from "react";

function Search({handleSelectedListings}) {
  const [selectedListings, setSelectedListings] = useState("")
  

  

  function handleSubmit(e) {
    e.preventDefault();
    handleSelectedListings(selectedListings);
  }



  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={selectedListings}
        onChange={(e) => setSelectedListings(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
