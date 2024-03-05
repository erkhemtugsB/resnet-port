import '../building.css'
import React, { useState, useEffect } from 'react';
import 'firebase/compat/database'




const Ost2nd = ({ database }) => {
  const [buttonClicked, setButtonClicked] = useState({});

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    const buttonRef = database.ref(`ost2/${buttonId}`);
    buttonRef.set(!buttonClicked[buttonId]);
  };

  // Listen for changes from Firebase
  useEffect(() => {
    const buttonsRef = database.ref('ost2');
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
      <h2>Ostrander 2nd</h2>
      <div className='room-lists'>
        <div className='left-room'>
          {["201 - 1",
            "202 - 1",
            "203 - 1",
            "204 - 1",
            "205 - 1",
            "206 - 1",
            "207 - 1",
            "208 - 1",
            "209 - 1",
            "210 - 1",
            "211 - 1",
            "212 - 1",
            "213 - 1",
            "214 - 1",
            "215 - 1",
            "216 - 1",
            "217 - 1",
            "218 - 1",
            "219 - 1",
            "220 - 1",
            "221 - 1",
            "222 - 1",
            "223 - 1",
            "224 - 1",
            "225 - 1",
            "226 - 1",
            "227 - 1",
            "228 - 1",
            "229 - 1",
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
          {["201 - 2",
            "202 - 2",
            "203 - 2",
            "204 - 2",
            "205 - 2",
            "206 - 2",
            "207 - 2",
            "208 - 2",
            "209 - 2",
            "210 - 2",
            "211 - 2",
            "212 - 2",
            "213 - 2",
            "214 - 2",
            "215 - 2",
            "216 - 2",
            "217 - 2",
            "218 - 2",
            "219 - 2",
            "220 - 2",
            "221 - 2",
            "222 - 2",
            "223 - 2",
            "224 - 2",
            "225 - 2",
            "226 - 2",
            "227 - 2",
            "228 - 2",
            "229 - 2",
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

export default Ost2nd