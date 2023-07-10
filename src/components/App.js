import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const[listings, setListings] = useState([])
  const [input, setInput] = useState("")
  const [sort, setSort] = useState(false)
  

  useEffect(() =>{
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then((data) => setListings(data))
  }, [])

  function handleSelectedListings(selectedListings){
    setInput(selectedListings)
  }


function handleDelete(id){
  const newListings = listings.filter((listing) => {
    return listing.id != id
  })

  setListings(newListings)
}

function sortByLocation(){

  setSort((sort) => !sort)

  const updatedListings = listings.sort((listing1, listing2) => {
    
    if(sort){
      if(listing1.location.toLowerCase() > listing2.location.toLowerCase()){
      return 1
      }
     if(listing1.location.toLowerCase() < listing2.location.toLowerCase()){
      return -1
     }
      return 0
     }
   if(sort === false){
    if(listing1.location.toLowerCase() > listing2.location.toLowerCase()){
      return -1
    }
    if(listing1.location.toLowerCase() < listing2.location.toLowerCase()){
      return 1
    }
    return 0
   }
  })


  setListings(updatedListings)

}

const newListings = listings.filter((listing) => {
  if(input.length > 0){
    return listing["description"].toLowerCase().startsWith(input.toLowerCase())
  }
  else{
    return true
  }

})

  return (
    <div className="app">
      <Header handleSelectedListings={handleSelectedListings} sortByLocation={sortByLocation}/>
      <ListingsContainer handleDelete={handleDelete} listings={newListings} />
    </div>
  );
}

export default App;
