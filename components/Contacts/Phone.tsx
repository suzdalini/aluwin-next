'use client';
import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { ABTestContext } from '@/components/metrika/ABTestProvider';

interface PhoneProps {
    phone: string;
    linkClassName?: string;
    iconClassName?: string;
    textClassName?: string;
    collapseOnMobile?: boolean;
    iconOnly?: boolean;
    textOnly?: boolean;
}

const Phone: React.FC<PhoneProps> = ({
    phone,
    linkClassName = 'text-xl hover:text-sky-500 transition-colors',
    iconClassName = 'text-sky-500 text-xl',
    textClassName = 'hover:text-sky-500 transition-colors',
    collapseOnMobile = false,
    iconOnly = false,
    textOnly = false,
}) => {
    const { variant } = useContext(ABTestContext);

    // Очищаем номер для ссылки
    const cleanPhone = phone.replace(/\D/g, '');

    const formatPhone = (phone: string) => {
        const cleaned = phone.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
        if (!match) return phone;
        return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
    };

    const handleClick = () => {
        if (typeof window !== 'undefined' && window.ym) {
            window.ym(process.env.NEXT_PUBLIC_METRIKA_ID || '', 'reachGoal', 'phoneClick', {
                abVariant: variant,
            });
            console.log('🎯 phoneClick triggered for:', phone, 'variant:', variant);
        }
    };

    return (
        <a href={`tel:+${cleanPhone}`} className={linkClassName} onClick={handleClick}>
            {!textOnly && <Icon icon="mdi:phone" className={iconClassName} />}
            {!iconOnly && (
                <span
                    className={`callibri-phone ${textClassName} ${
                        collapseOnMobile ? 'sm:inline hidden' : ''
                    }`}
                >
                    {formatPhone(phone)}
                </span>
            )}
        </a>
    );
};

export default Phone;
