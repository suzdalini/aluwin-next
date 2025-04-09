'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { systems } from '@/data/systems';

const Systems: React.FC = () => {
    return (
        <section className="">
            <div className="
                flex flex-col
                md:grid md:grid-cols-3
                gap-3 
                lg:gap-6">
                {systems.map((system) => (
                    <div key={system.id} id={system.id} className="card hover-sky p-3">
                        <Link href={system.url}>
                            <div className="flex gap-3">
                                <Image
                                    alt={system.title}
                                    className="rounded-l-xl max-w-[100px] md:max-w-[180px]"
                                    width={180}
                                    height={180}
                                    sizes="(max-width: 640px) 120px, (max-width: 768px) 180px, 180px"
                                    quality={80}
                                    src={`${process.env.NEXT_PUBLIC_IMG}${system.img}`}
                                    style={{ height: "auto" }}
                                />

                                <div className="my-auto pr-3">
                                    <div className="text-sm text-slate-500">{system.title}</div>
                                    <div className="text-slate-900 text-lg md:text-2xl font-bold">
                                        {system.name}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Systems;
