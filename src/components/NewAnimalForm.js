
import React, { useState } from "react"


function NewAnimalForm({ addNewAnimal }) {
    
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

        // POST REQUEST HERE 
        addNewAnimal(newAnimal)
        setFormData(initialData)
    }

    return (
        <div className="new-animal-form">
            <h2>New Animal</h2>
            <form  className="form"onSubmit={(e) => {
                console.log("submitting form...");
                handleSubmit(e);
            }}>
                <input className="input-field"type="text" name="name" placeholder="Animal Name" value={formData.name} onChange={handleFormData} />
                <input className="input-field"type="text" name="type" placeholder="Animal Type" value={formData.type} onChange={handleFormData} />
                <input className="input-field"type="text" name="description" placeholder="Animal Description" value={formData.description} onChange={handleFormData} />
                <input className="input-field"type="text" name="image" placeholder="Animal Image URL" value={formData.image} onChange={handleFormData} />
                <button className="submitBtn"type="submit">Add New Animal</button>
            </form>
        </div>
    )
}

export default NewAnimalForm;

