'use client';
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface SpinnerProps {
    size?: number;
    className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 24, className = '' }) => {
    return (
        <div className="flex justify-center items-center">
            <AiOutlineLoading3Quarters
                size={size}
                className={`animate-spin text-sky-500 ${className}`}
            />
        </div>
    );
};

export default Spinner;
