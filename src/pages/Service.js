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

  // New state to store the service registration data
  const [newService, setNewService] = useState({
    title: '',
    description: '',
    price: '',
  });




  // Function to handle image click and display details
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to navigate to the Home page when the button is clicked
  const handleButtonClick = () => {
    navigate('/');
  };

  // Function to handle changes in the form fields
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  // Function to add the new service to the list (you can customize this logic)
  const addNewService = () => {
    // You can perform actions like adding the new service to a database or a list here
    console.log('New Service:', newService);
    // Reset the form fields
    setNewService({
      name: '',
      description: '',
      price: '',
    });
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

       {/* Registration form for new services */}
       <div class="service-registration-container">
       
        <h2>Register a New Service</h2>
        <form class="service-registration-form">
          <div>
            <label htmlFor="name">Service Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newService.name}
              onChange={handleFormChange}
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={newService.description}
              onChange={handleFormChange}
            />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={newService.price}
              onChange={handleFormChange}
            />
          </div>
            
          <button type="button" onClick={addNewService}>
            Register Service
          </button>
        </form>



     </div>
    </div>
  );
}

export default Service;

