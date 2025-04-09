import React, { useState } from 'react';
import Image from 'next/image';

interface Position {
    text: string;
    value: string;
}

interface Type {
    text: string;
    value: string;
}

export default function ConstructorAlutech2() {
    const [position, setPosition] = useState('open');
    const [type, setType] = useState('in');
    const IMG = process.env.NEXT_PUBLIC_IMG || '';

    const positions: Position[] = [
        { text: 'Открыта', value: 'open' },
        { text: 'Закрыта', value: 'close' },
    ];

    const types: Type[] = [
        { text: 'Внутрь', value: 'in' },
        { text: 'Наружу', value: 'out' },
    ];

    // Предзагрузка изображений
    const preloadImages = [
        'l.close.in.webp',
        'l.open.in.webp',
        'l.close.out.webp',
        'l.open.out.webp',
        'r.close.in.webp',
        'r.open.in.webp',
        'r.close.out.webp',
        'r.open.out.webp',
    ];

    return (
        <div className="bg-white rounded-xl p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <Image
                        src={`${IMG}systems/w72hd/l.${position}.${type}.webp`}
                        alt="Входные алюминиевые двери Alutech ALT W 72 HD"
                        width={750}
                        height={750}
                        className="mb-4 md:mb-0 w-full rounded-md"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className="my-auto">
                    <div className="flex justify-center gap-5">
                        {positions.map((pos) => (
                            <button
                                key={pos.value}
                                onClick={() => setPosition(pos.value)}
                                className={`px-4 py-2 rounded-lg ${
                                    position === pos.value
                                        ? 'bg-slate-800 text-white'
                                        : 'bg-slate-200 text-slate-800'
                                }`}
                            >
                                {pos.text}
                            </button>
                        ))}
                    </div>

                    <Image
                        src={`${IMG}systems/w72hd/r.${position}.${type}.webp`}
                        alt="Входные алюминиевые двери Alutech ALT W 72 HD"
                        width={750}
                        height={750}
                        className="w-full mx-auto max-w-[450px] my-5"
                        sizes="(max-width: 768px) 100vw, 100vw"
                    />

                    <div>
                        <div>
                            <div className="flex justify-center gap-5">
                                {types.map((typ) => (
                                    <button
                                        key={typ.value}
                                        onClick={() => setType(typ.value)}
                                        className={`px-4 py-2 rounded-lg ${
                                            type === typ.value
                                                ? 'bg-slate-800 text-white'
                                                : 'bg-slate-200 text-slate-800'
                                        }`}
                                    >
                                        {typ.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Предзагрузка изображений */}
            <div className="hidden">
                {preloadImages.map((img) => (
                    <Image
                        key={img}
                        src={`${IMG}systems/w72hd/${img}`}
                        alt=""
                        width={1}
                        height={1}
                        sizes="1px"
                    />
                ))}
            </div>

            <style jsx>{`
                .color__title {
                    font-size: 1rem;
                    font-weight: bold;
                }
                .pointer {
                    cursor: pointer;
                }
                .opacity-30 {
                    opacity: 0.3;
                }
                .border {
                    box-shadow: 0px 0px 0px 1px white inset;
                    border: 2px white solid;
                }
                .border-blue {
                    box-shadow: 0px 0px 0px 1px white inset;
                    border: 2px rgb(0, 166, 255) solid !important;
                }
                .text-size-sm {
                    font-size: 0.8rem;
                }
                .bg-grey {
                    background-color: rgb(172, 172, 172);
                }
            `}</style>
        </div>
    );
}
