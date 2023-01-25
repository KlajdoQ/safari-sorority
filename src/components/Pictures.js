import React,{useState,useEffect} from 'react'
import Image from './Image'

export default function Pictures() {
    const [pictures, setPictures] = useState([])

    useEffect(() =>{
        fetch('https://shibe.online/api/shibes?count=50&urls=true&httpsUrls=true')
        .then(response => response.json())
        .then(setPictures)
    },[])


  return (
    <div>
        {
            pictures.map(picture => (
                <Image 
                key={picture.name}
                picture={picture}
                />
            ))
        }
    </div>
  )
}
