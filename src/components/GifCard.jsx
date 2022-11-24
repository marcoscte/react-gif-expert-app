import React from 'react'

export const GifCard = ({image}) => {

  return (
    <div className='card' key={image.id}>{image.title}
        <img src={image.url} alt={image.title} />
    </div>
  )
}
