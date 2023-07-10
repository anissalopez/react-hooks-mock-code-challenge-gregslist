import React, {useState} from "react";

function Form({updateListings}) {
  const [form, setForm] = useState({
    description: "",
    image: "",
    location: ""
  })
  

  function formSubmit(e){
    e.preventDefault();
    const newItem = {
        description: form.description,
        image: form.image,
        location: form.location
    }

    fetch("http://localhost:6001/listings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    })
    .then((response) => response.json())
    .then((data) => updateListings(data))



  }

  function updateForm(e){
    setForm({...form, [e.target.name]: e.target.value})
  }



  return (
    <div>
    <form className="searchbar" onSubmit={formSubmit} >
      <input
        type="text"
        name="description"
        placeholder="Listing description"
        value={form.description}
        onChange={updateForm}
      />
       <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={updateForm}
      />
       <input
        type="text"
        name="location"
        placeholder="Listing location"
        value={form.location}
        onChange={updateForm}
      />
      <button type="submit">🔍</button>
    </form>
    </div>
  );
}

export default Form;