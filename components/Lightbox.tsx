import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface LightboxProps {
    imgs: string[];
}

export default function LightboxComponent({ imgs }: LightboxProps) {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const IMG_CDN = process.env.NEXT_PUBLIC_IMG_CDN || 'https://img.alu-win.ru';

    const lightboxSlides = imgs.map((img) => ({
        src: img.replace('/aluwin', IMG_CDN),
    }));

    const showMultiple = (imageIndex: number) => {
        console.log(imageIndex);
        setVisible(true);
        setIndex(imageIndex);
    };

    return (
        <div>
            {visible && (
                <Lightbox
                    mainSrc={lightboxSlides[index].src}
                    nextSrc={lightboxSlides[(index + 1) % lightboxSlides.length]?.src}
                    prevSrc={lightboxSlides[(index + lightboxSlides.length - 1) % lightboxSlides.length]?.src}
                    onCloseRequest={() => setVisible(false)}
                    onMovePrevRequest={() => setIndex((index + lightboxSlides.length - 1) % lightboxSlides.length)}
                    onMoveNextRequest={() => setIndex((index + 1) % lightboxSlides.length)}
                />
            )}

            <div className="grid lg:grid-cols-4 gap-5 md:gap-8">
                {imgs.map((image, imageIndex) => (
                    <div key={imageIndex} className="lg:overflow-hidden lg:rounded-2xl">
                        <Image
                            src={image}
                            alt={`Gallery image ${imageIndex + 1}`}
                            width={350}
                            height={224} // 56/4 = 14, 14*16 = 224 (converting h-56 to pixels)
                            className="w-full md:w-[350px] h-56 rounded-xl bg-slate-200 cursor-pointer object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            onClick={() => showMultiple(imageIndex)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
