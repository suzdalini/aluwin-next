'use client';

import React from 'react';
import Modal from '@/components/Modal';
import NamePhone from '@/components/Form/NamePhone';
import { Icon } from '@iconify/react';

export interface HeroVariant {
    title: string;
    arguments: string[];
    button: string;
    bg: string;
    goal: string;
    img: string;
}

interface HeroProps {
    variants: HeroVariant[];
    forcedIndex: number;
}

const Hero: React.FC<HeroProps> = ({ variants, forcedIndex }) => {
    const selected = variants[forcedIndex];

    return (
        <section
            className="bg-slate-300 rounded-xl bg-center bg-no-repeat bg-cover shadow-2xl shadow-slate-300"
            style={{ backgroundImage: `url('${selected.bg}')` }}
        >
            <div className="container mx-auto rounded-xl lg:bg-gradient-to-r lg:from-slate-900/80 bg-gradient-to-b from-slate-800/70 to-slate-800/40">
                <div className="my-auto p-8 lg:py-[210px] px-5 lg:px-[130px] max-w-[950px]">
                    <h1 className="text-white">{selected.title}</h1>

                    <div className="flex flex-col flex-wrap gap-1 mt-5 items-center md:items-start text-white">
                        {selected.arguments.map((arg, idx) => (
                            <div key={idx} className="rounded-md py-1 flex items-center gap-2 w-full">
                                <Icon icon="mdi:check-circle" className="text-lime-500 text-xl w-6 h-6 max-w-6 max-h-6 min-w-6 min-h-6" />
                                <p>{arg}</p>
                            </div>
                        ))}
                    </div>

                    <div className="h-7"></div>

                    <Modal
                        title={selected.button}
                        btn={{
                            text: selected.button,
                            className:
                                'text-pretty font-medium text-xl btn-primary text-white rounded-lg px-7 py-4 transition-all duration-300',
                        }}
                        img={selected.img}
                    >
                        <NamePhone
                            goal={selected.goal}
                            className="px-7 pb-7 pt-3"
                            input={{
                                className: 'bg-white rounded-lg border-slate-400 border w-full p-4',
                                group: {
                                    className: '',
                                },
                            }}
                            form={{
                                className: 'flex-col',
                                accept: {
                                    link: {
                                        className: 'text-sky-500 hover:underline',
                                    },
                                },
                            }}
                            btn={{
                                text: selected.button,
                                className:
                                    'text-lg btn-primary text-white rounded-md px-5 py-4 transition-all duration-300',
                            }}
                        />
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default Hero;
