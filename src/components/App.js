import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[listings, setListings] = useState([])
  const [input, setInput] = useState("")
  

  useEffect(() =>{
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then((data) => setListings(data))
  }, [])

  function handleSelectedListings(selectedListings){
    setInput(selectedListings)
  }

  const newListings = listings.filter((listing) => {
    if(input.length > 0){
      return listing["description"].toLowerCase().startsWith(input.toLowerCase())
    }
    else{
      return true
    }

  })

function handleDelete(id){
  const newListings = listings.filter((listing) => {
    return listing.id != id
  })

  setListings(newListings)
}
  

  return (
    <div className="app">
      <Header handleSelectedListings={handleSelectedListings}/>
      <ListingsContainer handleDelete={handleDelete} listings={newListings} />
    </div>
  );
}

export default App;
