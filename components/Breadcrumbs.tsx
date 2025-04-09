'use client';

import Link from 'next/link';
import React from 'react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    return (
        <nav>
            <ol className="flex flex-wrap items-center gap-2 mb-2">
                {items.map((item, index) => (
                    <React.Fragment key={item.href}>
                        {index > 0 && <span className="text-slate-400">/</span>}
                        <li>
                            {index === items.length - 1 ? (
                                <span className="text-slate-400">{item.label}</span>
                            ) : (
                                <Link href={item.href} className="text-slate-600 hover:text-sky-500 transition-colors">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs; 