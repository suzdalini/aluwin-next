'use client';

import React from 'react';
import Image from 'next/image';
import Brochure from '../Brochure';

interface Spec {
    value: string;
    text: string;
}

const F50: React.FC = () => {
    const specs: Spec[] = [
        { value: "700, 1100 кг", text: "Макс. вес заполнения" },
        { value: "50, 60, 80 мм", text: "Внутренняя видимая ширина профиля" },
        { value: "50, 60 мм", text: "Внешняя видимая ширина профиля" },
        { value: "6201 см⁴", text: "Максимальный момент инерции" },
        { value: "Класс А", text: "Водопроницаемость (ГОСТ 26602.2)" },
        { value: "Класс А", text: "Воздухопроницаемость (ГОСТ 26602.2)" },
    ];

    return (
        <div className="">
            <section
                className="
                    bg-slate-300 rounded-xl bg-center bg-no-repeat 
                    bg-cover bg-[url('https://img.alu-win.ru/cover/f50.webp')] 
                    shadow-2xl shadow-slate-300
                "
            >
                <div className="h-[200px] lg:h-[700px]"></div>
            </section>

            {/* divider */}
            <div className="h-8 lg:h-16"></div>
            {/* divider */}

            <section>
                <h2 className="text-4xl font-bold tracking-tight mb-5">Alutech F50</h2>
                
                <div className="grid lg:grid-cols-4 gap-10 bg-white rounded-2xl p-10">
                    <div className="col-span-3">
                        <div className="text-xl mb-6">
                            Cтоечно-ригельная фасадная система ALT F50 предназначена для
                            изготовления ограждающих светопрозрачных конструкций различной
                            сложности: навесных стеновых ограждений зданий, наклонных
                            светопрозрачных покрытий, фонарей, зимних садов и т.д.
                        </div>
                        <div>
                            В системе предусмотрено огромное количество технических решений по
                            внешнему и внутреннему исполнению фасадных конструкций, возможна
                            установка дверей и окон различного типа открывания.
                        </div>
                        <p className="text-black/75">
                            Классическое остекление ALT F50 предназначено для создания ограждающих светопрозрачных конструкций разной степени сложности. Профили системы обеспечивают максимальную прозрачность и визуальную легкость конструкции за счет оптимальной конфигурации и возможности реализации различных узловых решений.
                        </p>
                    </div>

                    <div className="text-sm">
                        <Brochure 
                            pdfUrl="https://img.alu-win.ru/brochures/f50.pdf"
                            imageUrl="https://img.alu-win.ru/brochures/f50.jpg"
                            title="Брошюра Alutech F50"
                            size="9.5 Мб"
                        />
                    </div>
                </div>
            </section>

            {/* divider */}
            <div className="h-16"></div>
            {/* divider */}

            <section>
                <div className="grid lg:grid-cols-2 gap-10">
                    <Image
                        src="https://img.alu-win.ru/systems/F50.webp"
                        className="w-full"
                        alt="Alutech F50"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div>
                        <h2 className="text-3xl mb-5 font-bold">
                            Основные параметры F50
                        </h2>
                        <div
                            className="grid gap-3"
                        >
                            {specs.map((param) => (
                                <div
                                    key={param.text}
                                    className="p-5 rounded-2xl bg-slate-500/10"
                                >
                                    <h3 className="text-2xl mb-1 tracking-tight font-light">
                                        {param.value}
                                    </h3>
                                    <p>{param.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* divider */}
            <div className="h-16"></div>
            {/* divider */}

            <div>
                <h2 className="mb-5 text-3xl font-bold tracking-tight">
                    Преимущества системы Alutech F50
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white rounded-2xl p-5">
                        <h3 className="mb-3 text-2xl">Современный дизайн</h3>
                        <ul className="mb-4">
                            <li>
                                Различные варианты исполнения фасадов – классический,
                                «горизонтальная линия», полуструктурный, структурный.
                            </li>
                            <li>
                                Разнообразные фасадные окна: скрытая створка, интегрированное
                                окно с видимым прижимом, лючок дымоудаления.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-5">
                        <h3 className="mb-3 text-2xl">Высокие показатели теплоизоляции</h3>
                        <ul className="mb-0">
                            <li>
                                Оптимальные теплотехнические характеристики фасадной
                                конструкции достигаются за счет использования системных
                                решений ALT F50 с применением рассекательного уплотнителя и
                                термовставок из вспененных материалов.
                            </li>
                            <li>
                                Интегрированные окна имеют рекордные теплоизоляционные
                                показатели в своем классе благодаря использованию
                                многокамерных полиамидных термомостов, ПВХ-профилей и
                                многоконтурной системы уплотнения.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-5">
                        <h3 className="text-2xl mb-3">Функциональность</h3>
                        <ul className="mb-4">
                            <li>
                                Предусматривается использование любого заполнения толщиной от
                                4 до 50 мм: стекла, стеклопакетов, листовых материалов и
                                сэндвич-панелей.
                            </li>
                            <li>
                                Возможность применения различных типов открывания
                                интегрирования окон: верхнеподвесного или
                                параллельно-отставного.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-5">
                        <h3 className="mb-3 text-2xl">Технологичность</h3>
                        <ul className="mb-0">
                            <li>
                                Специальные пластиковые и резиновые комплектующие обеспечивают
                                необходимый уровень термокомпенсации, эффективный отвод и
                                переброс конденсата, а также выполняют декоративную функцию.
                            </li>
                            <li>
                                Большое количество сухарных элементов позволяет реализовать
                                разнообразные конструктивные решения, применить различные
                                методы обработки и способы соединения основных профилей.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default F50; 