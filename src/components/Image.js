import React from 'react'

export default function Image({picture}) {
  return (
    <div className='Pictures'>
       <img className="image"src={picture}  alt ="pictures"/>
    </div>
  )
}
