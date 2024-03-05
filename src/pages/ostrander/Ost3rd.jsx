import '../building.css'
import React, { useState, useEffect } from 'react';
import 'firebase/compat/database'




const Ost3rd = ({ database }) => {
  const [buttonClicked, setButtonClicked] = useState({});

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    const buttonRef = database.ref(`ost3/${buttonId}`);
    buttonRef.set(!buttonClicked[buttonId]);
  };

  // Listen for changes from Firebase
  useEffect(() => {
    const buttonsRef = database.ref('ost3');
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
      <h2>Ostrander 3rd</h2>
      <div className='room-lists'>
        <div className='left-room'>
          {["301 - 1",
            "302 - 1",
            "303 - 1",
            "304 - 1",
            "305 - 1",
            "306 - 1",
            "307 - 1",
            "308 - 1",
            "309 - 1",
            "310 - 1",
            "311 - 1",
            "312 - 1",
            "313 - 1",
            "314 - 1",
            "315 - 1",
            "316 - 1",
            "317 - 1",
            "318 - 1",
            "319 - 1",
            "320 - 1",
            "321 - 1",
            "322 - 1",
            "323 - 1",
            "324 - 1",
            "325 - 1",
            "326 - 1",
            "327 - 1",
            "328 - 1",
            "329 - 1",
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
          {["301 - 2",
            "302 - 2",
            "303 - 2",
            "304 - 2",
            "305 - 2",
            "306 - 2",
            "307 - 2",
            "308 - 2",
            "309 - 2",
            "310 - 2",
            "311 - 2",
            "312 - 2",
            "313 - 2",
            "314 - 2",
            "315 - 2",
            "316 - 2",
            "317 - 2",
            "318 - 2",
            "319 - 2",
            "320 - 2",
            "321 - 2",
            "322 - 2",
            "323 - 2",
            "324 - 2",
            "325 - 2",
            "326 - 2",
            "327 - 2",
            "328 - 2",
            "329 - 2",
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

export default Ost3rd