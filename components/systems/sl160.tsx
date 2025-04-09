'use client';

import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import PhotoSlider from '../PhotoSlider';
import VideoSlider from '../VideoSlider';
import Brochure from '../Brochure';

interface Param {
    value: string;
    text: string;
}

interface Spec {
    value: string;
    text: string;
}

interface Advantage {
    id: number;
    header: string;
    text: string;
}

const SL160 = () => {
    const specs: Spec[] = [
        { value: '160 мм', text: 'Монтажная ширина рамы' },
        { value: '72 мм', text: 'Монтажная ширина створки' },
        { value: '26–50 мм', text: 'Толщина заполнения' },
        { value: '330 кг (440 кг)', text: 'Максимальный вес створки' },
        { value: '3 300 мм', text: 'Максимальная высота створки' },
        { value: '3 200 мм', text: 'Максимальная ширина створки' },
        { value: '6 500 мм', text: 'Максимальная ширина конструкции' },
        { value: 'check', text: 'Термоизоляционные монтажные узлы' },
    ];

    const params: Param[] = [
        { value: 'до 40 дБ', text: 'Высокая степень звукоизоляции' },
        { value: 'до 1,0 м2∙К / Вт', text: 'Теплоизоляционные характеристики' },
        { value: '4-й класс', text: 'Воздухопроницаемость' },
        { value: '600–750 МПа (класс 9А)', text: 'Водопроницаемость' },
        { value: 'RC2 (WK2)', text: 'Безопасность (противовзломность)' },
        {
            value: 'до 330 кг (до 440 кг)',
            text: 'Фурнитура рассчитана на вес створки',
        },
    ];

    const advantages: Advantage[] = [
        {
            id: 1,
            header: 'Высокая теплоизоляция',
            text: 'Система обеспечивает отличные теплоизоляционные характеристики благодаря терморазрыву и многоступенчатому уплотнению.',
        },
        {
            id: 2,
            header: 'Надежность',
            text: 'Усиленный профиль и качественная фурнитура обеспечивают долговечность и надежность конструкции.',
        },
        {
            id: 3,
            header: 'Безопасность',
            text: 'Система имеет высокий класс противовзломности и обеспечивает безопасность помещения.',
        },
        {
            id: 4,
            header: 'Комфорт',
            text: 'Отличная шумоизоляция и герметичность создают комфортные условия в помещении.',
        },
        {
            id: 5,
            header: 'Эстетика',
            text: 'Современный дизайн и возможность выбора различных цветовых решений.',
        },
        {
            id: 6,
            header: 'Функциональность',
            text: 'Широкий выбор вариантов открывания и возможность комбинирования с другими системами.',
        },
    ];

    return (
        <div>
            <section
                className={`bg-slate-300 rounded-xl bg-center bg-no-repeat 
                    bg-cover
                    bg-[url('https://img.alu-win.ru/cover/sl160.webp')] 
                    shadow-2xl shadow-slate-300`}
            >
                <div className="h-[200px] lg:h-[700px]"></div>
            </section>

            <div className="h-8 lg:h-16"></div>

            <section>
                <div className="grid lg:grid-cols-4 gap-10 bg-white p-10 rounded-2xl">
                    <div className="col-span-3">
                        <div className="mb-8 text-2xl">
                            Система ALTSL160 предназначена для изготовления термоизолированных
                            подъемно-раздвижных оконно-дверных конструкций с одной или несколькими
                            активными створками, а также глухими частями или заглушенными створками.
                        </div>

                        <div className="text-black/75">
                            <p className="mb-2">
                                Система предоставляет широкие возможности архитекторам и дизайнерам
                                при оформлении больших стеновых проемов.
                            </p>
                            <p className="mb-2">
                                Теплые подъемно-раздвижные оконно-дверные конструкции способны
                                заменить собой стену, имеют высокую степень защиты от проникновений,
                                улучшают освещенность жилых помещений и экономят полезную площадь.
                            </p>
                            <p>
                                Разработанные специально для системы уплотнительные и притворные
                                элементы позволяют противостоять неблагоприятным погодным условиям,
                                надежно защищая помещения. В конструкциях лучшие среди аналогов
                                теплоизоляционные характеристики, показатели герметичности и
                                влагоотвода.
                            </p>
                        </div>
                    </div>

                    <div className="text-sm">
                        <Brochure 
                            pdfUrl="https://img.alu-win.ru/brochures/sl160.pdf"
                            imageUrl="https://img.alu-win.ru/brochures/sl160.jpg"
                            title="Брошюра Alutech ALT SL 160"
                            size="3.1 Мб"
                        />
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section>
                <div className="grid lg:grid-cols-2 gap-10">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMG}systems/SL160.webp`}
                        className="w-full"
                        alt="Alutech ALT SL 160"
                        width={800}
                        height={600}
                    />

                    <div>
                        <h2 className="text-3xl mb-5 font-bold">Основные параметры ALT SL 160</h2>
                        <div className="grid gap-3">
                            {params.map((param) => (
                                <div key={param.text} className="p-5 rounded-2xl bg-slate-500/10">
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

            <div className="divider"></div>

            <section>
                <h2>Технические данные ALT SL160</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {specs.map((spec) => (
                        <div key={spec.text} className="p-8 rounded-2xl bg-white">
                            {spec.value === 'check' ? (
                                <Icon
                                    icon="bi:check2-circle"
                                    className="mb-2"
                                    style={{ fontSize: '2.5rem' }}
                                />
                            ) : (
                                <h3 className="text-3xl mb-2 tracking-tight font-light">
                                    {spec.value}
                                </h3>
                            )}
                            <p className="text-black/75">{spec.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="divider"></div>

            <section className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5 h-[600px]">
                    <div className="md:w-[60%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl160/1.jpg`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT SL160"
                            width={800}
                            height={600}
                        />
                    </div>
                    <div className="md:w-[40%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl160/2.jpg`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT SL160"
                            width={800}
                            height={600}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 h-[600px]">
                    <div className="md:w-[50%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl160/3.jpg`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT SL160"
                            width={800}
                            height={600}
                        />
                    </div>
                    <div className="md:w-[50%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl160/4.jpg`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT SL160"
                            width={800}
                            height={600}
                        />
                    </div>
                </div>
            </section>

            <div className="divider"></div>

            <section>
                <h2>Преимущества ALT SL160</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {advantages.map((advantage) => (
                        <div key={advantage.id} className="p-8 rounded-2xl bg-white">
                            <h3 className="text-2xl font-bold mb-2">{advantage.header}</h3>
                            <p>{advantage.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="divider"></div>

            <section>
                <h2>Фурнитура</h2>
                <PhotoSlider
                    slides={[
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/handles/1.webp`,
                            text: '',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/handles/2.webp`,
                            text: '',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/handles/3.webp`,
                            text: '',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/handles/4.webp`,
                            text: '',
                        },
                    ]}
                />
            </section>

            <div className="divider"></div>

            <section>
                <h2>Схемы открывания ALT SL160</h2>
                <VideoSlider
                    controls={true}
                    slideWidth={400}
                    slides={[
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A1.mp4`,
                            text: 'A1',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A1+window.mp4`,
                            text: 'A1 + Окно',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A1+facade.mp4`,
                            text: 'A1 + Фасад',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A2.mp4`,
                            text: 'A2',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A3.mp4`,
                            text: 'A3',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A5.mp4`,
                            text: 'A5',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A6.mp4`,
                            text: 'A6',
                        },
                    ]}
                />
            </section>
        </div>
    );
};

export default SL160;
