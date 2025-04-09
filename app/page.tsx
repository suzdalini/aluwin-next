import React from 'react';
import Image from 'next/image';
import Systems from '@/components/Systems';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import ImgHover from '@/components/Image/ImgHover';
import HeaderLink from '@/components/HeaderLink';
import Hero from '@/components/Hero';
import { cookies } from 'next/headers';
import Link from 'next/link';
import About from '@/components/About';

export const metadata = {
    title: 'Алювин (Aluwin) — Алюминиевые окна и двери Alutech',
    description: 'Алювин (Aluwin) производит алюминиевые окна, двери и раздвижные системы из профиля Alutech. Бесплатная консультация по телефону',
};

export default async function Home() {

    const cookieStore = await cookies();
    const variant = cookieStore.get('ab_variant')?.value || 'A';
    const forcedIndex = variant === 'B' ? 1 : 0;

    const heroVariants = [
        {
            title: 'Алюминиевые окна Alutech в Москве напрямую от завода',
            arguments: ['Сертифицированное производство', 'Бесплатная консультация и расчёт'],
            button: 'Подготовим расчёт в 3 вариантах',
            bg: 'https://img.alu-win.ru/cover/w72.webp',
            goal: 'formHero',
            img: `https://img.alu-win.ru/cover/w72.webp`,
        },
        {
            title: 'Премиум остекление загородных домов от Alutech',
            arguments: [
                'Тепло зимой, прохладно летом благодаря терморазрыву',
                'Идеально для панорамных фасадов и террас',
                'Срок службы окон до 50 лет',
            ],
            button: 'Рассчитать стоимость остекления',
            bg: 'https://img.alu-win.ru/render/1.webp',
            goal: 'formHero',
            img: `https://img.alu-win.ru/render/1.webp`,
        },
    ];

    return (
        <div>
            <Hero variants={heroVariants} forcedIndex={forcedIndex} />

            <div className="h-16"></div>


            <section>
                <h2>Области применения систем Alutech</h2>
    
                <div className="grid md:grid-cols-3 gap-5">
                    <Link href="/house">
                        <div>
                            <h3 className="mb-5">Загородные дома</h3>
                            <ImgHover
                                src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/2.1.webp`}
                                srcHover={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/2.2.webp`}
                                alt="Частный дом"
                            />
                        </div>
                    </Link>
                    <Link href="/office">
                        <div>
                            <h3 className="mb-5">Офисные здания</h3>
                            <ImgHover
                            src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/3.1.webp`}
                            srcHover={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/3.2.webp`}
                            alt="Офисное здание"
                        />
                        </div>
                    </Link>
                    <Link href="/flat">
                        <div>
                            <h3 className="mb-5">Многоэтажные жилые дома</h3>
                            <ImgHover
                            src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/4.1.webp`}
                            srcHover={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/4.2.webp`}
                                alt="Многоэтажный жилой дом"
                            />
                        </div>
                    </Link>
                </div>
            </section>

            <div className="h-16"></div>

            <section id="systems">
                <h2>Профильные системы Алютех</h2>
                <Systems />
            </section>

            <div className="h-16"></div>

            <section className="bg-white rounded-2xl mx-[-1.25rem] md:mx-0">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                    <div className="relative h-full">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/5.webp`}
                            className="object-cover object-center w-full h-full rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
                            alt="Алюминиевые окна Алютех"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                        />
                    </div>

                    <div className="p-5 lg:p-14 my-auto">
                        
                        <About />

                    </div>
                </div>
            </section>

            <div className="h-16"></div>

            <section id="works">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold tracking-tight">Наши работы</h2>
                    <HeaderLink href="/works">Все работы</HeaderLink>
                </div>
                <Works count={8} />
            </section>

            <div className="h-16"></div>

            <section id="contacts">
                <Contact />
            </section>
        </div>
    );
}
