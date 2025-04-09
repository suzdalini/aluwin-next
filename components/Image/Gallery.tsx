import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface GalleryProps {
    items: string[];
    wrapperClass?: string;
    thumbnailClass?: string;
    imgClass?: string;
}

const Gallery: React.FC<GalleryProps> = ({
    items,
    wrapperClass = '',
    thumbnailClass = '',
    imgClass = '',
}) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const showMultiple = (imageIndex: number) => {
        setCurrentIndex(imageIndex);
        setVisible(true);
    };

    const lightboxImgs = useMemo(() => {
        return items.map((item: string) => ({
            src: item,
            width: 1024,
            height: 768,
        }));
    }, [items]);

    return (
        <div className={wrapperClass}>
            {items.map((photo, index) => (
                <div key={index} className={thumbnailClass}>
                    <Image
                        src={photo}
                        alt="Фото в портфолио"
                        width={500}
                        height={300}
                        className={`object-cover h-full w-full cursor-pointer opacity-100 md:hover:opacity-80 transition-opacity duration-300 ${imgClass}`}
                        onClick={() => showMultiple(index)}
                        sizes="100vw"
                        quality={70}
                        loading="lazy"
                    />
                </div>
            ))}

            {visible && (
                <Lightbox
                    mainSrc={lightboxImgs[currentIndex].src}
                    nextSrc={lightboxImgs[(currentIndex + 1) % lightboxImgs.length]?.src}
                    prevSrc={lightboxImgs[(currentIndex + lightboxImgs.length - 1) % lightboxImgs.length]?.src}
                    onCloseRequest={() => setVisible(false)}
                    onMovePrevRequest={() => setCurrentIndex((currentIndex + lightboxImgs.length - 1) % lightboxImgs.length)}
                    onMoveNextRequest={() => setCurrentIndex((currentIndex + 1) % lightboxImgs.length)}
                />
            )}
        </div>
    );
};

export default Gallery;
