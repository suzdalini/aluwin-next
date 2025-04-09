import React, { useState } from 'react';
import Image from 'next/image';

interface Item {
    id: string;
    title: string;
    src: string;
}

interface ImgSelectProps {
    items: Item[];
    alt?: string;
}

export default function ImgSelect({ items, alt = '' }: ImgSelectProps) {
    const [selected, setSelected] = useState(items[0].id);
    const selectedItem = items.find((item) => item.id === selected);

    return (
        <div>
            <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setSelected(item.id)}
                        className={`px-4 py-2 rounded-lg ${
                            selected === item.id
                                ? 'bg-slate-800 text-white'
                                : 'bg-white text-slate-800'
                        }`}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl">
                <Image
                    src={selectedItem?.src || ''}
                    alt={alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                />
            </div>
        </div>
    );
}
