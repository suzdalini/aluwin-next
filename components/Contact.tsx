'use client';

import React from 'react';
import Email from './Contacts/Email';
import Phone from './Contacts/Phone';

const Contact: React.FC = () => {
    return (
        <div
            className={`bg-white rounded-xl px-10 lg:px-20 bg-[url('https://img.alu-win.ru/cover/contact.webp')] bg-cover bg-left lg:bg-center`}
        >
            <div className="py-14 lg:py-[170px] text-center lg:text-left">
                <h2 className="font-bold mb-8 text-white">Контактная информация</h2>

                <div className="mb-8 text-xl text-white">
                    г. Москва, Нахимовский проспект, д. 24
                    <br />
                    «Экспострой на Нахимовском»,
                    <br />3 павильон, 1 этаж, 20B, место 292
                </div>

                <div className="flex gap-5 lg:gap-5 text-xl font-bold flex-wrap justify-center lg:justify-start">
                    <button className="cursor-pointer rounded-lg btn-primary text-white px-6 py-3">
                        <Phone
                            phone={process.env.NEXT_PUBLIC_PHONE || ''}
                            linkClassName="hover:text-sky-500 transition-colors flex items-center gap-1.5"
                            iconClassName="text-white"
                            textClassName="hover:text-white transition-colors"
                            collapseOnMobile={false}
                        />
                    </button>
                    <button className="rounded-lg px-6 py-3 btn-secondary text-black cursor-pointer">
                        <Email
                            email={process.env.NEXT_PUBLIC_EMAIL || ''}
                            linkClassName="hover:text-sky-500 transition-colors flex items-center gap-1.5"
                            iconClassName="text-black"
                            textClassName="text-black"
                            collapseOnMobile={false}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
