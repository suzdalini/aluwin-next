'use client';

import React from 'react';
import Modal from '@/components/Modal';
import FormNamePhone from '@/components/Form/NamePhone';

const About: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <h2>«Алювин» занимает ведущие позиции на рынке производства окон Alutech в России</h2>

            <div className="text-lg md:text-xl font-bold">
                Официальный партнёр Группы компаний Alutech в Москве и Московской области с
                собственным производственным цехом, сертифицированным по стандартам Alutech.
            </div>

            <div className="text-lg">
                Наша главная цель - предоставить нашим клиентам оконные системы высокого качества,
                соответствующие современным мировым стандартам, нормам безопасности и эстетическим
                запросам.
            </div>

            <div className="text-lg">
                Квалифицированные инженеры и
                собственный конструкторский отдел компании готовы разработать индивидуальное
                решение, идеально соответствующее вашим уникальным требованиям и особенностям
                объекта.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <div className="text-3xl font-bold mb-2">2 000 м²</div>
                    <div className="text-lg">собственного производства</div>
                </div>
                <div>
                    <div className="text-3xl font-bold mb-2">по ГОСТу</div>
                    <div className="text-lg">выполняем монтаж</div>
                </div>
            </div>

            <Modal
                title="Рассчитать ваш проект"
                btn={{
                    text: 'Рассчитать ваш проект',
                    className:
                        'font-medium text-xl btn-primary text-white rounded-lg px-6 py-4 transition-all duration-300 w-full md:w-fit',
                }}
                img={`${process.env.NEXT_PUBLIC_IMG}cover/w62.jpg`}
            >
                <FormNamePhone
                    goal="formMiddle"
                    className="px-7 pb-7 pt-3"
                    input={{
                        className: 'bg-white rounded-lg border-slate-400 border w-full p-4',
                        group: {
                            className: '',
                        },
                    }}
                    form={{
                        className: 'flex-col',
                        accept: {
                            link: {
                                className: 'text-sky-500 hover:underline',
                            },
                        },
                    }}
                    btn={{
                        text: 'Получить бесплатный расчёт окон',
                        className:
                            'text-lg btn-primary text-white rounded-md px-5 py-4 transition-all duration-300',
                    }}
                />
            </Modal>
        </div>
    );
};

export default About;
