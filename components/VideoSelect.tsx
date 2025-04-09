import React, { useState } from 'react';

interface VideoItem {
    id: string;
    title: string;
    src: string;
}

interface VideoSelectProps {
    items: VideoItem[];
}

export default function VideoSelect({ items }: VideoSelectProps) {
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
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="mb-0 pb-0 rounded-lg shadow-xl shadow-slate-300 w-full"
                    key={selected}
                >
                    <source src={selectedItem?.src} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}
