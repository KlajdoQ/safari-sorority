import React, { useState } from "react"


function NewAnimalForm({addNewAnimal}) {
const initialData = {
    name: "",
    image: "",
    description: "",
    likes: 0,
    animalType: "",
}

const [formData, setFormData] = useState(initialData)

function handleFormData(e) {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
}

const handleSubmit = (e) => {
    e.preventDefault()

    const newAnimal = {
        name: formData.name,
        image: formData.image,
        description: formData.description,
        likes: formData.likes,
        animalType: formData.animalType
    }

    addNewAnimal(newAnimal)
}

    return (
        <div className="new-animal-form">
            <h2>New Animal</h2>
            <form>
                <input type="text" name="name" placeholder="Animal Name" value={formData.name} onChange={handleFormData} />
                <input type="text" name="image" placeholder="Animal Image URL" value={formData.image} onChange={handleFormData} />
                <input type="text" name="description" placeholder="Animal Description" value={formData.description} onChange={handleFormData} />
                <input type="number" name="likes" placeholder="likes" value={formData.likes} onChange={handleFormData} />
                <input type="text" name="animalType" placeholder="breed" value={formData.animalType} onChange={handleFormData} />
                <button type="submit">Add New Animal</button>
            </form>
        </div>
    )
}

export default NewAnimalForm;
