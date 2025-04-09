'use client';

import React from 'react';
import Image from 'next/image';
import Brochure from '../Brochure';

interface Spec {
    value: string;
    text: string;
}

const W72: React.FC = () => {
    const specs: Spec[] = [
        { value: "2500 мм", text: "Максимальная высота створки" },
        { value: "1600 мм", text: "Монтажная ширина створки" },
        { value: "150 кг", text: "Макс. вес заполнения" },
        { value: "до 58 мм", text: "Толщина заполнения" },
        { value: "Uf = 1,59 W/m2∙K", text: "Теплопроводность" },
        { value: "R₀ = 1,04 м2∙°С/Вт", text: "Приведенное сопр. теплопередаче (ГОСТ 26602.1)" },
    ];

    return (
        <div>
            <section
                className="
                    bg-slate-300 rounded-xl bg-center bg-no-repeat 
                    bg-cover bg-[url('https://img.alu-win.ru/cover/w72.webp')] 
                    shadow-2xl shadow-slate-300
                "
            >
                <div className="h-[200px] lg:h-[700px]"></div>
            </section>

            {/* divider */}
            <div className="h-8 lg:h-16"></div>
            {/* divider */}

            <section>
                <div className="grid lg:grid-cols-4 gap-10 bg-white rounded-2xl p-10">
                    <div className="col-span-3">
                        <p className="text-xl mb-5">
                            Полнофункциональная система, позволяющая изготавливать различные
                            конструкции. Эффективные многокамерные термоизоляторы обеспечивают
                            высокий коэффициент термического сопротивления. Предназначена для
                            изготовления окон и дверей с высокими требованиями к звукоизоляции
                            и прочности конструкции.
                        </p>

                        <div className="text-black/75">
                            Система ALT W72 W — современное технологичное решение для изготовления оконных конструкций, устанавливаемых на административных, коммерческих, производственных и жилых объектах с высокими требованиями к энергоэффективности. Окна на основании профилей серии ALT W72 W делают здания функциональнее и безопаснее, обеспечивают высокий уровень комфорта, а также защиту помещений от теплопотерь и шума с улицы. Конструкции ALT W72 W герметичны, надежны и долговечны благодаря применению профилей, комплектующих и фурнитуры высокого качества. Окна данной серии прекрасно гармонируют с фасадными и дверными системами «АЛЮТЕХ»
                        </div>
                    </div>

                    <div className="text-sm">
                        <Brochure 
                            pdfUrl="https://img.alu-win.ru/brochures/w72.pdf"
                            imageUrl="https://img.alu-win.ru/brochures/w72.jpg"
                            title="Брошюра Alutech W 72"
                            size="3.4 Мб"
                        />
                    </div>
                </div>
            </section>

            {/* divider */}
            <div className="h-16"></div>
            {/* divider */}

            <section className="bg-white rounded-2xl p-7">
                <h2 className="text-3xl font-bold mb-5">Alutech ALT W 72 позволяет изготавливать:</h2>
                <div className="grid lg:grid-cols-2 gap-5">
                    <div className="bg-slate-200/60 rounded-2xl p-7 text-xl">
                        <ul>
                            <li>Поворотные и поворотно-откидные окна</li>
                            <li>Штульповые окна</li>
                            <li>Ленточное остекление</li>
                            <li>Окна в фасад</li>
                        </ul>
                    </div>

                    <div className="bg-slate-200/60 rounded-2xl p-7 text-xl">
                        <ul>
                            <li>Одностворчатые двери</li>
                            <li>Двустворчатые двери</li>
                            <li>Штульповые двери</li>
                            <li>Двери в фасад</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* divider */}
            <div className="h-16"></div>
            {/* divider */}

            <section>
                <div className="grid lg:grid-cols-2 gap-10">
                    <Image
                        src="https://img.alu-win.ru/systems/W72.webp"
                        className="w-full"
                        alt="Alutech ALT W72"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div>
                        <h2 className="text-3xl mb-5 font-bold">
                            Основные параметры ALT W72
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

            <section className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5 h-[500px]">
                    <div className="md:w-[60%] h-full rounded-xl overflow-hidden">
                        <Image 
                            src={`${process.env.NEXT_PUBLIC_IMG}render/2.webp`} 
                            className="w-full h-full object-cover" 
                            alt="Alutech ALT W72" 
                            width={800}
                            height={500}
                        />
                    </div>
                    <div className="md:w-[40%] h-full rounded-xl overflow-hidden">
                        <Image 
                            src={`${process.env.NEXT_PUBLIC_IMG}render/3.webp`} 
                            className="w-full h-full object-cover" 
                            alt="Alutech ALT W72" 
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 h-[500px]">
                    <div className="md:w-[35%] h-full rounded-xl overflow-hidden">
                        <Image 
                            src={`${process.env.NEXT_PUBLIC_IMG}render/4.webp`} 
                            className="w-full h-full object-cover" 
                            alt="Alutech ALT W72" 
                            width={400}
                            height={500}
                        />
                    </div>
                    <div className="md:w-[65%] h-full rounded-xl overflow-hidden">
                        <Image 
                            src={`${process.env.NEXT_PUBLIC_IMG}render/1.webp`} 
                            className="w-full h-full object-cover" 
                            alt="Alutech ALT W72" 
                            width={800}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default W72;