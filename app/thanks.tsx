'use client';

import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ваша заявка принята!',
};

export default function ThanksPage() {
    return (
        <div className="m-auto text-center">
            <div className="max-w-[900px] mx-auto mb-7">
                <h1 className="text-3xl font-bold tracking-tight text-gradient">Ваша заявка принята!</h1>
                <p className="text-xl mt-5 lg:mt-3">Наш менеджер наверняка уже звонит Вам, чтобы обговорить детали</p>
            </div>

            <Link href="/">
                <button className="font-medium text-xl bg-sky-500 hover:bg-sky-600 text-white rounded-lg px-5 py-3 transition-all duration-300">
                    Вернуться на главную
                </button>
            </Link>
        </div>
    );
}