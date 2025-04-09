'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { ABTestContext } from '@/components/metrika/ABTestProvider';

interface BrochureProps {
    pdfUrl: string;
    imageUrl: string;
    title: string;
    size: string;
}

export default function Brochure({ pdfUrl, imageUrl, title, size }: BrochureProps) {
    const { variant } = useContext(ABTestContext);
    const METRIKA_ID = process.env.NEXT_PUBLIC_METRIKA_ID || '';

    const handleBrochureClick = () => {
        if (typeof window !== 'undefined' && window.ym) {
            window.ym(METRIKA_ID, 'reachGoal', 'pdfDownload', { abVariant: variant });
            console.log('🎯 pdfDownload triggered, variant:', variant);
        }
    };

    return (
        <div className="text-sm">
            <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500"
                onClick={handleBrochureClick}
            >
                <Image
                    src={imageUrl}
                    className="border border-slate-200 rounded-lg w-36 hover:scale-[1.02] transition duration-300"
                    alt={title}
                    width={144}
                    height={200}
                />
                <br />
                {title}
            </a>
            <p className="mb-0">pdf, {size}</p>
        </div>
    );
}
