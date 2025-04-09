import React, { useRef } from 'react';
import { Icon } from '@iconify/react';

interface Slide {
    src: string;
    text?: string;
}

interface VideoSliderProps {
    slides: Slide[];
    controls?: boolean;
    slideWidth?: number;
}

export default function VideoSlider({
    slides,
    controls = true,
    slideWidth = 400,
}: VideoSliderProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollBy({
                left: slideWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollLeft = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollBy({
                left: -slideWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            <div ref={wrapperRef} className={`overflow-x-scroll hide-scroll mx-[-1.25rem] px-5`}>
                <div className="flex gap-5 pb-5 w-full">
                    {slides.map((slide) => (
                        <div key={slide.src}>
                            <video
                                playsInline
                                autoPlay
                                muted
                                loop
                                className="mb-0 pb-0 rounded-lg shadow-slate-300 w-full"
                                style={{
                                    width: slides.length === 1 ? '100%' : `${slideWidth}px`,
                                    minWidth: slides.length === 1 ? '100%' : `${slideWidth}px`,
                                }}
                            >
                                <source src={slide.src} type="video/mp4" />
                            </video>

                            {slide.text && <p className="mt-3 text-lg">{slide.text}</p>}
                        </div>
                    ))}
                </div>
            </div>

            {controls && (
                <div className="flex justify-end gap-5">
                    <button
                        className="p-3 rounded-full bg-white transition duration-300 hover:bg-slate-600 hover:text-white active:bg-slate-800 active:scale-95"
                        onClick={scrollLeft}
                    >
                        <Icon icon="bi:chevron-left" className="text-2xl mr-1" />
                    </button>
                    <button
                        className="p-3 rounded-full bg-white transition duration-300 hover:bg-slate-600 hover:text-white active:bg-slate-800 active:scale-95"
                        onClick={scrollRight}
                    >
                        <Icon icon="bi:chevron-right" className="text-2xl ml-1" />
                    </button>
                </div>
            )}

            <style jsx>{`
                .pointer {
                    cursor: pointer !important;
                }
            `}</style>
        </div>
    );
}
