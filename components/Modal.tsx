'use client';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { ABTestContext } from '@/components/metrika/ABTestProvider';

interface ButtonProps {
    className?: string;
    text?: string;
}

interface IconProps {
    className?: string;
    name: string;
}

interface ModalProps {
    title?: string;
    btn?: ButtonProps;
    icon?: IconProps;
    img?: string;
    onClose?: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, btn, icon, img, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isRendered, setIsRendered] = useState(false);
    const METRIKA_ID = process.env.NEXT_PUBLIC_METRIKA_ID || '';
    const { variant } = useContext(ABTestContext);

    const openForm = () => {
        if (typeof window !== 'undefined' && window.ym) {
            window.ym(METRIKA_ID, 'reachGoal', 'formOpen', { abVariant: variant });
            console.log('🎯 formOpen triggered, variant:', variant);
        } else {
            console.warn('Метрика ещё не инициализирована');
        }
    };

    const showModal = () => {
        setIsRendered(true);
        setTimeout(() => setIsVisible(true), 10); // для плавной анимации
        openForm();
    };

    const closeModal = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsRendered(false);
            if (onClose) onClose();
        }, 300);
    }, [onClose]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeModal();
        };

        if (isRendered) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isRendered, closeModal]);

    return (
        <>
            {btn && (
                <button className={`cursor-pointer ${btn.className}`} onClick={showModal}>
                    {btn.text}
                </button>
            )}

            {icon && (
                <button className={`cursor-pointer ${icon.className}`} onClick={showModal}>
                    <Icon icon={icon.name} />
                </button>
            )}

            {isRendered && (
                <div
                    className={`fixed top-0 left-0 w-screen h-screen bg-black/50 z-50 backdrop-blur-[5px] flex items-center justify-center transition-opacity duration-300 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                        if (event.target === event.currentTarget) closeModal();
                    }}
                >
                    <div
                        className={`rounded-2xl w-[90%] md:w-[500px] bg-white overflow-hidden relative z-50 transform transition-all duration-300 ${
                            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`}
                    >
                        <div className="relative">
                            {img && (
                                <Image
                                    src={img}
                                    alt="Алюминиевые окна Алютех"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                    sizes="(max-width: 640px) 90vw, 500px"
                                />
                            )}

                            <div className="shadow-xl shadow-black/40 bg-black rounded-full absolute top-4 right-4">
                                <button
                                    className="w-fit flex justify-end rounded-full"
                                    onClick={closeModal}
                                >
                                    <Icon
                                        icon="bi:x-circle-fill"
                                        className="text-4xl text-white hover:text-red-100 transition-colors duration-300"
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white">
                            {title && (
                                <div className="w-full my-auto px-7 pt-4 pb-2 font-bold text-3xl">
                                    {title}
                                </div>
                            )}
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
