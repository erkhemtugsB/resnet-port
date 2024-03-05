import '../building.css'
import React, { useState, useEffect } from 'react';
import 'firebase/compat/database'




const Ost4th = ({ database }) => {
  const [buttonClicked, setButtonClicked] = useState({});

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    const buttonRef = database.ref(`ost4/${buttonId}`);
    buttonRef.set(!buttonClicked[buttonId]);
  };

  // Listen for changes from Firebase
  useEffect(() => {
    const buttonsRef = database.ref('ost4');
    buttonsRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        setButtonClicked(snapshot.val());
      }
    });

    // Clean up listener
    return () => buttonsRef.off('value');
  },);


  return (
    <div className='main-with-title'>
      <h2>Ostrander 4th</h2>
      <div className='room-lists'>
        <div className='left-room'>
          {["401 - 1",
            "402 - 1",
            "403 - 1",
            "404 - 1",
            "405 - 1",
            "406 - 1",
            "407 - 1",
            "408 - 1",
            "409 - 1",
            "410 - 1",
            "411 - 1",
            "412 - 1",
            "413 - 1",
            "414 - 1",
            "415 - 1",
            "416 - 1",
            "417 - 1",
            "418 - 1",
            "419 - 1",
            "420 - 1",
            "421 - 1",
            "422 - 1",
            "423 - 1",
            "424 - 1",
            "425 - 1",
            "426 - 1",
            "427 - 1",
            "428 - 1",
            "429 - 1",
          ].map((buttonId) => (
            <button
              key={buttonId}
              onClick={() => handleButtonClick(buttonId)}
              className={buttonClicked[buttonId] ? 'clicked' : ''}
            >
              {buttonId}
            </button>
          ))}
        </div>
        <div className='right-room'>
          {["401 - 2",
            "402 - 2",
            "403 - 2",
            "404 - 2",
            "405 - 2",
            "406 - 2",
            "407 - 2",
            "408 - 2",
            "409 - 2",
            "410 - 2",
            "411 - 2",
            "412 - 2",
            "413 - 2",
            "414 - 2",
            "415 - 2",
            "416 - 2",
            "417 - 2",
            "418 - 2",
            "419 - 2",
            "420 - 2",
            "421 - 2",
            "422 - 2",
            "423 - 2",
            "424 - 2",
            "425 - 2",
            "426 - 2",
            "427 - 2",
            "428 - 2",
            "429 - 2",
          ].map((buttonId) => (
            <button
              key={buttonId}
              onClick={() => handleButtonClick(buttonId)}
              className={buttonClicked[buttonId] ? 'clicked' : ''}
            >
              {buttonId}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ost4th