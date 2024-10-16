import React, { useState } from 'react';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';

function App() {
  const images = [img1, img2]; // Array of images
  const start = 0; // Index for the first image
  const end = images.length - 1; // Index for the last image

  const [currentIndex, setCurrentIndex] = useState(start); // Start with the first image
  const [overlayText, setOverlayText] = useState('Your Text Here'); // State for the overlay text
  const [textVisible, setTextVisible] = useState(currentIndex === start); // Show text editor only for img1

  const handleNextClick = () => {
    if (currentIndex === start) {
      setCurrentIndex(currentIndex + 1);
      setTextVisible(false); // Hide text editor for img2
    }
  };

  const handleBackClick = () => {
    if (currentIndex === end) {
      setCurrentIndex(currentIndex - 1);
      setTextVisible(true); // Show text editor for img1
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

      {/* Text overlay on img1 */}
      {textVisible && (
        <div className="absolute top-20 left-10 text-white text-2xl font-bold">
          {overlayText}
        </div>
      )}

      {/* Input field to edit the text, only visible on img1 */}
      {textVisible && (
        <div className="absolute bottom-10 left-10 bg-white p-2 rounded-lg">
          <input
            type="text"
            value={overlayText}
            onChange={(e) => setOverlayText(e.target.value)}
            placeholder="Enter your text"
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
      )}

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
