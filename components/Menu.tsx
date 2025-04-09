'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItem {
    url: string;
    title: string;
}

interface MenuProps {
    items: MenuItem[];
    className?: string;
}

const Menu: React.FC<MenuProps> = ({ items, className }) => {
    const [isMounted, setIsMounted] = useState(false); // физическое наличие в DOM
    const [isVisible, setIsVisible] = useState(false); // управление анимацией
    const IMG = process.env.NEXT_PUBLIC_IMG;

    // Блокировка прокрутки body
    useEffect(() => {
        if (isMounted && isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMounted, isVisible]);

    const openMenu = () => {
        setIsMounted(true);
        setTimeout(() => setIsVisible(true), 10); // задержка нужна для применения transition
    };

    const closeMenu = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsMounted(false);
        }, 300); // длительность анимации
    };

    const handleLinkClick = () => {
        closeMenu();
    };

    return (
        <div className={className}>
            <Image
                src={`${IMG}${isMounted ? 'close.w.svg' : 'menu.svg'}`}
                alt={isMounted ? 'Close menu' : 'Open menu'}
                width={24}
                height={24}
                className="w-6 z-30 cursor-pointer"
                id="menu-icon"
                onClick={() => (isMounted ? closeMenu() : openMenu())}
            />

            {isMounted && (
                <div
                    className={`fixed inset-0 z-10 bg-black/80 flex justify-center items-center h-screen transition-opacity duration-300 ${
                        isVisible
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeMenu();
                    }}
                >
                    <div
                        className={`mx-auto z-20 p-6 w-80 text-center text-2xl text-white transform transition-all duration-300 ${
                            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`}
                        id="menu"
                    >
                        {items.map((item) => (
                            <div key={item.url} className="my-10">
                                <Link
                                    href={item.url}
                                    className="font-medium px-3 py-2 text-white rounded-lg hover:bg-gray-100 hover:text-black transition-colors duration-200"
                                    onClick={handleLinkClick}
                                >
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
