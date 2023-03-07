import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = (props) => {
    const { title, url } = props;
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
    image: PropTypes.object
}
