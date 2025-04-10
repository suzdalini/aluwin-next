'use client';

import React from 'react';
import Image from 'next/image';

interface Module {
    src: string;
    title: string;
    text?: string;
}

const USKL60 = () => {
    const modules: Module[] = [
        {
            src: 'systems/uskl60/v1.webp',
            title: 'Квадрат',
        },
        {
            src: 'systems/uskl60/v2.webp',
            title: 'Треугольник',
        },
        {
            src: 'systems/uskl60/v3.webp',
            title: 'Ромб',
        },
        {
            src: 'systems/uskl60/v4.webp',
            title: 'Трапеция',
        },
    ];

    return (
        <div>
            <section>
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMG}systems/uskl60/1.webp`}
                    alt="Система элементных куполов ALT USKL60."
                    width={1600}
                    height={800}
                    className="rounded-xl mb-10 shadow-xl shadow-slate-300 w-full"
                    placeholder="blur"
                    blurDataURL="https://img.alu-win.ru/systems/uskl60/3.webp"
                    sizes="(max-width: 0px) 0px, 700px"
                    quality={80}
                />

                <h2>Система элементных куполов Alutech ALT USKL60</h2>

                <div className="grid lg:grid-cols-2 gap-5 mb-10">
                    <div>
                        <p className="mb-3">
                            Алюминиевая светопрозрачная система USKL60 предназначена для
                            использования при остеклении разнообразных зданий и сооружений, включая
                            купольно-крышные конструкции. Она состоит из объемных геометрических
                            структур, собранных из определенного количества готовых остекленных
                            блоков различных форм. Варианты исполнения позволяют создавать
                            остекленные блоки, которые при взгляде в перпендикулярной плоскости
                            принимают форму треугольника, прямоугольника, квадрата, трапеции, ромба
                            и других геометрических фигур.
                        </p>

                        <p className="mb-3">
                            Остекленные блоки могут быть дополнены внутренними переплетами, также
                            известными как импосты, которые позволяют разделить светопрозрачный блок
                            на более мелкие геометрические формы. Это позволяет создавать
                            индивидуальные и уникальные конструкции, сочетающие в себе эстетику и
                            функциональность.
                        </p>
                    </div>

                    <p className="mb-3">
                        Конструкция USKL60 предназначена для монтажа на несущий каркас, обеспечивая
                        прочность и стабильность системы. Она идеально подходит для различных типов
                        зданий и сооружений, обеспечивая высокую прозрачность и эстетически приятный
                        вид. Благодаря своей гибкости и разнообразию форм, она может адаптироваться
                        к различным архитектурным задачам и требованиям.
                    </p>
                </div>
            </section>

            <section>
                <h2>Преимущества</h2>
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMG}systems/uskl60/2.webp`}
                    alt="Система элементных куполов ALT USKL60."
                    width={1600}
                    height={800}
                    className="rounded-xl mb-10 shadow-xl shadow-slate-300 w-full"
                    placeholder="blur"
                    blurDataURL="https://img.alu-win.ru/systems/uskl60/3.webp"
                    sizes="(max-width: 0px) 0px, 700px"
                    quality={80}
                />
            </section>

            <section>
                <h2>Схема монтажа</h2>
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMG}systems/uskl60/3.webp`}
                    alt="Система элементных куполов ALT USKL60."
                    width={1600}
                    height={800}
                    className="rounded-xl mb-10 shadow-xl shadow-slate-300 w-full"
                    placeholder="blur"
                    blurDataURL="https://img.alu-win.ru/systems/uskl60/3.webp"
                    sizes="(max-width: 0px) 0px, 700px"
                    quality={80}
                />
            </section>

            <section>
                <h2>Виды модулей</h2>

                <div className="overflow-x-scroll hide-scroll mx-[-1.25rem] px-5">
                    <div className="flex flex-nowrap gap-5">
                        {modules.map((item, index) => (
                            <div key={index}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG}${item.src}`}
                                    className="mb-3 rounded-lg shadow-2xl shadow-slate-300 min-w-[300px]"
                                    alt={item.title}
                                    width={400}
                                    height={200}
                                    placeholder="blur"
                                    blurDataURL="https://img.alu-win.ru/systems/uskl60/3.webp"
                                    sizes="(max-width: 0px) 0px, 200px"
                                    quality={80}
                                />

                                <div className="my-auto">
                                    <div className="text-xl font-bold mb-2">{item.title}</div>
                                    {item.text && <p className="mb-0">{item.text}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default USKL60;
