import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import imagem1 from '../img/imagem1.png';
import imagem2 from '../img/imagem2.png';
import imagem3 from '../img/imagem3.png';

function Service() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null); // State to store selected image

  // Define image information including price
  const imageInfo = [
    {
      src: imagem1,
      title: 'CAR SERVICE',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
        'of the industry. Lorem Ipsum has been the and scrambled it. ' +
        'atype specimen',
      price: '$100', // Add a price field
    },
    {
      src: imagem2,
      title: 'NATURE',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      'of the industry. Lorem Ipsum has been the and scrambled it. ' +
      'atype specimen',
      price: '$50', // Add a price field
    },
    {
      src: imagem3,
      title: 'ENVIRONMENT',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
      'of the industry. Lorem Ipsum has been the and scrambled it. ' +
      'atype specimen',
      price: '$75', // Add a price field
    },
  ];

  // Function to handle image click and display details
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to navigate to the Home page when the button is clicked
  const handleButtonClick = () => {
    navigate('/Home');
  };

  return (
    <div>
      <div className="col-100 bloco-imagens-texto">
        <div className="content" style={{ marginLeft: "24%", float: "left" }}>
          {imageInfo.map((image, index) => (
            <div className="col-3 bloco-texto bloco-imagem" key={index}>
              <Link to="#" onClick={() => handleImageClick(image)}>
                <img src={image.src} alt={image.title} />
              </Link>
              <p>
                <b>{image.title}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div>
          <h2>Image Details</h2>
          <p>Title: {selectedImage.title}</p>
          <p>Description: {selectedImage.description}</p>
          <p>Price: {selectedImage.price}</p> {/* Display price */}
        </div>
      )}
      <div>
        <button onClick={handleButtonClick}>Go to Home</button>
      </div>
    </div>
  );
}

export default Service;

