import React from 'react';

function ImageDetail({ image }) {
  return (
    <div>
      <img src={image.src} alt="" />
      <p>
        <b>{image.title}</b>
      </p>
      <p>{image.description}</p>
    </div>
  );
}

export default ImageDetail;
