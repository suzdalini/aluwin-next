import React, { useState } from 'react';
import { Icon } from '@iconify/react';

interface VideoItem {
    id: string;
    title: string;
    src: string;
    ul?: string[];
}

interface VideoSelectBtnOnProps {
    items: VideoItem[];
}

const VideoSelectBtnOn: React.FC<VideoSelectBtnOnProps> = ({ items }) => {
    const [selected, setSelected] = useState<string>(items[0]?.id || '');

    const selectedItem = items.find((item) => item.id === selected);

    return (
        <div>
            <div className="mt-5 overflow-hidden rounded-2xl flex flex-col md:flex-row md:relative">
                <div className="md:h-[700px] overflow-hidden">
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

                <div className="mt-5 md:mt-0 md:absolute md:top-1/2 md:left-16 md:transform md:-translate-y-1/2 md:max-w-[600px]">
                    <div className="flex flex-wrap gap-3 mb-5">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelected(item.id)}
                                className={`px-4 py-2 rounded-lg ${
                                    selected === item.id
                                        ? 'bg-slate-800 text-white'
                                        : 'bg-slate-200 text-slate-800'
                                }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3">
                        {selectedItem?.ul?.map((li, index) => (
                            <div key={index} className="flex flex-row gap-2">
                                <Icon icon="bi:check" className="text-xl mt-[2px]" />
                                <p>{li}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSelectBtnOn;
