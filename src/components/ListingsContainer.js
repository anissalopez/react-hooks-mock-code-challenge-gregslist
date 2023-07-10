import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {

const listingCards = listings.map((listing) => {
      return <ListingCard handleDelete={handleDelete} image={listing.image} location={listing.location} description={listing.description} id ={listing.id} key ={listing.id}/>
    })
  
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
