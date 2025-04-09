import React from 'react';
import Systems from '@/components/Systems';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import HeaderLink from '@/components/HeaderLink';
import Hero from '@/components/Hero';
import Image from 'next/image';
export const metadata = {
    title: 'Остекление офисных зданий от Alutech',
    description:
        'Остекление офисных зданий от Alutech. Бесплатная консультация по телефону. Сертифицированный партнер Alutech',
};

export default function Home() {
    const heroVariants = [
        {
            title: 'Остекление офисных зданий от Alutech',
            arguments: ['Сертифицированное производство', 'Бесплатная консультация и расчёт'],
            button: 'Подготовим расчёт в 3 вариантах',
            bg: 'https://img.alu-win.ru/systems/w72hd/1.webp',
            goal: 'formFooter',
            img: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/1.webp`,
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
                            src={`${process.env.NEXT_PUBLIC_IMG}cover/f50.webp`}
                            className="object-cover object-center w-full h-full rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
                            alt="Алюминиевые окна Алютех"
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                        />
                    </div>

                    <div className="p-5 lg:p-14 my-auto flex flex-col gap-5">
                        <h2>Почему окна и двери Alutech идеально подходят для офисных зданий</h2>
                        <p className="text-lg md:text-xl">
                            Окна и двери Alutech отвечают современным требованиям деловой
                            архитектуры — они обеспечивают высокую светопроницаемость, строгую
                            геометрию и надёжную теплоизоляцию, что особенно важно для офисных
                            помещений. Благодаря прочному алюминиевому профилю конструкции
                            выдерживают большие площади остекления, не теряя в надёжности и
                            безопасности, а разнообразие дизайна позволяет гармонично вписать их в
                            здания любого стиля — от классических до хай-тек.
                        </p>
                        <p className="text-lg md:text-xl">
                            Энергоэффективность систем Alutech помогает снизить расходы на отопление
                            и кондиционирование, создавая комфортные условия для сотрудников и
                            посетителей. Кроме того, звукоизоляционные свойства алюминиевых систем
                            минимизируют уровень шума с улицы, что особенно актуально для офисов,
                            расположенных в деловых или оживлённых районах. Это инвестиция в
                            престиж, комфорт и долговечность вашего офисного пространства.
                        </p>
                    </div>
                </div>
            </section>

            <div className="h-16"></div>

            <section id="systems">
                <h2>Профильные системы Алютех</h2>
                <Systems />
            </section>

            <div className="h-16"></div>

            <section className="bg-white rounded-2xl mx-[-1.25rem] md:mx-0">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8 w-full">
                    <div className="p-5 lg:p-14 my-auto flex flex-col gap-5">
                        <h2>Соответствие противопожарным нормам и стандартам А+</h2>
                        <p>
                            Алюминиевые окна и двери Alutech соответствуют современным требованиям
                            пожарной безопасности и сертифицированы по международным стандартам.
                            Используемые материалы устойчивы к воздействию высоких температур и не
                            способствуют распространению огня, что делает их надёжным элементом
                            противопожарной защиты зданий. Системы проходят испытания на
                            огнестойкость и полностью соответствуют категории А+ по
                            энергоэффективности и безопасности.
                        </p>
                        <p>
                            Такое сочетание высоких противопожарных характеристик и
                            энергоэффективности особенно важно для коммерческих объектов, жилых
                            комплексов и общественных зданий. Продукция Alutech помогает
                            застройщикам и архитекторам уверенно проходить экспертизы и получать
                            разрешительную документацию, не жертвуя эстетикой и современным
                            дизайном. Это выбор в пользу надёжности, соответствия нормам и
                            долгосрочной эксплуатации.
                        </p>
                    </div>

                    <div className="relative h-full min-h-[500px] w-full">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/2.webp`}
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
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 w-full">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Наши работы по остеклению офисных зданий
                    </h2>
                    <HeaderLink href="/works">Все работы</HeaderLink>
                </div>
                <Works category="commercial" />
            </section>

            <div className="h-16"></div>

            <section id="contacts">
                <Contact />
            </section>
        </div>
    );
}
