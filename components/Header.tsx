'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Menu from './Menu';
import { menuItems } from '@/data/menu';
import Phone from './Contacts/Phone';
import Whatsapp from './Contacts/Whatsapp';

export default function Header() {
    const pathname = usePathname();

    return (
        <div>
            <div className="flex items-center py-3 md:py-5 justify-between">
                <div className="flex gap-10 items-center">
                    <div className="text-2xl">
                        <Link href="/">
                            <div className="relative w-40 h-12">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG}logo2.svg`}
                                    alt="Логотип Алювин"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="flex gap-5">
                        <div>
                            <div className="text-center text-xl my-auto hidden lg:flex mr-8">
                                <div className="text-sm my-auto mr-4">Официальный партнёр</div>
                                <div className="relative w-36 h-10">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMG}logo.svg`}
                                        alt="Логотип Alutech"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-5 md:gap-7 items-center">
                    <div className="hidden sm:flex gap-3">
                        {menuItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.url}
                                className={`font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                                    pathname === item.url
                                        ? 'bg-slate-200 hover:bg-slate-200 active:bg-slate-300'
                                        : 'hover:bg-slate-200 active:bg-slate-300'
                                }`}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <Phone
                        phone={process.env.NEXT_PUBLIC_PHONE || ''}
                        linkClassName="hover:text-sky-500 transition-colors flex items-center gap-1.5"
                        iconClassName="w-6 h-6"
                        textClassName="text-xl"
                        collapseOnMobile
                    />

                    <Whatsapp
                        phone={process.env.NEXT_PUBLIC_WHATSAPP_LINK || ''}
                        linkClassName="hover:text-green-500 transition-colors flex items-center gap-1.5"
                        iconClassName="w-8 h-8"
                        textClassName="text-xl"
                        collapseOnMobile
                        iconOnly
                    />

                    <Menu items={menuItems} className="flex sm:hidden" />
                </div>
            </div>
        </div>
    );
}
