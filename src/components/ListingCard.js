import React, {useState} from "react";

function ListingCard({image, description, location, id, handleDelete}) {
  const [favorite, setFavorite] = useState(false)

  function handleFavorite(){
    setFavorite((favorite) => !favorite)
  }

  function deleteListing(){
   fetch(`http://localhost:6001/listings/${id}`, {
    method: 'DELETE'
   })

   handleDelete(id)

  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> . {location}</span>
        <button className="emoji-button delete" onClick={deleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
