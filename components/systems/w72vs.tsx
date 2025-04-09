'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import ImgHover from '../ImgHover'
import VideoSlider from '../VideoSlider'
import VideoSelectBtnOn from '../VideoSelectBtnOn'
import ImageSelector from '@/components/Image/Selector'



const W72VS = () => {
    const [openTypeId, setOpenTypeId] = useState(1)

    return (
        <div>
            <div>
                <div>
                    <Image
                        src="https://img.alu-win.ru/cover/w72vs.webp"
                        alt="Alutech ALT W 72 VS"
                        width={1600}
                        height={800}
                        className="rounded-xl w-full mb-16 shadow-xl shadow-slate-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />


                    <p className="text-xl mb-3">
                        Фасад с вентиляционной створкой предоставляет
                        энергоэффективную альтернативу стандартным элементам
                        открывания, используется для организации проветривания и
                        вентиляции. Вентиляционные створки гармонично сочетаются с
                        фасадом объекта, а также с крупногабаритными элементами
                        глухого остекления.
                    </p>
                    <p className="text-xl">
                        Высота вентиляционных створок составляет 3 метра, что
                        позволяет подчеркнуть разделение фасада, вертикальность окон
                        и их высоту.
                    </p>

                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 text-lg">
                        <div className="bg-white rounded-2xl p-5">
                            Широкий выбор цветовой гаммы открывает возможности для
                            расстановки архитектурных акцентов на плоскости фасада
                        </div>
                        <div className="bg-white rounded-2xl p-5">
                            Наличие у компании alutech узких створок шириной 180 мм
                            позволяет избежать применения дорогостоящих
                            оградительных элементов снаружи здания
                        </div>
                        <div className="bg-white rounded-2xl p-5">
                            Установка структурной вентиляционной створки —
                            уникальное решение, не имеющее аналогов
                        </div>
                    </div>

                    <div className="divider"></div>

                    <h2 className="text-3xl font-bold mb-5">
                        Области применения Alutech <b>ALT&nbsp;W&nbsp;72&nbsp;VS</b>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-5">
                        <div>
                            <ImgHover
                                src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/2.1.webp`}
                                srcHover={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/2.2.webp`}
                                alt="Частный дом"
                            />
                            <p className="mt-3">Частный дом</p>
                        </div>
                        <div>
                            <ImgHover
                                src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/3.1.webp`}
                                srcHover={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/3.2.webp`}
                                alt="Офисное здание"
                            />
                            <p className="mt-3">Офисное здание</p>
                        </div>
                        <div>
                            <ImgHover
                                src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/4.1.webp`}
                                srcHover={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/4.2.webp`}
                                alt="Многоэтажный жилой дом"
                            />
                            <p className="mt-3">Многоэтажный жилой дом</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <h2 className="text-3xl font-bold mb-5">
                        Типы конструкций, в которые интегрируется вентиляционная
                        створка <b>ALT&nbsp;W&nbsp;72&nbsp;VS</b>
                    </h2>

                    <p className="text-xl mb-5">
                        Вентиляционная створка Alutech ALT W 72 VS представляет
                        собой инновационное решение, которое легко интегрируется в
                        различные типы конструкций, такие как ленточные витражи (ALT
                        W62, ALT W72), элементные фасады (ALT EF65) и
                        стоечно-ригельные фасады (ALT F50). Она обеспечивает
                        оптимальную вентиляцию, улучшает микроклимат внутри здания и
                        гармонично сочетается с любыми архитектурными решениями
                        благодаря своему современному дизайну и высококачественным
                        материалам.
                    </p>

                    <ImageSelector
                        items={[
                            {
                                id: 1,
                                text: 'Модульный фасад',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/5.1.webp`,
                            },
                            {
                                id: 2,
                                text: 'Ленточный витраж',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/5.2.webp`,
                            },
                        ]}
                    />

                    <div className="divider"></div>

                    <h2 className="text-3xl font-bold mb-5">Виды открываний</h2>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="flex flex-wrap gap-3 items-center">
                            {[
                                {
                                    id: 1,
                                    text: 'Механическое ручное',
                                },
                                {
                                    id: 2,
                                    text: 'Автоматическое',
                                },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setOpenTypeId(item.id)}
                                    className={`px-4 py-2 rounded-lg h-fit ${
                                        openTypeId === item.id
                                            ? 'bg-slate-800 text-white'
                                            : 'bg-white text-slate-800'
                                    }`}
                                >
                                    {item.text}
                                </button>
                            ))}
                        </div>

                        <VideoSlider
                            controls={false}
                            slides={[
                                {
                                    src: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/6.${openTypeId}.mp4`,
                                },
                            ]}
                        />
                    </div>

                    <div className="divider"></div>

                    <h2 className="text-3xl font-bold mb-5">
                        Ключевые преимущества окон Alutech с вентиляционной створкой
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                        <div className="flex gap-3 items-center">
                            <Icon
                                icon="bi:check-circle"
                                className="min-w-10 text-4xl text-sky-500"
                            />
                            <p>
                                гибкая интеграция в фасад, выполненный в любом
                                архитектурном стиле
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Icon
                                icon="bi:check-circle"
                                className="min-w-10 text-4xl text-sky-500"
                            />
                            <p>
                                многообразие вариантов применения вентиляционных
                                створок для реализации различных архитектурных идей
                            </p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Icon
                                icon="bi:check-circle"
                                className="min-w-10 text-4xl text-sky-500"
                            />
                            <p>стильный внешний вид</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-5">Вентиляция</h3>

                    <ImageSelector
                        items={[
                            {
                                id: 1,
                                text: 'Помещение',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/7.1.webp`,
                            },
                            {
                                id: 2,
                                text: 'Схема циркуляции воздуха',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/7.2.webp`,
                            },
                        ]}
                    />

                    <div className="divider"></div>

                    <h3 className="text-2xl font-bold mb-5">Теплоизоляция</h3>

                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/8.webp`}
                        alt="Alutech ALT W 72 VS"
                        width={1600}
                        height={800}
                        className="rounded-xl w-full shadow-xl shadow-slate-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="divider"></div>

                    <div className="flex flex-col md:relative">
                        <div
                            className="mt-5 md:mt-0 order-last md:absolute md:top-1/2 md:left-16 md:transform md:-translate-y-1/2"
                        >
                            <div className="flex flex-col gap-3 text-xs md:text-lg">
                                <div className="flex flex-nowrap gap-3 items-center">
                                    <p
                                        className="bg-lime-500 rounded-full flex items-center justify-center text-white h-7 w-7 md:h-10 md:w-10 min-h-7 min-w-7 max-h-10 max-w-10"
                                    >
                                        1
                                    </p>
                                    <p>
                                        Вспененные термоизоляторы в камерах профилей, λ = 0,035 Вт/м×°С
                                    </p>
                                </div>
                                <div className="flex flex-nowrap gap-3 items-center">
                                    <p
                                        className="bg-yellow-400 rounded-full flex items-center justify-center text-white h-7 w-7 md:h-10 md:w-10 min-h-7 min-w-7 max-h-10 max-w-10"
                                    >
                                        2
                                    </p>
                                    <p> 
                                        Полиамидные камерные термомосты шириной 34 мм
                                    </p>
                                </div>
                                <div className="flex flex-nowrap gap-3 items-center">
                                    <p
                                        className="bg-pink-700 rounded-full flex items-center justify-center text-white h-7 w-7 md:h-10 md:w-10 min-h-7 min-w-7 max-h-10 max-w-10"
                                    >
                                        3
                                    </p>
                                    <p>Трёхконтурная система уплотнителей</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/9.2.webp`}
                                alt="Alutech ALT W 72 VS"
                                width={1600}
                                height={800}
                                className="rounded-xl w-full shadow-xl shadow-slate-300 hidden md:block"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/9.3.webp`}
                                alt="Alutech ALT W 72 VS"
                                width={1600}
                                height={800}
                                className="rounded-xl w-full shadow-xl shadow-slate-300 md:hidden"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>

                    <div className="divider"></div>

                    <h3 className="text-2xl font-bold mb-5">Герметичность</h3>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/10.webp`}
                        alt="Alutech ALT W 72 VS"
                        width={1600}
                        height={800}
                        className="rounded-xl w-full shadow-xl shadow-slate-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="divider"></div>

                    <h2 className="text-3xl font-bold mb-5">Уплотнители</h2>

                    <div className="grid md:grid-cols-2 gap-5 mb-10">
                        <div>
                            <p className="mb-3">
                                Уплотнители системы Alutech W72 VS обеспечивают
                                высокую степень герметичности и надежную защиту от
                                внешних воздействий благодаря трехконтурной системе
                                уплотнения.
                            </p>
                            <p className="mb-3">
                                Внутренний контур уплотнения служит для создания
                                первичного барьера, защищая внутренние помещения от
                                проникновения воздуха и влаги. Он эффективно
                                изолирует тепло и обеспечивает дополнительный
                                комфорт внутри здания.
                            </p>
                            <p className="mb-3">
                                Средний контур уплотнения выполняет роль второй
                                линии обороны, усиливая герметичность конструкции.
                                Этот контур обеспечивает дополнительную защиту от
                                шума, ветра и влаги, создавая идеальные условия для
                                проживания и работы.
                            </p>
                        </div>
                        <div>
                            <p className="mb-3">
                                Внешний контур уплотнения является первым рубежом
                                защиты от внешних факторов. Он предотвращает
                                проникновение дождевой воды и ветра в конструкцию,
                                сохраняя долговечность и эстетичный вид фасада.
                            </p>
                            <p className="mb-5">
                                Совокупность всех трех контуров уплотнения в системе
                                Alutech W72 VS гарантирует высочайший уровень
                                герметичности, энергоэффективности и комфорта, делая
                                эту систему идеальным выбором для современных
                                зданий.
                            </p>
                        </div>
                    </div>
                    <ImageSelector
                        items={[
                            {
                                id: 1,
                                text: 'Внутренний контур уплотнения',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/11.2.webp`,
                            },
                            {
                                id: 2,
                                text: 'Средний контур уплотнения',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/11.1.webp`,
                            },
                            {
                                id: 3,
                                text: 'Внешний контур уплотнения',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/11.3.webp`,
                            },
                        ]}
                    />

                    <div className="divider"></div>

                    <h2 className="text-3xl font-bold mb-5">Водоотведение</h2>

                    <div className="flex flex-col md:relative">
                        <div>
                            <div className="md:hidden">
                                <VideoSelectBtnOn
                                    items={[
                                        {
                                            id: "1",
                                            title: 'Видимый дренаж — заглушка с клапаном',
                                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/12.3.mp4`,
                                            ul: [
                                                'дополнительный вариант сброса влаги без нарушения внешнего контура конструкции',
                                                'отсутствие элементов на видимой стороне профиля улучшает внешний вид окна',
                                                'увеличение показателей воздухо- и водонепроницаемости конструкции',
                                            ],
                                        },
                                        {
                                            id: "2",
                                            title: 'Скрытый дренаж',
                                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/12.4.mp4`,
                                            ul: [
                                                'имеет эстетичный внешний вид',
                                                'улучшает показатели по воздухо- и водонепроницаемости',
                                                'надежно фиксируется без риска выпадения',
                                            ],
                                        },
                                    ]}
                                />
                            </div>
                            <div className="hidden md:block">
                                <VideoSelectBtnOn
                                    items={[
                                        {
                                            id: "1",
                                            title: 'Видимый дренаж — заглушка с клапаном',
                                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/12.1.mp4`,
                                            ul: [
                                                'дополнительный вариант сброса влаги без нарушения внешнего контура конструкции',
                                                'отсутствие элементов на видимой стороне профиля улучшает внешний вид окна',
                                                'увеличение показателей воздухо- и водонепроницаемости конструкции',
                                            ],
                                        },
                                        {
                                            id: "2",
                                            title: 'Скрытый дренаж',
                                            src: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/12.2.mp4`,
                                            ul: [
                                                'имеет эстетичный внешний вид',
                                                'улучшает показатели по воздухо- и водонепроницаемости',
                                                'надежно фиксируется без риска выпадения',
                                            ],
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <h2 className="text-3xl font-bold mb-5">Звукоизоляция</h2>

                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/13.webp`}
                        alt="Alutech ALT W 72 VS"
                        width={1600}
                        height={800}
                        className="rounded-xl w-full shadow-xl shadow-slate-300"
                    />

                    <div className="divider"></div>

                    <div className="flex flex-col md:relative">
                        <div
                            className="mt-5 md:mt-0 order-last md:absolute md:top-1/2 md:left-16 md:transform md:-translate-y-1/2"
                        >
                            <div className="flex flex-col gap-3 text-xs md:text-lg">
                                <div className="flex flex-nowrap gap-3 items-center">
                                    <p
                                        className="bg-pink-800 rounded-full flex items-center justify-center text-white h-7 w-7 md:h-10 md:w-10 min-h-7 min-w-7 max-h-10 max-w-10"
                                    >
                                        1
                                    </p>
                                    <p>3 контура уплотнения</p>
                                </div>
                                <div className="flex flex-nowrap gap-3 items-center">
                                    <p
                                        className="bg-lime-500 rounded-full flex items-center justify-center text-white h-7 w-7 md:h-10 md:w-10 min-h-7 min-w-7 max-h-10 max-w-10"
                                    >
                                        2
                                    </p>
                                    <p>
                                        Специальные вставки из вспененного материала
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/14.webp`}
                                alt="Alutech ALT W 72 VS"
                                width={1600}
                                height={800}
                                className="rounded-xl w-full shadow-xl shadow-slate-300 hidden md:block"
                            />
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMG}systems/w72vs/14.1.webp`}
                                alt="Alutech ALT W 72 VS"
                                width={1600}
                                height={800}
                                className="rounded-xl w-full shadow-xl shadow-slate-300 md:hidden"
                            />
                        </div>
                    </div>

                    <div className="divider"></div>

                    <h2 className="text-3xl font-bold mb-5">Долговечность</h2>

                    <div className="grid md:grid-cols-2 gap-5 mb-8">
                        <p>
                            Фасадные системы Alutech зарекомендовали себя как
                            наиболее надёжные решения со сроком службы, измеряющимся
                            десятками лет. Используемые материалы и передовые
                            технологии производства обеспечивают высокую
                            устойчивость к различным климатическим условиям, включая
                            экстремальные температуры, влажность и воздействие
                            ультрафиолетовых лучей. Прочные алюминиевые профили,
                            покрытые специальными антикоррозийными составами,
                            сохраняют эстетический вид и эксплуатационные
                            характеристики на протяжении многих лет. Благодаря
                            этому, фасадные системы Alutech требуют минимального
                            ухода и сохраняют свою привлекательность даже спустя
                            длительное время после установки.
                        </p>
                        <p>
                            Кроме того, фасадные системы Alutech обладают высокой
                            механической прочностью, что делает их устойчивыми к
                            механическим повреждениям и ветровым нагрузкам.
                            Инновационные технологии крепления и монтажа позволяют
                            обеспечить надежное и долговечное соединение всех
                            элементов системы, что в свою очередь способствует
                            повышению общей долговечности конструкции. Благодаря
                            этому, инвестиции в фасадные системы Alutech становятся
                            выгодными и долгосрочными, обеспечивая зданиям
                            современный и стильный внешний вид, а также защиту от
                            внешних факторов на многие десятилетия.
                        </p>
                    </div>

                    <VideoSlider
                        controls={false}
                        slides={[
                            {
                                src: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/15.mp4`,
                            },
                        ]}
                    />

                    <div className="divider"></div>

                    <h2 className="text-3xl font-bold mb-5">
                        Эстетические преимущества
                    </h2>

                    <ImageSelector
                        items={[
                            {
                                id: 1,
                                text: 'Вариант 1',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/16.1.webp`,
                            },
                            {
                                id: 2,
                                text: 'Вариант 2',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/16.2.webp`,
                            },
                            {
                                id: 3,
                                text: 'Вариант 3',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/16.3.webp`,
                            },
                            {
                                id: 4,
                                text: 'Вариант 4',
                                image: `${process.env.NEXT_PUBLIC_IMG}systems/w72vs/16.4.webp`,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default W72VS 