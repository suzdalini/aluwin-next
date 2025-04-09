'use client';
import React, { useRef } from 'react';
import { works } from '@/data/works';
import Work from '@/components/Work';

const Works: React.FC<{ count?: number; category?: 'all' | 'houses' | 'commercial' | 'flats' }> = ({
    count = 80,
    category = 'all',
}) => {
    const worksRef = useRef<HTMLElement>(null);

    return (
        <section ref={worksRef}>
            <div
                className="
                    hide-scroll
                    flex flex-col md:flex-row overflow-x-scroll md:overflow-x-visible 
                    md:grid lg:grid-cols-4 
                    gap-5 md:gap-8
                    mx-[-1.2rem] lg:mx-0 px-5 lg:px-0
                "
            >
                {[...works]
                    .reverse()
                    .slice(0, count)
                    .filter((work) => category === 'all' || work.category === category)
                    .map((work) => (
                        <Work key={work.id} work={work} />
                    ))}
            </div>
        </section>
    );
};

export default Works;
