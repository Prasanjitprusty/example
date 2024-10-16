import React, { useState } from 'react';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';

function App() {
  const images = [img1, img2]; // Array of images
  const start = 0; // Index for the first image
  const end = images.length - 1; // Index for the last image
  
  const [currentIndex, setCurrentIndex] = useState(start); // Start with the first image

  const handleNextClick = () => {
    // Only go to the next image if we are at the first image
    if (currentIndex === start) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBackClick = () => {
    // Only go to the previous image if we are at the last image
    if (currentIndex === end) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="App relative h-screen">
      {/* Image Display */}
      <img
        src={images[currentIndex]}
        className="w-full max-w-screen max-h-screen object-contain"
        alt={`img${currentIndex + 1}`}
      />

      {/* Back Arrow Button: only show when currentIndex is img2 (last image) */}
      {currentIndex === end && (
        <button
          onClick={handleBackClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-4 rounded-full"
        >
          ⬅️
        </button>
      )}

      {/* Next Arrow Button: only show when currentIndex is img1 (first image) */}
      {currentIndex === start && (
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-4 rounded-full"
        >
          ➡️
        </button>
      )}
    </div>
  );
}

export default App;
