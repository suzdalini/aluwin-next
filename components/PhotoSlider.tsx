import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface Slide {
    src: string;
    text?: string;
}

interface PhotoSliderProps {
    slides: Slide[];
    controls?: boolean;
    slidesCount?: number;
}

const PhotoSlider: React.FC<PhotoSliderProps> = ({ slides, controls = false, slidesCount = 4 }) => {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (wrapperRef.current) {
            const slideWidth = wrapperRef.current.offsetWidth;
            wrapperRef.current.scrollTo({
                left: wrapperRef.current.scrollLeft + slideWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollLeft = () => {
        if (wrapperRef.current) {
            const slideWidth = wrapperRef.current.offsetWidth;
            wrapperRef.current.scrollTo({
                left: wrapperRef.current.scrollLeft - slideWidth,
                behavior: 'smooth',
            });
        }
    };

    const showMultiple = (imageIndex: number) => {
        setIndex(imageIndex);
        setVisible(true);
    };

    const lightboxSlides = slides.map((slide) => ({
        src: slide.src.replace('/aluwin', 'https://img.alu-win.ru'),
    }));

    return (
        <div>
            {visible && lightboxSlides.length > 0 && (
                <Lightbox
                    mainSrc={lightboxSlides[index].src}
                    nextSrc={lightboxSlides[(index + 1) % lightboxSlides.length].src}
                    prevSrc={
                        lightboxSlides[(index + lightboxSlides.length - 1) % lightboxSlides.length]
                            .src
                    }
                    onCloseRequest={() => setVisible(false)}
                    onMovePrevRequest={() =>
                        setIndex((index + lightboxSlides.length - 1) % lightboxSlides.length)
                    }
                    onMoveNextRequest={() => setIndex((index + 1) % lightboxSlides.length)}
                    enableZoom={true}
                    animationDuration={250}
                    clickOutsideToClose={true}
                />
            )}

            <div ref={wrapperRef}>
                <div
                    className={`flex lg:grid gap-5 overflow-x-scroll mx-[-1.25rem] px-5 hide-scroll lg:grid-cols-${slidesCount}`}
                >
                    {slides.map((slide, imageIndex) => (
                        <div key={slide.src} className="min-w-[90%] md:min-w-full">
                            <Image
                                className="rounded-lg cursor-pointer"
                                src={slide.src}
                                alt={slide.text || ''}
                                width={800}
                                height={400}
                                sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 50vw"
                                onClick={() => showMultiple(imageIndex)}
                            />

                            {slide.text && <p className="mt-3">{slide.text}</p>}
                        </div>
                    ))}
                </div>
            </div>

            {controls && (
                <div className="flex justify-end container">
                    <div
                        style={{ fontSize: '3rem' }}
                        className="pointer mr-4 cursor-pointer"
                        onClick={scrollLeft}
                    >
                        <Icon icon="bi:chevron-left" className="text-2xl" />
                    </div>
                    <div
                        style={{ fontSize: '3rem' }}
                        className="pointer cursor-pointer"
                        onClick={scrollRight}
                    >
                        <Icon icon="bi:chevron-right" className="text-2xl" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoSlider;
