import Link from 'next/link';
import { Icon } from '@iconify/react';

interface HeaderLinkProps {
    href: string;
    children: React.ReactNode;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="text-slate-500 hover:text-white bg-white rounded-md px-4 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-sky-500 w-fit"
        >
            {children}
            <Icon icon="heroicons:arrow-right" />
        </Link>
    );
};

export default HeaderLink; 