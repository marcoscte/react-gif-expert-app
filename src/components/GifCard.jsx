import React from 'react';
import PropTypes from 'prop-types'; 

export const GifCard = ({title, url, image, id}) => {

  return (
    <div className='card' key={id}>{title}
        <img src={url} alt={title} />
    </div>
  )
}

GifCard.propTypes = {
  title : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired
};
