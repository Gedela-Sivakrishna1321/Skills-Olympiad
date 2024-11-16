import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageModal({ images, currentIndex, onClose, onNext, onPrev }) {
  if (!images) return null;

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={handleModalClick}>
      <div className="relative w-full max-w-6xl mx-4" >
        <button 
        style={{ cursor: 'pointer' }}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors cursor-pointer"
          onClick={(e) => {
            onClose();
          }}
        >
          {/* <X  /> */}
          {/* <span className="w-8 h-8 cursor-pointer">X</span> */}
        </button>
        
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`Facility view ${currentIndex + 1}`}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
          
          {images.length > 1 && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  onPrev();
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer"
                onClick={(e) => {
                  onNext();
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
        
        {images.length > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}