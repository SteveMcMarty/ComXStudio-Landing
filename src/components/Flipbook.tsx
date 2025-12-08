import React, { useState } from 'react';

interface FlipbookProps {
    images: string[];
    title: string;
    className?: string;
    styleName: string;
}

const Flipbook: React.FC<FlipbookProps> = ({ images, title, className = '', styleName }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        if (currentPage < images.length - 1) {
            setIsFlipped(true);
            setTimeout(() => {
                setCurrentPage(prev => prev + 1);
                setIsFlipped(false);
            }, 300); // Half of transition time
        } else {
            // Reset to beginning
            setCurrentPage(0);
        }
    };

    return (
        <div className={`relative group cursor-pointer ${className}`} onClick={handleNext}>
            {/* Book Container */}
            <div className="relative w-full aspect-[2/3] perspective-1000">
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

                    {/* Front of current page */}
                    <div className="absolute inset-0 backface-hidden shadow-2xl rounded-sm overflow-hidden bg-white">
                        <img
                            src={images[currentPage]}
                            alt={`${title} - Page ${currentPage + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Glossy overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-white/20 pointer-events-none"></div>

                        {/* Style Badge */}
                        <div className="absolute top-4 left-0 bg-black text-white px-3 py-1 font-comic text-xs uppercase tracking-wider shadow-md z-10">
                            {styleName}
                        </div>

                        {/* Page Number */}
                        <span className="absolute bottom-2 right-2 bg-white/80 px-2 rounded-full text-[10px] font-bold">
                            {currentPage + 1} / {images.length}
                        </span>
                    </div>

                </div>

                {/* Book Spine/Thickness Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-full"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300 transform translate-y-full"></div>
            </div>

            {/* Title/Caption below */}
            <div className="mt-4 text-center">
                <h3 className="font-comic font-bold text-lg">{title}</h3>
                <p className="text-sm text-gray-500">Cliquer pour tourner la page</p>
            </div>
        </div>
    );
};

export default Flipbook;
