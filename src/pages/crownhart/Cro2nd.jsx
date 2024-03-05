import '../building.css'
import React, { useState, useEffect } from 'react';
import 'firebase/compat/database'




const Cro2nd = ({ database }) => {
  const [buttonClicked, setButtonClicked] = useState({});

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    const buttonRef = database.ref(`cht2/${buttonId}`);
    buttonRef.set(!buttonClicked[buttonId]);
  };

  // Listen for changes from Firebase
  useEffect(() => {
    const buttonsRef = database.ref('cht2');
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
      <h2>Crownhart 2nd</h2>
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
            "230 - 1",
            "231 - 1",
            "232 - 1",
            "233 - 1",
            "234 - 1",
            "235 - 1",
            "236 - 1",
            "237 - 1",
            "238 - 1",
            "239 - 1",
            "240 - 1",
            "241 - 1",
            "242 - 1",
            "243 - 1",
            "244 - 1",
            "245 - 1",
            "246 - 1",
            "247 - 1",
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
            "230 - 2",
            "231 - 2",
            "232 - 2",
            "233 - 2",
            "234 - 2",
            "235 - 2",
            "236 - 2",
            "237 - 2",
            "238 - 2",
            "239 - 2",
            "240 - 2",
            "241 - 2",
            "242 - 2",
            "243 - 2",
            "244 - 2",
            "245 - 2",
            "246 - 2",
            "247 - 2",
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

export default Cro2nd