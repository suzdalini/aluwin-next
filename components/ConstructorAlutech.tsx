import React, { useState } from 'react';
import Image from 'next/image';

interface Type {
    text: string;
    value: number;
}

const ConstructorAlutech: React.FC = () => {
    const [type, setType] = useState<number>(1);
    const types: Type[] = [
        { text: 'Двери в проёме', value: 1 },
        { text: 'Двери + рамный витраж', value: 2 },
        { text: 'Двери + стоечно-ригельный фасад', value: 3 },
    ];

    return (
        <div className="bg-white rounded-xl p-5">
            <div className="">
                <div>
                    <h3 className="text-2xl font-bold mb-5">Тип конструкции</h3>
                    <div className="grid md:flex gap-5">
                        {types.map((typ, p) => (
                            <button
                                key={p}
                                onClick={() => setType(typ.value)}
                                className={`px-4 py-2 rounded-lg ${type === typ.value ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-800'}`}
                            >
                                {typ.text}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {type === 1 && (
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMG}systems/w72hd/d1.webp`}
                    alt="Входные алюминиевые двери Alutech ALT W 72 HD"
                    width={800}
                    height={600}
                    className="w-full pt-1 mt-4 rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                />
            )}

            {type === 2 && (
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMG}systems/w72hd/d2.webp`}
                    alt="Входные алюминиевые двери Alutech ALT W 72 HD"
                    width={800}
                    height={600}
                    className="w-full pt-1 mt-4 rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                />
            )}

            {type === 3 && (
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMG}systems/w72hd/d3.webp`}
                    alt="Входные алюминиевые двери Alutech ALT W 72 HD"
                    width={800}
                    height={600}
                    className="w-full pt-1 mt-4 rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                />
            )}

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
};

export default ConstructorAlutech;
