'use client';
import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { ABTestContext } from '@/components/metrika/ABTestProvider';

interface EmailProps {
    email: string;
    linkClassName?: string;
    iconClassName?: string;
    textClassName?: string;
    collapseOnMobile?: boolean;
}

const Email: React.FC<EmailProps> = ({
    email,
    linkClassName = 'hover:text-sky-500 transition-colors flex items-center gap-1.5',
    iconClassName = 'text-sky-500 text-xl',
    textClassName = 'hover:text-sky-500 transition-colors',
    collapseOnMobile = false,
}) => {
    const { variant } = useContext(ABTestContext);

    const handleClick = () => {
        if (typeof window !== 'undefined' && window.ym) {
            window.ym(process.env.NEXT_PUBLIC_METRIKA_ID || '', 'reachGoal', 'emailClick', {
                abVariant: variant,
            });
            console.log('🎯 emailClick triggered for:', email, 'variant:', variant);
        }
    };

    return (
        <a href={`mailto:${email}`} className={linkClassName} onClick={handleClick}>
            <Icon icon="mdi:email" className={iconClassName} />
            <span
                className={`callibri-email ${textClassName} ${
                    collapseOnMobile ? 'sm:inline hidden' : ''
                }`}
            >
                {email}
            </span>
        </a>
    );
};

export default Email;
