"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface ImgHoverProps {
    src: string;
    srcHover: string;
    alt: string;
}

export default function ImgHover({ src, srcHover, alt }: ImgHoverProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="overflow-hidden rounded-2xl relative h-[700px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={src}
                alt={alt}
                className={`absolute z-10 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    isHovered ? 'opacity-0' : ''
                }`}
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
            />
            <Image
                src={srcHover}
                alt={alt}
                className="absolute z-0 w-full h-full object-cover transition-all duration-500 ease-in-out"
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
            />
        </div>
    );
}
