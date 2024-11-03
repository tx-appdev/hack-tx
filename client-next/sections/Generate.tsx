'use client';
import CherryBlossomPetals from "@/components/CherryBlossom";
import React, { useState } from 'react';

const Generate: React.FC = () => {
    const [numberOfAssets, setNumberOfAssets] = useState("5");
    const [gameIdea, setGameIdea] = useState(""); // State for the game idea input

    const handleAssetsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfAssets(event.target.value); // Update the state with the input value
    };

    const handleGameIdeaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGameIdea(event.target.value); // Update the game idea state
    };

    const handleButtonClick = async () => {
        const dataToSend = {
            numberOfAssets, // Use the stored value for number of assets
            gameIdea,      // Use the stored value for game idea
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <>
            <div className="background"></div>
            <div className="generation pt-[8%] my-0 mx-auto flex items-center justify-center text-center">
                <div className="heading-wrapper">
                    <h1 className="font-[Karmatic] text-[6em] text-[--title]">
                        GENERATE
                    </h1>
                </div>
            </div>
            <div className="subheading-wrapper flex items-center justify-center text-center">
                <h3 className="font-[Karmatic] text-[2em] text-[--body] pt-4 pb-8">
                    Kickstart your indie dev journey!
                </h3>
            </div>
            <div className="text-input w-full pb-5 flex items-center justify-center">
                <input
                    type="text"
                    maxLength={100}
                    placeholder="Enter your game idea..."
                    value={gameIdea} // Bind to game idea state
                    onChange={handleGameIdeaChange} // Handle changes
                    className="w-[90%] max-w-[600px] p-2 border font-[SuperLegend]"
                />
            </div>
            <div className="flex items-center justify-center text-center text-[--body]">
                <div className="font-[SuperLegend]">Number of Assets: </div>
                <div className="pl-4">
                    <input
                        type="text"
                        value={numberOfAssets} // Set the input value to the state variable
                        onChange={handleAssetsChange} // Update the state on change
                        step="1"
                        min="1"
                        max="20"
                        maxLength={2}
                        className="w-[70px] p-2 border font-[SuperLegend] text-[black]"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center p-[20px]"> {/* Full height for centering */}
                <button 
                    onClick={handleButtonClick} 
                    className="flex items-center font-[SuperLegend] justify-center text-center text-[--body] p-4 bg-pink-500 text-white rounded hover:bg-pink-600"
                >
                    Generate Now
                </button>
            </div>
            <CherryBlossomPetals />
        </>
    );
}

export default Generate;
