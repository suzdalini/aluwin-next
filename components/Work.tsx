'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Work as WorkType } from '@/types';

interface WorkProps {
    work: WorkType;
}

const Work: React.FC<WorkProps> = ({ work }) => {
    return (
        <Link href={`/works/${work.url}`} className="card hover-sky">
            <div className="overflow-hidden rounded-xl cursor-pointer min-w-[330px]">
                <div className="h-[150px] md:h-[200px] overflow-hidden flex">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMG}works/${work.id}/0.webp`}
                        alt={work.name}
                        width={400}
                        height={0}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 25vw, 25vw"
                        className="w-full rounded-t-xl object-cover"
                    />
                </div>
                <p className="p-5 text-xl">{work.name}</p>
            </div>
        </Link>
    );
};

export default Work;
