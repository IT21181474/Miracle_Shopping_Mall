import React, { useState } from 'react';
import Navbar from '../Component/Navbar';
import Footor from '../Component/Footor';
import enterImage from './enter.jpg'; // Import the image
import shoppingImage from './shopping.jpg'; // Import the image
import stairImage from './upstair.png'; // Import the image
import stair2Image from './upstair2.png'; // Import the image
import groundImage from './downstair.png'; // Import the image
import ground2Image from './ground.png'; // Import the image
import { Link } from 'react-router-dom'; // Import Link for navigation (optional)
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Home = () => {
  const [currentImage, setCurrentImage] = useState(enterImage); // State variable to track image

  const imageContainerStyle = {
    backgroundImage: `url(${currentImage})`, // Dynamically set background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'flex-start', // Align content to the left
    alignItems: 'center', // Center vertically (optional)
  };

  const buttonStyle = {
    position: 'absolute', // Position relative to image container
    bottom: '300px', // Adjust vertical position from the bottom (optional)
    left: '600px', // Adjust horizontal position from the left (optional)
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white', // Set a contrasting text color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.5rem', // Adjust font size for text and icon
  };

  const button2Style = {
    position: 'absolute', // Position relative to image container
    bottom: '350px', // Adjust vertical position from the bottom (optional)
    left: '600px', // Adjust horizontal position from the left (optional)
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white', // Set a contrasting text color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.5rem', // Adjust font size for text and icon
  };
  const button3Style = {
    position: 'absolute', // Position relative to image container
    bottom: '50px', // Adjust vertical position from the bottom (optional)
    left: '500px', // Adjust horizontal position from the left (optional)
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white', // Set a contrasting text color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.5rem', // Adjust font size for text and icon
  };

  const button4Style = {
    position: 'absolute', // Position relative to image container
    bottom: '400px', // Adjust vertical position from the bottom (optional)
    left: '200px', // Adjust horizontal position from the left (optional)
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white', // Set a contrasting text color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.5rem', // Adjust font size for text and icon
  };
  const button5Style = {
    position: 'absolute', // Position relative to image container
    bottom: '2px', // Adjust vertical position from the bottom (optional)
    left: '1100px', // Adjust horizontal position from the left (optional)
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white', // Set a contrasting text color
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.5rem', // Adjust font size for text and icon
  };



  const handleButtonClick = () => {
    if (currentImage === enterImage) {
      setCurrentImage(shoppingImage); // Change to shopping image on first click
    } else if (currentImage === shoppingImage) {
      setCurrentImage(stairImage); // Change to stair image on second click
    }else if (currentImage === stairImage) {
      setCurrentImage(stair2Image); // Change to stair image on second click
    }else if (currentImage === stair2Image) {
      setCurrentImage(groundImage); // Change to stair image on second click
    }else if (currentImage === groundImage) {
      setCurrentImage(ground2Image); // Change to stair image on second click
    }
     else {
      setCurrentImage(enterImage); // Reset to enter image on any other click
    }
  };

  return (
    <>
      <Navbar />
      <div style={imageContainerStyle}>
        {currentImage === enterImage ? (
          <button style={buttonStyle} onClick={handleButtonClick}>
            Welcome to<br />
            Miracle<br />
            Shopping Mall<br />
            <i className="bi bi-arrow-right-square-fill"></i>
          </button>
        ) : currentImage === shoppingImage ? (
          <>
            <button style={button2Style} onClick={handleButtonClick}>
              Go Upstairs!<br />
              <i className="bi bi-arrow-up-square-fill"></i>
            </button>
            <button style={button3Style} onClick={handleButtonClick}>
              Exit<br />
              <i className="bi bi-arrow-left-square-fill"></i>
            </button>
          </>
        ) : currentImage === stairImage ? (
          <>
            <button style={button2Style} onClick={handleButtonClick}>
              Go Upstairs!<br />
              <i className="bi bi-arrow-up-square-fill"></i>
            </button>
            <button style={button4Style} onClick={handleButtonClick}>
              Exit<br />
              <i className="bi bi-arrow-left-square-fill"></i>
            </button>
          </>
        ) : currentImage === stair2Image ? (
          <>
            <button style={button5Style} onClick={handleButtonClick}>
              Go Down!<br />
              <i class="bi bi-arrow-down-square-fill"></i>
            </button>
            <button style={button4Style} onClick={handleButtonClick}>
              Exit<br />
              <i className="bi bi-arrow-left-square-fill"></i>
            </button>
          </>
        ) : currentImage === groundImage ? (
          <>
            <button style={button5Style} onClick={handleButtonClick}>
              Go First Floor!<br />
              <i class="bi bi-arrow-down-square-fill"></i>
            </button>
            <button style={button4Style} onClick={handleButtonClick}>
              Exit<br />
              <i className="bi bi-arrow-left-square-fill"></i>
            </button>
          </>
        ) : ( // Handle stairImage or any other image
          <button style={button4Style} onClick={handleButtonClick}>
            {/* Add text or icon relevant to stairImage */}
            Exit<br />
              <i className="bi bi-arrow-left-square-fill"></i>

          </button>
        )}
      </div>
      <Footor />
    </>
  );
};

export default Home;
