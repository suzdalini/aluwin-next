import React, { useState } from 'react';
import Image from 'next/image';

interface Item {
    id: number;
    text: string;
    image: string;
}

interface ImageSelectorProps {
    items: Item[];
    buttonClass?: string;
    activeButtonClass?: string;
    imageClass?: string;
}

const ImageSelector: React.FC<ImageSelectorProps> = ({
    items,
    buttonClass = 'px-4 py-2 rounded-lg bg-white text-slate-800',
    activeButtonClass = 'px-4 py-2 rounded-lg bg-slate-800 text-white',
    imageClass = 'w-full rounded-lg shadow-2xl shadow-slate-300',
}) => {
    const [selectedId, setSelectedId] = useState<number>(items[0]?.id || 0);
    const [loading, setLoading] = useState<boolean>(true);
    const selectedItem = items.find((item) => item.id === selectedId);

    return (
        <div className="grid gap-5">
            <div className="flex gap-5 flex-wrap">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            setSelectedId(item.id);
                            setLoading(true);
                        }}
                        className={selectedId === item.id ? activeButtonClass : buttonClass}
                    >
                        {item.text}
                    </button>
                ))}
            </div>

            <div className="relative min-h-[300px]">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-800" />
                    </div>
                )}

                {selectedItem && (
                    <Image
                        key={selectedItem.id}
                        src={selectedItem.image}
                        alt={selectedItem.text}
                        width={1600}
                        height={800}
                        className={`${imageClass} transition-opacity duration-500 ${
                            loading ? 'opacity-0' : 'opacity-100'
                        }`}
                        onLoad={() => setLoading(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default ImageSelector;
