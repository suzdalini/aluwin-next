import React from 'react';
import Systems from '@/components/Systems';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import HeaderLink from '@/components/HeaderLink';
import Hero from '@/components/Hero';
import Image from 'next/image';
export const metadata = {
    title: 'Остекление коттеджей и загородных домов от Alutech',
    description:
        'Остекление коттеджей и загородных домов от Alutech. Бесплатная консультация по телефону. Сертифицированный партнер Alutech',
};

export default function Home() {
    const heroVariants = [
        {
            title: 'Остекление коттеджей и загородных домов от Alutech',
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
            <Hero variants={heroVariants} forcedIndex={0} />

            <div className="h-16"></div>

            <section className="bg-white rounded-2xl mx-[-1.25rem] md:mx-0">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8 w-full">
                    <div className="relative h-full min-h-[500px] w-full">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/7.webp`}
                            className="object-cover object-center w-full h-full rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
                            alt="Алюминиевые окна Алютех"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                        />
                    </div>

                    <div className="p-5 lg:p-14 my-auto flex flex-col gap-5">
                        <h2>
                            Почему окна и двери Alutech идеально подходят для коттеджей и загородных
                            домов
                        </h2>
                        <p className="text-lg md:text-xl">
                            Окна и двери Alutech созданы с учётом современных требований к
                            энергоэффективности и комфорту. Благодаря многокамерному профилю,
                            продуманной системе уплотнителей и терморазрыву, они обеспечивают
                            надёжную тепло- и шумоизоляцию, что особенно важно для частных домов в
                            пригороде. Даже в условиях сурового климата внутри дома сохраняется
                            уютная температура и тишина, а{' '}
                            <b>затраты на отопление и кондиционирование снижаются</b>.
                        </p>
                        <p className="text-lg md:text-xl">
                            Стильный внешний вид и широкие возможности по дизайну делают системы
                            Alutech отличным выбором для коттеджей с индивидуальной архитектурой.
                            Алюминиевый профиль легко адаптируется под панорамные остекления,
                            раздвижные двери, зимние сады и нестандартные проёмы, сохраняя при этом
                            прочность и долговечность. Это идеальное решение для тех, кто ценит
                            комфорт, эстетику и надежность в своём загородном доме.{' '}
                        </p>
                    </div>
                </div>
            </section>

            <div className="h-16"></div>

            <section id="systems">
                <h2>Профильные системы Алютех для коттеджей и загородных домов</h2>
                <Systems />
            </section>

            <div className="h-16"></div>

            <section className="bg-white rounded-2xl mx-[-1.25rem] md:mx-0">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8 w-full">
                    <div className="p-5 lg:p-14 my-auto flex flex-col gap-5">
                        <h2> Раздвижные двери Alutech расширяют пространство </h2>
                        <p>
                            Раздвижные двери Alutech — это не просто удобный проход между домом и
                            террасой, садом или балконом. Это способ зрительно объединить внутреннее
                            пространство с окружающей природой, наполнив интерьер светом, воздухом и
                            ощущением свободы. Благодаря минималистичному профилю и большим
                            стеклянным полотнам создаётся эффект панорамного обзора без визуальных
                            преград.
                        </p>
                        <p>
                            Инновационные механизмы обеспечивают лёгкое и плавное открывание даже
                            при больших размерах створок, а надёжная тепло- и шумоизоляция сохраняет
                            комфорт в любое время года. Такие двери идеально вписываются в
                            архитектуру современных коттеджей и загородных домов, подчёркивая их
                            стиль и повышая функциональность жилого пространства.
                        </p>
                    </div>

                    <div className="relative h-full min-h-[500px] w-full">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl160/2.webp`}
                            className="object-cover object-center w-full h-full rounded-b-xl lg:rounded-tl-none lg:rounded-r-xl"
                            alt="Алюминиевые окна Алютех"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                        />
                    </div>
                </div>
            </section>

            <div className="h-16"></div>

            <section id="works">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold tracking-tight">Наши работы</h2>
                    <HeaderLink href="/works">Все работы</HeaderLink>
                </div>
                <Works count={8} category="houses" />
            </section>

            <div className="h-16"></div>

            <section id="contacts">
                <Contact />
            </section>
        </div>
    );
}
