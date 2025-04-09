'use client';

import React from 'react';
import Image from 'next/image';
import PhotoSlider from '@/components/PhotoSlider';
import VideoSlider from '@/components/VideoSlider';
import ImageSelector from '@/components/Image/Selector';

interface Advantage {
    id: number;
    header: string;
    text: string;
}

const SL130: React.FC = () => {
    const advantages: Advantage[] = [
        {
            id: 1,
            header: 'Теплоизоляция',
            text: 'Гарантирует защиту от промерзания, предотвращает образование конденсата на внутренней поверхности конструкции и обеспечивает комфортную температуру и микроклимат в помещении. Благодаря этому, можно сэкономить на отоплении и кондиционировании.',
        },
        {
            id: 2,
            header: 'Герметичность',
            text: 'Предоставляет надежную защиту от протечек и продуваний, а также исключает возможность появления грибков и плесени. Создает комфортный микроклимат в помещении, предотвращая проникновение уличной пыли, посторонних запахов, выхлопных газов и гари.',
        },
        {
            id: 5,
            header: 'Долговечность',
            text: 'Длительный срок службы конструкций благодаря элементам из нержавеющей стали, которые устойчивы к коррозии на протяжении 50 лет и более. Кроме того, не требуется частая регулировка фурнитуры, а эстетичный внешний вид сохраняется благодаря устойчивости покрытий к выцветанию и выгоранию.',
        },
        {
            id: 3,
            header: 'Звукоизоляция',
            text: 'Обладает высокой степенью звукоизоляции, обеспечивая оптимальные условия для работы в помещении и создавая комфортные условия для отдыха и сна.',
        },
        {
            id: 4,
            header: 'Безопасность',
            text: 'Гарантирует безопасную эксплуатацию, защищает имущество и обеспечивает надежную защиту дома без необходимости установки решеток и стен.',
        },
    ];

    const widthItems = [
        {
            id: 1,
            text: 'Стандартная ширина 100 мм',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/width/100mm.webp`,
        },
        {
            id: 2,
            text: 'Slim Line 50 мм',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/width/50mm.webp`,
        },
    ];

    const shtapikItems = [
        {
            id: 1,
            text: '42 мм',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shtapik/4mm.webp`,
        },
        {
            id: 2,
            text: '38 мм',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shtapik/8mm.webp`,
        },
        {
            id: 3,
            text: '34 мм',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shtapik/12mm.webp`,
        },
        {
            id: 4,
            text: '30 мм',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shtapik/16mm.webp`,
        },
        {
            id: 5,
            text: '24 мм',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shtapik/20mm.webp`,
        },
    ];

    return (
        <div>
            <div>
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMG}cover/sl130.webp`}
                    alt="Система подъемно-раздвижных и раздвижных конструкций ALT SL130"
                    width={1200}
                    height={600}
                    className="rounded-xl mb-10 shadow-xl shadow-slate-300 w-full"
                />

                <h1 className="font-bold mb-5 text-3xl">
                    Система подъемно-раздвижных и раздвижных конструкций ALT SL130
                </h1>

                <p className="text-xl text-slate-600">
                    Система ALT SL130 - инновационное решение, предназначенное для использования как
                    в частном строительстве, так и в общественных зданиях. Она идеально подходит для
                    создания выходов на террасы, балконы или патио в отелях, ресторанах и кафе.
                    Благодаря своей уникальной конструкции, система ALT SL130 обеспечивает широкий
                    проход и не занимает лишнего места в помещении. Будь то открытая или закрытая
                    позиция, крупноформатные створки этой системы предлагают удобство и эстетическую
                    привлекательность.
                </p>
            </div>

            <section className="py-5 lg:py-10">
                <h2 className="text-3xl font-bold mb-6">
                    Возможность установки различных стеклопакетов
                </h2>
                <ImageSelector
                    items={shtapikItems.map((item) => ({
                        ...item,
                        text: `Стеклопакет ${item.text}`,
                    }))}
                    buttonClass="px-4 py-2 rounded-lg bg-white text-slate-800"
                    activeButtonClass="px-4 py-2 rounded-lg bg-slate-800 text-white"
                    imageClass="transition duration-300 w-full rounded-lg shadow-2xl shadow-slate-300"
                />
            </section>

            <section className="py-5 lg:py-10">
                <h2 className="text-3xl mb-5 font-bold">Преимущества ALT SL130</h2>
                <div className="grid lg:grid-cols-3 gap-5">
                    {advantages.map((advantage) => (
                        <div key={advantage.id} className="p-8 rounded-2xl bg-white">
                            <h3 className="text-2xl font-bold mb-2">{advantage.header}</h3>
                            <p dangerouslySetInnerHTML={{ __html: advantage.text }}></p>
                        </div>
                    ))}
                </div>
            </section>

            {/* divider */}
            <div className="h-16"></div>
            {/* divider */}

            <section className="py-5 lg:py-10 flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5 h-[600px]">
                    <div className="md:w-[60%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl130/1.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT SL130"
                            width={800}
                            height={600}
                        />
                    </div>
                    <div className="md:w-[40%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl130/2.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT SL130"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 h-[600px]">
                    <div className="md:w-[50%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl130/3.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT SL130"
                            width={700}
                            height={600}
                        />
                    </div>
                    <div className="md:w-[50%] h-full rounded-xl overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}render/sl130/4.webp`}
                            className="w-full h-full object-cover"
                            alt="Alutech ALT SL130"
                            width={700}
                            height={600}
                        />
                    </div>
                </div>
            </section>

            {/* divider */}
            <div className="h-16"></div>
            {/* divider */}

            <section className="py-5 lg:py-10">
                <div className="container">
                    <h2 className="text-3xl mb-5 font-bold">Фурнитура</h2>

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
                </div>
            </section>

            <section className="py-5 lg:py-10">
                <h2 className="text-3xl font-bold mb-6">
                    Сравнение стандартной ширины рамы и Slim Line
                </h2>
                <ImageSelector
                    items={widthItems}
                    buttonClass="px-4 py-2 rounded-lg bg-white text-slate-800"
                    activeButtonClass="px-4 py-2 rounded-lg bg-slate-800 text-white"
                    imageClass="w-full rounded-lg shadow-2xl shadow-slate-300"
                />
            </section>

            <section className="py-5 lg:py-10">
                <h2 className="text-3xl mb-5 font-bold">Схемы открывания ALT SL130</h2>
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
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A7.mp4`,
                            text: 'A7',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A8.mp4`,
                            text: 'A8',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/A9.mp4`,
                            text: 'A9',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/C1.mp4`,
                            text: 'C1',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/C3.mp4`,
                            text: 'C3',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/C4.mp4`,
                            text: 'C4',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/sl130/shemas/D5.mp4`,
                            text: 'D5',
                        },
                    ]}
                />
            </section>

            <section className="py-5 lg:py-10">
                <h2 className="text-3xl mb-5 font-bold">Структура ALT SL130</h2>
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMG}systems/sl130/2.webp`}
                    alt="Система подъемно-раздвижных и раздвижных конструкций ALT SL130"
                    width={1200}
                    height={800}
                    className="rounded-xl mb-10 shadow-xl shadow-slate-300 w-full"
                />
            </section>
        </div>
    );
};

export default SL130;
