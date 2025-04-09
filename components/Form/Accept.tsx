import React from 'react';
import Link from 'next/link';

interface AcceptProps {
    className?: string;
    link?: {
        className?: string;
    };
}

const Accept: React.FC<AcceptProps> = ({ className, link }) => {
    return (
        <p className={className}>
            Нажимая на кнопку, вы соглашаетесь с нашей{' '}
            <Link href="/privacy-policy" className={link?.className}>
                политикой конфиденциальности
            </Link>
            .
        </p>
    );
};

export default Accept;
