import '../building.css'
import React, { useState, useEffect } from 'react';
import 'firebase/compat/database'




const R3 = ({ database }) => {
    const [buttonClicked, setButtonClicked] = useState({});

    // Function to handle button click
    const handleButtonClick = (buttonId) => {
        const buttonRef = database.ref(`r3/${buttonId}`);
        buttonRef.set(!buttonClicked[buttonId]);
    };

    // Listen for changes from Firebase
    useEffect(() => {
        const buttonsRef = database.ref('r3');
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
            <h2>Ross 3rd</h2>
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
                        "330 - 1",
                        "331 - 1",
                        "332 - 1",
                        "333 - 1",
                        "334 - 1",
                        "335 - 1",
                        "336 - 1",
                        "337 - 1",
                        "338 - 1",
                        "339 - 1",
                        "340 - 1",
                        "341 - 1",
                        "342 - 1",
                        "343 - 1",
                        "344 - 1",
                        "345 - 1",
                        "346 - 1",
                        "347 - 1",
                        "348 - 1",
                        "349 - 1",
                        "350 - 1",
                        "351 - 1",
                        "352 - 1",
                        "353 - 1",
                        "354 - 1",
                        "355 - 1",
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
                        "330 - 2",
                        "331 - 2",
                        "332 - 2",
                        "333 - 2",
                        "334 - 2",
                        "335 - 2",
                        "336 - 2",
                        "337 - 2",
                        "338 - 2",
                        "339 - 2",
                        "340 - 2",
                        "341 - 2",
                        "342 - 2",
                        "343 - 2",
                        "344 - 2",
                        "345 - 2",
                        "346 - 2",
                        "347 - 2",
                        "348 - 2",
                        "349 - 2",
                        "350 - 2",
                        "351 - 2",
                        "352 - 2",
                        "353 - 2",
                        "354 - 2",
                        "355 - 2",
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

export default R3