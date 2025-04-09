import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

interface Slide {
    src: string;
    text?: string;
}

interface PhotoSlider2Props {
    slides: Slide[];
    slideWidth: number;
}

const PhotoSlider2: React.FC<PhotoSlider2Props> = ({ slides, slideWidth }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [wrapperWidth, setWrapperWidth] = useState(0);

    useEffect(() => {
        const updateWrapperWidth = () => {
            if (wrapperRef.current) {
                setWrapperWidth(wrapperRef.current.offsetWidth);
            }
        };

        updateWrapperWidth();
        window.addEventListener('resize', updateWrapperWidth);

        return () => {
            window.removeEventListener('resize', updateWrapperWidth);
        };
    }, []);

    const scrollRight = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTo({
                left: wrapperRef.current.scrollLeft + slideWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollLeft = () => {
        if (wrapperRef.current) {
            wrapperRef.current.scrollTo({
                left: wrapperRef.current.scrollLeft - slideWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            <p>Wrapper: {wrapperWidth}</p>
            <p>slideWidth: {slideWidth}</p>

            <div className="overflow-x-scroll" ref={wrapperRef}>
                <div>
                    <div className="flex gap-5">
                        {slides.map((slide) => (
                            <div
                                key={slide.src}
                                style={{
                                    width: `${slideWidth}px`,
                                    minWidth: `${slideWidth}px`,
                                }}
                            >
                                <Image
                                    className="mb-0 pb-0 w-full rounded-lg shadow-xl shadow-slate-200"
                                    src={slide.src}
                                    alt={slide.text || ''}
                                    width={slideWidth}
                                    height={Math.round(slideWidth * 0.75)}
                                    sizes={`(max-width: 640px) 100vw, (max-width: 768px) 25vw, ${slideWidth}px`}
                                />

                                {slide.text && <p className="mt-3">{slide.text}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-5 mt-5">
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
        </div>
    );
};

export default PhotoSlider2;
