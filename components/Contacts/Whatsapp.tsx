'use client';
import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { ABTestContext } from '@/components/metrika/ABTestProvider';

interface WhatsappProps {
    phone: string;
    linkClassName?: string;
    iconClassName?: string;
    textClassName?: string;
    collapseOnMobile?: boolean;
    iconOnly?: boolean;
}

const Whatsapp: React.FC<WhatsappProps> = ({
    phone,
    linkClassName = 'hover:text-green-500 transition-colors flex items-center gap-1.5',
    iconClassName = 'text-green-500 text-xl',
    textClassName = 'hover:text-green-500 transition-colors',
    collapseOnMobile = false,
    iconOnly = false,
}) => {
    const { variant } = useContext(ABTestContext);

    // Удаляем все нецифровые символы для href
    const cleanPhone = phone.replace(/\D/g, '');

    const handleClick = () => {
        if (typeof window !== 'undefined' && window.ym) {
            window.ym(process.env.NEXT_PUBLIC_METRIKA_ID || '', 'reachGoal', 'whatsappClick', {
                abVariant: variant,
            });
            console.log('🎯 whatsappClick triggered for:', phone, 'variant:', variant);
        }
    };

    return (
        <a
            href={`https://wa.me/${cleanPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            onClick={handleClick}
        >
            <Icon icon="mdi:whatsapp" className={iconClassName} />
            {!iconOnly && (
                <span className={`${textClassName} ${collapseOnMobile ? 'sm:inline hidden' : ''}`}>
                    {phone}
                </span>
            )}
        </a>
    );
};

export default Whatsapp;
