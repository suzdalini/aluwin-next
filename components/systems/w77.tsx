'use client'

import React from 'react'
import Image from 'next/image'

interface Spec {
    value: string
    text: string
}

interface CategorySpec {
    category: string
    specs: Spec[]
}

const W77 = () => {
    const categorizedSpecs: CategorySpec[] = [
        {
            category: "Размеры",
            specs: [
                { value: "2500 мм", text: "Максимальная высота створки" },
                { value: "1600 мм", text: "Максимальная ширина створки" },
                { value: "150 кг", text: "Максимальный вес заполнения" },
            ],
        },
        {
            category: "Энергоэффективность",
            specs: [
                { value: "68 мм", text: "Толщина заполнения" },
                { value: "Uf = 1,24 W/m²·K", text: "Теплопроводность" },
                {
                    value: "0,93 м²·°C/Вт",
                    text: "Приведенное сопротивление теплопередаче (расчетный показатель со стеклопакетом 1,2 м²·°C/Вт)",
                },
            ],
        },
    ]

    return (
        <div>
            <section className="bg-slate-300 rounded-xl bg-center bg-no-repeat bg-cover bg-[url('https://img.alu-win.ru/cover/w77.webp')] shadow-2xl shadow-slate-300">
                <div className="h-[200px] lg:h-[700px]"></div>
            </section>

            <div className="h-8 lg:h-16"></div>

            <section>
                <h1 className="text-4xl font-bold mb-5">Alutech ALT W 77</h1>
                <div className="grid lg:grid-cols-4 gap-10 bg-white rounded-2xl p-10">
                    <div className="col-span-4">
                        <p className="text-xl mb-5">
                            ​Оконная система ALT W77 — это инновационное решение,
                            разработанное для обеспечения максимальной теплоизоляции
                            в условиях сурового климата. С монтажной глубиной рамы
                            77 мм и створки 85 мм, система использует полиамидные
                            термомосты шириной 39 мм типа Low Lambda, которые
                            значительно снижают теплопроводность конструкции.
                        </p>

                        <div className="text-xl text-black/75">
                            Применение оконной системы ALT W77 позволяет значительно
                            снизить затраты на отопление и повысить комфорт
                            проживания, особенно в регионах с холодным климатом.​
                        </div>

                        <div className="h-12"></div>

                        <h2 className="text-3xl font-bold mb-7">
                            В системе реализованы следующие решения:
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="bg-slate-100 rounded-xl p-7 text-center">
                                <div className="font-medium text-xl">
                                    <p className="text-slate-500">Окно с классической створкой</p>
                                    <p className="text-3xl">ALT W77 W</p>
                                </div>
                            </div>

                            <div className="bg-slate-100 rounded-xl p-7 text-center">
                                <div className="font-medium text-xl">
                                    <p className="text-slate-500">Окно со скрытой створкой</p>
                                    <p className="text-3xl">ALT W77 HS</p>
                                </div>
                            </div>

                            <div className="bg-slate-100 rounded-xl p-7 text-center">
                                <div className="font-medium text-xl">
                                    <p className="text-slate-500">Окно с вентиляционной створкой</p>
                                    <p className="text-3xl">ALT W77 VS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-16"></div>

            <section>
                <h2 className="text-3xl font-bold mb-9">
                    Alutech ALT W 77 позволяет изготавливать:
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="bg-white rounded-2xl p-7">
                        <h3 className="text-2xl font-bold mb-5">
                            Варианты исполнения ALT W77:
                        </h3>

                        <div className="space-y-4">
                            <p>
                                Классическая створка (ALT W77 W): традиционный
                                дизайн с высокими теплоизоляционными
                                характеристиками.​
                            </p>

                            <p>
                                Скрытая створка (ALT W77 HS): современное решение
                                для эстетичного внешнего вида и увеличения
                                светопропускания.​
                            </p>

                            <p>
                                Вентиляционная створка (ALT W77 VS): обеспечивает
                                эффективный воздухообмен без потерь тепла.​
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-7">
                        <h3 className="text-2xl font-bold mb-5">
                            Преимущества использования ALT W77:
                        </h3>

                        <div className="space-y-4">
                            <p>
                                Высокая энергоэффективность: система удовлетворяет
                                строгим нормативным требованиям по теплотехнике, что
                                особенно важно для северных регионов России.​
                            </p>

                            <p>
                                Комфортный микроклимат: внутренняя поверхность окон
                                поддерживает температуру выше точки росы,
                                предотвращая образование конденсата и обеспечивая
                                уют в помещении.​
                            </p>

                            <p>
                                Универсальность: возможность установки стеклопакетов
                                толщиной до 68 мм позволяет адаптировать систему под
                                различные требования по шумо- и теплоизоляции.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-16"></div>

            <section>
                <div className="grid lg:grid-cols-2 gap-10">
                    <Image
                        src="https://img.alu-win.ru/systems/w77.webp"
                        className="w-full"
                        alt="Alutech ALT W77"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div>
                        <h2 className="text-3xl mb-5 font-bold">
                            Основные параметры ALT W77
                        </h2>

                        <div className="space-y-6">
                            {categorizedSpecs.map((category) => (
                                <div key={category.category}>
                                    <h3 className="text-xl font-semibold mb-3">
                                        {category.category}
                                    </h3>

                                    <div className="grid gap-3">
                                        {category.specs.map((param) => (
                                            <div
                                                key={param.text}
                                                className="p-5 rounded-2xl bg-slate-500/10"
                                            >
                                                <h4 className="text-2xl mb-1 tracking-tight font-light">
                                                    {param.value}
                                                </h4>
                                                <p>{param.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-16"></div>

            <section className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5 h-[500px]">
                    <div className="md:w-[60%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}systems/w77/2.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT W77"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="md:w-[40%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}systems/w77/3.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT W77"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 h-[500px]">
                    <div className="md:w-[35%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}systems/w77/4.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT W77"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="md:w-[65%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}systems/w77/5.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT W77"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default W77 