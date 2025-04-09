'use client';

import React from 'react';
import Image from 'next/image';
import VideoSlider from '../VideoSlider';
import PhotoSlider from '../PhotoSlider';
import ConstructorAlutech2 from '../ConstructorAlutech2';
import Color from '../Color';
import ImageSelector from '../Image/Selector';

interface Advantage {
    img: string;
    title: string;
    text: string;
}

const W72HD = () => {
    const advantages: Advantage[] = [
        {
            img: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/pr1.webp`,
            title: 'Надежность и долговечность',
            text: 'Специальная система антибиметалл предотвращает деформацию створок при значительных перепадах температур.',
        },
        {
            img: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/pr2.webp`,
            title: 'Высокая теплоизоляция',
            text: 'Теплоизоляция: Uf = 2,06 W/m2∙K, приведенное сопротивление теплопередаче: R₀ = 0,66 м2∙°С/Вт.',
        },
        {
            img: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/pr3.webp`,
            title: 'Безопасность',
            text: 'Возможность установки различных типов запирающих механизмов и противовзломной фурнитуры.',
        },
        {
            img: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/pr4.webp`,
            title: 'Разнообразие дизайна',
            text: 'Широкий выбор цветовых решений, включая анодирование и порошковую окраску по каталогу RAL.',
        },
    ];

    const types = [
        {
            id: 1,
            text: 'Двери в проёме',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/d1.webp`,
        },
        {
            id: 2,
            text: 'Двери + рамный витраж',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/d2.webp`,
        },
        {
            id: 3,
            text: 'Двери + стоечно-ригельный фасад',
            image: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/d3.webp`,
        },
    ];

    return (
        <div>
            <div>
                <div>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMG}cover/w72hd.webp`}
                        alt="Входные алюминиевые двери Alutech ALT W 72 HD"
                        width={1600}
                        height={800}
                        className="rounded-xl mb-16 shadow-xl shadow-slate-300"
                    />

                    <h2 className="font-bold mb-8 text-[1.6rem] md:text-3xl">
                        Входные алюминиевые двери Alutech ALT&nbsp;W&nbsp;72&nbsp;HD
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-5 text-black/80">
                        <div>
                            <p className="mb-3">
                                <b>Входные алюминиевые двери Alutech ALT W 72 HD</b> - это лицо
                                вашего здания, именно входная группа формирует первое впечатление о
                                вашем бизнесе.
                            </p>

                            <p className="mb-3">
                                Одним из современных трендов в проектировании входных групп
                                коммерческих и частных зданий являются габаритные двери.
                                <b>Входные двери ALT W72 HD</b> идеально подходят для создания
                                входов в общественные здания с высокой проходимостью: торговые и
                                развлекательные центры, государственные учреждения, аэропорты,
                                автомобильные и железнодорожные вокзалы, рестораны, магазины,
                                бизнес-центры, медицинские и образовательные учреждения и т. д.
                            </p>
                        </div>

                        <div>
                            <p className="mb-3">
                                <b>Алюминиевые двери ALT W72 HD</b> оснащены системой створок,
                                использующей только терморазрывы в варианте «антибиметалл». Это
                                позволяет избежать деформаций створок большого размера,
                                установленных в регионах с значительными перепадами температур.
                                Такой подход исключает проблемы при эксплуатации любых дверных
                                конструкций.
                            </p>
                        </div>
                    </div>

                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMG}systems/w72hd/5.webp`}
                        alt="Входные алюминиевые двери Alutech ALT W 72 HD"
                        width={1600}
                        height={800}
                        className="w-full mt-8 mb-16 rounded-xl"
                    />

                    <h2 className="text-2xl mb-8 font-bold">
                        Для Alutech ALT W 72 HD существуют разные типы конструкций:
                    </h2>

                    <p className="text-black/80">
                        Дверные конструкции между собой могут различаться по разным факторам.
                        Например по тому куда они будут встроены. От этого будут меняться некоторые
                        элементы дверных конструкция. Например, появляются адаптерные профили,
                        созданные для интегрирования одной светопрозрачной конструкции в другую.
                        Двери могут быть встроены просто в проём, в оконный витраж или в стоечно -
                        ригельный фасад. На иллюстрации ниже мы наглядно показали как это может
                        выглядеть.
                    </p>

                    <div className="my-10">
                        <h3 className="text-2xl font-bold mb-5">Тип конструкции</h3>

                        <ImageSelector items={types} />
                    </div>

                    <h2 className="text-2xl mb-5 font-bold">Типы открывания:</h2>

                    <p className="text-black/80">
                        Также дверные конструкции могут различаться по ориентации открывания
                        створок. Существую разные типы открываний. На конфигуратори ниже, наглядно
                        продемонстрировано, как выглядят конструкции при разных типах открывания,
                        например, ориентацией петель. Для наглядности мы дополнили изображения
                        сечениями. Вы можете взаимодействовать с кнопками и наблюдать как меняется
                        внешний вид конструкции при том или ином типе открывания.
                    </p>

                    <div className="my-10">
                        <ConstructorAlutech2 />
                    </div>

                    <h2 className="text-2xl mb-5 font-bold">Варианты порога:</h2>

                    <p className="mb-10 text-black/80">
                        Типы порогов - ещё один немаловажный пункт различия дверных конструкций. На
                        анимациях ниже, вы можете ознакомиться с основными типами устройства дверных
                        порогов Алютех. Типы порогов - ещё один немаловажный пункт различия дверных
                        конструкций. На анимациях ниже, вы можете ознакомиться с основными типами
                        устройства дверных порогов Алютех.
                    </p>

                    <VideoSlider
                        controls={true}
                        slideWidth={550}
                        slides={[
                            {
                                src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/1.mp4`,
                                text: 'Порог 20 мм (AYPC.W72.0838) – 2 контура уплотнения',
                            },
                            {
                                src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/2.mp4`,
                                text: 'Порог 22 мм (AYPC.W72.0801) – 1 контур уплотнения',
                            },
                            {
                                src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/3.mp4`,
                                text: 'Порог 14 мм (AYPC.W72.0854) – 1 контур уплотнения',
                            },
                            {
                                src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/4.mp4`,
                                text: 'Выпадающий порог',
                            },
                        ]}
                    />
                </div>
            </div>

            <div className="h-15"></div>


            <section>
                <div className="container">
                    <h2 className="text-3xl mb-7 font-bold text-center">
                        Преимущества применения тяжёлых габаритных дверей ALT W72 HD
                    </h2>

                    <div className="grid gap-8 lg:gap-5 mx-auto max-w-5xl">
                        {advantages.map((item, index) => (
                            <div className="grid lg:flex gap-3 lg:gap-8" key={index}>
                                <Image
                                    src={item.img}
                                    className="mb-3 rounded-lg shadow-2xl shadow-slate-300 w-full lg:w-44 h-auto lg:h-44"
                                    alt={item.title}
                                    width={176}
                                    height={176}
                                />

                                <div className="my-auto">
                                    <div className="text-xl font-bold mb-2">{item.title}</div>
                                    <p className="mb-0">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="h-15"></div>


            <section>
                <div className="container text-center">
                    <h2 className="text-2xl mb-5 font-bold">Показатели энергоэффективности</h2>

                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMG}systems/w72hd/warm.webp`}
                        alt="Показатели энергоэффективности"
                        width={800}
                        height={600}
                        className="w-full max-w-[800px] mx-auto mb-5 rounded-xl"
                    />

                    <p className="lead">
                        Теплоизоляция: Uf = 2,06 W/m2∙K
                        <br />
                        Приведенное сопр. теплопередаче (ГОСТ 26602.1-99): R₀ = 0,66 м2∙°С/Вт
                        <br />
                        Толщина заполнения: до 54 мм
                    </p>
                </div>
            </section>

            <div className="h-15"></div>

            <section>
                <h2 className="text-2xl mb-5 font-bold">Фурнитура</h2>

                <PhotoSlider
                    slidesCount={3}
                    slides={[
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/handle1.webp`,
                            text: '',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/handle2.webp`,
                            text: '',
                        },
                        {
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/handle3.webp`,
                            text: '',
                        },
                    ]}
                />
            </section>

            <div className="h-15"></div>

            <section>
                <h2 className="text-2xl mb-5 font-bold">Разнообразие вариантов покрытия</h2>

                <Color
                    slides={[
                        {
                            id: 1,
                            text: 'RAL 9005',
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/ral9005.webp`,
                        },
                        {
                            id: 2,
                            text: 'RAL 7022',
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/ral7022.webp`,
                        },
                        {
                            id: 3,
                            text: 'RAL 8017',
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/ral8017.webp`,
                        },
                        {
                            id: 4,
                            text: 'RAL 9006',
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/ral9006.webp`,
                        },
                        {
                            id: 5,
                            text: 'RAL 9016',
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/ral9016.webp`,
                        },
                        {
                            id: 6,
                            text: 'Серебристое анодирование',
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/anodize-silver.webp`,
                        },
                        {
                            id: 7,
                            text: 'Бронзовое анодирование',
                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72hd/anodize-bronze.webp`,
                        },
                    ]}
                />
            </section>
        </div>
    );
};

export default W72HD;
