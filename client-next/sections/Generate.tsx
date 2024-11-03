'use client';
import CherryBlossomPetals from "@/components/CherryBlossom";
import React, { useState } from 'react';

const Generate: React.FC = () => {
    const [numberOfAssets, setNumberOfAssets] = useState("5");
    const [gameIdea, setGameIdea] = useState(""); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [galleryVisible, setGalleryVisible] = useState(false); 
    const maxImages = parseInt(numberOfAssets); // Update maxImages based on user input

    // Create an array of image URLs based on the naming convention
    const imageUrls = Array.from({ length: maxImages }, (_, i) => {
        return `generated_image_${i}.png`;
    });

    // Function to go to the next image
    const nextImage = () => {
        if (currentIndex < maxImages - 1 && isImageValid(currentIndex + 1)) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    // Function to go to the previous image
    const previousImage = () => {
        if (currentIndex > 0 && isImageValid(currentIndex - 1)) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    // Function to check if the current image URL is valid (not null)
    const isImageValid = (index: number) => {
        return index >= 0 && index < maxImages && imageUrls[index] && imageUrls[index] !== 'null';
    };

    // Function to handle showing the gallery
    const showGallery = () => {
        setGalleryVisible(true);
        setCurrentIndex(0); // Reset to the first image when showing the gallery
    };

    const handleAssetsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfAssets(event.target.value); // Update the state with the input value
    };

    const handleGameIdeaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGameIdea(event.target.value); 
    };

    const handleDownload = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/download-images');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'images.zip';
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed", error);
        }
    };

    const handleButtonClick = async () => {
        // Check if numberOfAssets is less than 5
        if (parseInt(numberOfAssets) < 5) {
            console.log("Number of assets must be at least 5. No action taken.");
            return; 
        }

        // Check if gameIdea is blank
        if (gameIdea.trim() === "") {
            console.log("Game idea cannot be blank. No action taken.");
            return; 
        }

        const dataToSend = {
            numberOfAssets, 
            gameIdea,      
        };

        // Inner function for handling the download of images


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
            showGallery(); 
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <>
            <div className="background"></div>
            <div className="generation pt-[8%] my-0 mx-auto flex items-center justify-center text-center">
                <div className="heading-wrapper">
                    <h1 className="font-[Karmatic] text-[6em] text-[--title]">GENERATE</h1>
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
                    value={gameIdea} 
                    onChange={handleGameIdeaChange} 
                    className="w-[90%] max-w-[600px] p-2 border font-[SuperLegend]"
                />
            </div>
            <div className="flex items-center justify-center text-center text-[--body]">
                <div className="font-[SuperLegend]">Number of Assets: </div>
                <div className="pl-4">
                    <input
                        type="number" 
                        value={numberOfAssets} 
                        onChange={handleAssetsChange} 
                        min="5" // Minimum number of assets set to 5
                        max="50"
                        className="w-[70px] p-2 border font-[SuperLegend] text-[black]"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center p-[20px]">
                <button 
                    onClick={handleButtonClick} 
                    className="flex items-center font-[SuperLegend] justify-center text-center text-[--body] p-4 bg-pink-500 text-white rounded hover:bg-pink-600"
                >
                    Generate Now
                </button>
            </div>
            {galleryVisible && (
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-4xl font-[Karmatic] text-white mb-6 overflow:hidden">Image Gallery</h1>
                    <div className="image-container mb-4 bg-white p-5 rounded-lg shadow-lg">
                            {isImageValid(currentIndex) ? (
                                <img
                                    src={imageUrls[currentIndex]}
                                    alt={`Generated Image ${currentIndex}`}
                                    className="max-w-xs flex h-auto rounded-lg shadow-md items-center justify-center"
                                />
                            ) : (
                                <div className="text-center font-[Karmatic] text-red-500">Image not found.</div>
                            )}
                        </div>
                    <div className="">

                        <div className="flex space-x-4 justify-center ">
                            <button
                                onClick={previousImage}
                                className={`px-4 py-2 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-lg transition duration-300 ${currentIndex === 0 || !isImageValid(currentIndex) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-600'}`}
                                disabled={currentIndex === 0 || !isImageValid(currentIndex)}
                            >
                                Previous
                            </button>
                            <button
                                onClick={nextImage}
                                className={`px-4 py-2 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-lg transition duration-300 ${currentIndex === maxImages - 1 || !isImageValid(currentIndex) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-600'}`}
                                disabled={currentIndex === maxImages - 1 || !isImageValid(currentIndex)}
                            >
                                Next
                            </button>
                            <button onClick={handleDownload} className="`px-4 p-4 py-2 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-lg transition duration-300 ${currentIndex === maxImages - 1 || !isImageValid(currentIndex) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-600'}`">
                                Download Images
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <CherryBlossomPetals />
        </>
    );
};

export default Generate;
