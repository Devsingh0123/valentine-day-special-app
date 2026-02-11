import React, { useState, useRef } from "react";

export default function ValentineApp() {
  const [accepted, setAccepted] = useState(false);
  const noBtnRef = useRef(null);

const moveNoButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 150 - 75;
    if (noBtnRef.current) {
      noBtnRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-red-200">
      {!accepted ? (
        <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center space-y-6">
          <h1 className="text-2xl font-bold text-rose-600">
            Hey, will you be my Valentine? 💖
          </h1>

          {/* Fixed: Use relative container and properly position buttons */}
          <div className="relative h-24 flex items-center justify-center">
            {/* YES Button - Centered */}
            <button
              onClick={() => setAccepted(true)}
              className="absolute px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition z-10"
              style={{ left: '50%', transform: 'translateX(-100%) translateY(-50%)', top: '50%' }}
            >
              YES 💘
            </button>

            {/* NO Button - Positioned next to YES */}
            <button
              ref={noBtnRef}
              onMouseEnter={moveNoButton}
              className="absolute px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-semibold transition-all duration-300 z-20"
              style={{ 
                left: '50%', 
                transform: 'translateY(-50%)',
                top: '50%',
                marginLeft: '10px' 
              }}
            >
              NO 😝
            </button>
          </div>

          <p className="text-sm text-gray-500">Try clicking NO 😏</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center space-y-4 animate-bounce">
          <h2 className="text-3xl font-bold text-pink-600">🎉 Thank You! 🎉</h2>
          <p className="text-lg text-gray-700">
            You took a very good decision 😌❤️
          </p>
          <p className="text-sm text-gray-500">Happy Valentine's Day 💝</p>
        </div>
      )}
    </div>
  );
}