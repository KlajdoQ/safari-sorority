
import React, { useState } from "react"


function NewAnimalForm({ addNewAnimal, url }) {

    const initialData = {
        name: "",
        type: "",
        description: "",
        image: "",
        likes: 0,
    }

    const [formData, setFormData] = useState(initialData)

    function handleFormData(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newAnimal = {
            name: formData.name,
            type: formData.type,
            description: formData.description,
            image: formData.image,
            likes: formData.likes,

        }

        // POST REQUEST
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        })
        .then(res => res.json())
        .then(addNewAnimal)

        setFormData(initialData)
    }

    return (
        <div className="new-animal-form">
            <h2 id="form-heading">New Animal 🐾</h2>
            <form  className="form"onSubmit={(e) => {
                console.log("submitting form...");
                handleSubmit(e);
            }}>
                <input id="spaceDefault" className="input-field" type="text" name="name" placeholder="Animal Name" value={formData.name} onChange={handleFormData} /> <br/>
                <input id="spaceDefault" className="input-field" type="text" name="type" placeholder="Animal Type" value={formData.type} onChange={handleFormData} /> <br/>
                <input id="spaceDefault" className="input-field" type="text" name="description" placeholder="Animal Description" value={formData.description} onChange={handleFormData} /> <br/>
                <input id="spaceDefault" className="input-field" type="text" name="image" placeholder="Animal Image URL" value={formData.image} onChange={handleFormData} /> <br/>
                <button id="spaceDefault" className="submitBtn" type="submit">Add New Animal</button>
            </form>
        </div>
    )
}

export default NewAnimalForm;

