import React from 'react';

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="bg-gray-800 text-white shadow-md rounded-lg p-6 max-w-lg mx-auto max-h-screen overflow-auto">
            {children}
        </div>
    );
};

export default Card;