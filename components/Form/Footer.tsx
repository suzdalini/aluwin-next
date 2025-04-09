import React from 'react';
import { Icon } from '@iconify/react';
import Modal from '../Modal';
import NamePhone from './NamePhone';

export default function FormFooter() {
    return (
        <section className="bg-slate-300 rounded-2xl bg-no-repeat bg-cover bg-bottom bg-[url('https://img.alu-win.ru/cover/sl130.webp')] shadow-2xl shadow-slate-300">
            <div className="container mx-auto rounded-xl lg:bg-gradient-to-r lg:from-slate-900/80 bg-gradient-to-b from-slate-800/70 to-slate-800/40">
                <div className="my-auto py-36 lg:py-[110px] px-5 lg:px-[130px] max-w-[950px]">
                    <h1 className="text-white">
                        Алюминиевые окна Alutech в Москве напрямую от завода
                    </h1>

                    <div className="flex flex-col flex-wrap gap-1 mt-5 items-center md:items-start text-white text-lg">
                        <div className="rounded-md py-1 flex items-center gap-2">
                            <Icon icon="mdi:check-circle" className="text-lime-500 text-xl" />
                            <p>Сертифицированное производство</p>
                        </div>
                        <div className="rounded-md py-1 flex items-center gap-2">
                            <Icon icon="mdi:check-circle" className="text-lime-500 text-xl" />
                            <p>Бесплатная консультация и расчёт</p>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-6">
                        <Modal
                            title="Подготовим расчёт в 3 вариантах"
                            btn={{
                                text: 'Подготовим расчёт в 3 вариантах',
                                className:
                                    'text-pretty font-medium text-xl btn-primary text-white rounded-lg px-7 py-4 transition-all duration-300',
                            }}
                            img={`${process.env.NEXT_PUBLIC_IMG}systems/sl130/1.webp`}
                        >
                            <NamePhone
                                goal="formFooter"
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
                                    text: 'Подготовим расчёт в 3 вариантах',
                                    className:
                                        'text-lg btn-primary text-white rounded-md px-5 py-4 transition-all duration-300',
                                }}
                            />
                        </Modal>
                    </div>
                </div>
            </div>
        </section>
    );
}
