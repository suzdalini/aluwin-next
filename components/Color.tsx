import React, { useState } from 'react';
import Image from 'next/image';

interface Slide {
    id: number;
    src: string;
    text: string;
}

interface ColorProps {
    slides: Slide[];
}

export default function Color({ slides }: ColorProps) {
    const [selectedId, setSelectedId] = useState(1);
    const selectedSlide = slides.find((slide) => slide.id === selectedId);

    return (
        <div className="container">
            <div className="grid lg:grid-cols-12 gap-5">
                <div className="lg:col-span-8">
                    <Image
                        src={selectedSlide?.src || ''}
                        alt={selectedSlide?.text || ''}
                        width={800}
                        height={600}
                        className="img-thumbnail"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
                    />
                </div>
                <button className="lg:col-span-4 my-auto grid gap-5">
                    {slides.map((slide) => (
                        <div
                            key={slide.text}
                            onClick={() => setSelectedId(slide.id)}
                            className={`px-4 py-2 rounded-lg ${
                                selectedId === slide.id
                                    ? 'bg-slate-800 text-white'
                                    : 'bg-slate-200 text-slate-800'
                            }`}
                        >
                            {slide.text}
                        </div>
                    ))}
                </button>
            </div>
        </div>
    );
}
