'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { menuItems } from '@/data/menu';
import Phone from './Contacts/Phone';

const Footer: React.FC = () => {
    const pathname = usePathname();


    return (
        <div>
            <div className="py-10 flex justify-center md:justify-between">
                <div>
                    <nav className="hidden sm:flex gap-4">
                        {menuItems.map((item, i) => (
                            <Link
                                key={i}
                                href={item.url}
                                className={`font-medium px-3 py-2 text-gray-700 rounded-lg transition-all duration-300 ${
                                    pathname === item.url
                                        ? 'bg-slate-200 hover:bg-slate-200 active:bg-slate-300'
                                        : 'hover:bg-slate-200 active:bg-slate-300'
                                }`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div>
                    <Phone
                        phone={process.env.NEXT_PUBLIC_PHONE || ''}
                        linkClassName="text-2xl font-bold tracking-tight flex items-center gap-1"
                        iconClassName="text-slate-700 md:hover:text-sky-800 transition-colors"
                        textClassName="text-slate-700 md:hover:text-sky-800 transition-colors"
                        textOnly
                    />
                    <div className="mb-2 text-slate-500">© Все права защищены</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
