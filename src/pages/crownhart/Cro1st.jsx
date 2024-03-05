import '../building.css'
import React, { useState, useEffect } from 'react';
import 'firebase/compat/database'




const Cro1st = ({ database }) => {
  const [buttonClicked, setButtonClicked] = useState({});

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    const buttonRef = database.ref(`cht1/${buttonId}`);
    buttonRef.set(!buttonClicked[buttonId]);
  };

  // Listen for changes from Firebase
  useEffect(() => {
    const buttonsRef = database.ref('cht1');
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
      <h2>Crownhart 1st</h2>
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
            "130 - 1",
            "131 - 1",
            "132 - 1",
            "133 - 1",
            "134 - 1",
            "135 - 1",
            "136 - 1",
            "137 - 1",
            "138 - 1",
            "139 - 1",
            "140 - 1",
            "141 - 1",
            "142 - 1",
            "143 - 1",
            "144 - 1",
            "145 - 1",
            "146 - 1",
            "147 - 1",
            "148 - 1",
            "149 - 1",
            "150 - 1",
            "151 - 1",
            "152 - 1",
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
            "130 - 2",
            "131 - 2",
            "132 - 2",
            "133 - 2",
            "134 - 2",
            "135 - 2",
            "136 - 2",
            "137 - 2",
            "138 - 2",
            "139 - 2",
            "140 - 2",
            "141 - 2",
            "142 - 2",
            "143 - 2",
            "144 - 2",
            "145 - 2",
            "146 - 2",
            "147 - 2",
            "148 - 2",
            "149 - 2",
            "150 - 2",
            "151 - 2",
            "152 - 2",
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

export default Cro1st