'use client';

import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Brochure from '@/components/Brochure';

interface Spec {
    value: string;
    text: string;
}

const W62: React.FC = () => {
    const specs: Spec[] = [
        { value: '2500 мм', text: 'Максимальная высота створки' },
        { value: '1600 мм', text: 'Монтажная ширина створки' },
        { value: '150 кг', text: 'Макс. вес заполнения' },
        { value: 'до 50 мм', text: 'Толщина заполнения' },
        { value: 'Uf = 2,92 W/m2∙K', text: 'Теплопроводность' },
        {
            value: 'R₀ = 0,67 м2∙°С/Вт',
            text: 'Приведенное сопр. теплопередаче (ГОСТ 26602.1)',
        },
    ];

    return (
        <div>
            <section className="bg-slate-300 rounded-xl bg-center bg-no-repeat bg-cover bg-[url('https://img.alu-win.ru/cover/w62.webp')] shadow-2xl shadow-slate-300">
                <div className="h-[200px] lg:h-[700px]"></div>
            </section>

            {/* divider */}
            <div className="h-8 lg:h-16"></div>
            {/* divider */}

            <section>
                <div className="grid lg:grid-cols-4 gap-10 bg-white p-10 rounded-2xl">
                    <div className="col-span-3">
                        <div className="mb-8 text-2xl">
                            Система алюминиевых профилей ALTW62 предназначена для изготовления
                            различных типов конструкций, к которым предъявляются повышенные
                            требования по термо-изоляции и звукоизоляции. Из профилей систе- мы и
                            комплектующих изделий с использованием различной фурнитуры возможно
                            изготовление следующих типов изделий.
                        </div>

                        <div className="text-black/75">
                            Окна ALT W62 позволяют повысить функциональность и безопасность зданий,
                            обеспечивают высокий уровень комфорта в помещениях. Конструкции на
                            основании ALT W62 надежны и долговечны, имеют высокие показатели тепло-
                            и звукоизоляции, а также герметичности. Применяемые профили,
                            комплектующие и фурнитура, используемые типы покрытий гарантируют долгий
                            срок службы окон. Конструкции выглядят стильно, удачно гармонируют с
                            фасадными и дверными системами.
                        </div>
                    </div>

                    <div className="text-sm">
                        <Brochure
                            pdfUrl="https://img.alu-win.ru/brochures/w62.pdf"
                            imageUrl="https://img.alu-win.ru/brochures/w62.jpg"
                            title="Брошюра Alutech ALT W62"
                            size="54 Мб"
                        />
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section>
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="max-w-[748px] mx-auto">
                        <Image
                            src="https://img.alu-win.ru/systems/W62.webp"
                            alt="Alutech ALT W62"
                            width={748}
                            height={748}
                            placeholder="blur"
                            blurDataURL="https://img.alu-win.ru/systems/W62.webp"
                            sizes="(max-width: 767px) 100vw, (max-width: 1599px) 50vw, 800px"
                            quality={80}
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl mb-5 font-bold">Основные параметры ALT W62</h2>
                        <div className="grid gap-3">
                            {specs.map((spec) => (
                                <div key={spec.text} className="p-5 rounded-2xl bg-slate-500/10">
                                    <h3 className="text-2xl mb-1 tracking-tight font-light">
                                        {spec.value}
                                    </h3>

                                    <p>{spec.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5 h-[600px]">
                    <div className="md:w-[60%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/6.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT W62"
                            width={800}
                            height={600}
                        />
                    </div>
                    <div className="md:w-[40%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/7.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT W62"
                            width={500}
                            height={600}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 h-[600px]">
                    <div className="md:w-[50%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/8.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT W62"
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="md:w-[50%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/5.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT W62"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section>
                <h2 className="text-2xl font-bold tracking-tight mb-5">
                    Alutech ALT W62 подходит для решения разных задач:
                </h2>

                <div className="grid lg:grid-cols-3 gap-5">
                    <div className="bg-white p-10 rounded-2xl">
                        <h3 className="text-xl font-bold mb-5">Окна</h3>

                        <div className="grid gap-3">
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[4px] text-sky-600"
                                />
                                <p>
                                    Одностворчатые окна с различным типом открывания: поворотные,
                                    поворотно-откидные, верхне- подвесные внутреннего открывания,
                                    нижнеподвесные внутреннего открывания
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[4px] text-sky-600"
                                />
                                <p>Двустворчатые штульповые, внутреннего открывания</p>
                            </div>
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[4px] text-sky-600"
                                />
                                <p>Глухие</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-2xl">
                        <h3 className="text-xl font-bold mb-5">Двери</h3>
                        <div className="grid gap-3">
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[3px] text-sky-600"
                                />
                                <p>двустворчатые и одностворчатые</p>
                            </div>
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[3px] text-sky-600"
                                />
                                <p>внутреннего и наружного открывания</p>
                            </div>
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[4px] text-sky-600"
                                />
                                <p>
                                    C теплым порогом, с холодным порогом, с автоматическим
                                    опускающимся порогом
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[4px] text-sky-600"
                                />
                                <p>C цокольным профилем и створочным профилем по всему контуру</p>
                            </div>
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[4px] text-sky-600"
                                />
                                <p>C верхними и боковыми глухими частями в одной раме</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-2xl">
                        <h3 className="text-xl font-bold mb-5">Сложные конструкции</h3>
                        <div className="grid gap-3">
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[4px] text-sky-600"
                                />
                                <p>витражи</p>
                            </div>
                            <div className="flex gap-2">
                                <Icon
                                    icon="bi:check-circle"
                                    className="min-w-5 mt-[4px] text-sky-600"
                                />
                                <p>входные группы</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default W62;
