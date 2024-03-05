import '../building.css'
import React, { useState, useEffect } from 'react';
import 'firebase/compat/database'




const Ost1st = ({ database }) => {
  const [buttonClicked, setButtonClicked] = useState({});

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    const buttonRef = database.ref(`ost1/${buttonId}`);
    buttonRef.set(!buttonClicked[buttonId]);
  };

  // Listen for changes from Firebase
  useEffect(() => {
    const buttonsRef = database.ref('ost1');
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
      <h2>Ostrander 1st</h2>
      <div className='room-lists'>
        <div className='left-room'>
          {["101 - 1",
            "102 - 1",
            "103 - 1",
            "104 - 1",
            "105 - 1",
            "106 - 1",
            "107 - 1",
            "108 - 1",
            "109 - 1",
            "110 - 1",
            "111 - 1",
            "112 - 1",
            "113 - 1",
            "114 - 1",
            "115 - 1",
            "116 - 1",
            "117 - 1",
            "118 - 1",
            "119 - 1",
            "120 - 1",
            "121 - 1",
            "122 - 1",
            "123 - 1",
            "124 - 1",
            "125 - 1",
            "126 - 1",
            "127 - 1",
            "128 - 1",
            "129 - 1",
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
          {["101 - 2",
            "102 - 2",
            "103 - 2",
            "104 - 2",
            "105 - 2",
            "106 - 2",
            "107 - 2",
            "108 - 2",
            "109 - 2",
            "110 - 2",
            "111 - 2",
            "112 - 2",
            "113 - 2",
            "114 - 2",
            "115 - 2",
            "116 - 2",
            "117 - 2",
            "118 - 2",
            "119 - 2",
            "120 - 2",
            "121 - 2",
            "122 - 2",
            "123 - 2",
            "124 - 2",
            "125 - 2",
            "126 - 2",
            "127 - 2",
            "128 - 2",
            "129 - 2",
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

export default Ost1st