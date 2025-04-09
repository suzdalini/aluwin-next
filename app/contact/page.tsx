import React from 'react';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Контакты',
    description: 'Контакты компании',
};

export default function ContactPage() {
    return (
        <section>
            <h1>Контакты</h1>

            <Contact /> 
        </section>
    );
}
