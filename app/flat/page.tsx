import React from 'react';
import Systems from '@/components/Systems';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Image from 'next/image';
export const metadata = {
    title: 'Остекление квартир и балконов от Alutech',
    description:
        'Остекление квартир и балконов от Alutech. Бесплатная консультация по телефону. Сертифицированный партнер Alutech',
};

export default function Home() {
    const heroVariants = [
        {
            title: 'Остекление квартир и балконов от Alutech',
            arguments: [
                'Тепло зимой, прохладно летом благодаря терморазрыву',
                'Срок службы окон до 50 лет',
            ],
            button: 'Рассчитать стоимость остекления',
            bg: 'https://img.alu-win.ru/systems/w72hd/1.webp',
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
                            src={`${process.env.NEXT_PUBLIC_IMG}render/6.webp`}
                            className="object-cover object-center w-full h-full rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
                            alt="Алюминиевые окна Алютех"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                        />
                    </div>

                    <div className="p-5 lg:p-14 my-auto flex flex-col gap-5">
                        <h2>
                            Почему окна и двери Alutech идеально подходят для квартир и балконов
                        </h2>
                        <p className="text-lg md:text-xl">
                            Окна и двери Alutech обеспечивают высокий уровень тепло- и шумоизоляции,
                            что особенно важно для комфортного проживания в городских квартирах.
                            Благодаря прочному алюминиевому профилю и герметичной системе уплотнений
                            они сохраняют тепло зимой и защищают от уличного шума.
                        </p>
                        <p className="text-lg md:text-xl">
                            Элегантный дизайн, компактные створки и возможность панорамного
                            остекления делают их отличным выбором для балконов и лоджий. Системы
                            легко вписываются в современный интерьер, повышают энергоэффективность
                            квартиры и служат десятилетиями без потери внешнего вида и
                            функциональности.
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
                        <h2>Раздвижные двери Alutech для городских террас и балконов</h2>
                        <p>
                            Раздвижные двери Alutech — это практичное решение для оформления
                            балконов и террас в условиях городской застройки. Компактный механизм
                            открывания не требует дополнительного пространства, а панорамное
                            остекление визуально расширяет комнату и наполняет её естественным
                            светом.
                        </p>
                        <p>
                            Благодаря прочному алюминиевому профилю и современной системе
                            уплотнений, конструкции обеспечивают отличную тепло- и шумоизоляцию. Это
                            делает их удобными для круглогодичного использования, повышает комфорт
                            проживания и придаёт интерьеру современный, минималистичный облик.
                        </p>
                    </div>

                    <div className="relative h-full min-h-[500px] w-full">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl130/2.webp`}
                            className="object-cover object-center w-full h-full rounded-b-xl lg:rounded-tl-none lg:rounded-r-xl"
                            alt="Алюминиевые окна Алютех"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                        />
                    </div>
                </div>
            </section>

            <div className="h-16"></div>

            {/* <section id="works">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold tracking-tight">Наши работы</h2>
                    <HeaderLink href="/works">Все работы</HeaderLink>
                </div>
                <Works count={8} category="flats" />
            </section>

            <div className="h-16"></div> */}

            <section id="contacts">
                <Contact />
            </section>
        </div>
    );
}
