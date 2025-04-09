import React from 'react';
import Works from '@/components/Works';
import Breadcrumbs from '@/components/Breadcrumbs';


export const metadata = {
    title: 'Наши работы | Алювин (Aluwin)',
    description: 'Наши работы | Алювин (Aluwin)',
};

export default function WorksPage() {
    return (
        <section>
            <div>
                <Breadcrumbs
                    items={[
                        { label: 'Главная', href: '/' },
                        { label: 'Наши работы', href: '/works' },
                    ]}
                />
    
                <h1>Наши работы</h1>
            </div>

            <Works count={16} />
        </section>
    );
}
