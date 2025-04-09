'use client';
import React, { useState, useMemo, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import Accept from './Accept';
import { ABTestContext } from '@/components/metrika/ABTestProvider';

interface FormProps {
    className?: string;
    accept?: {
        link?: {
            className?: string;
        };
    };
}

interface ButtonProps {
    text: string;
    className: string;
}

interface InputProps {
    className?: string;
    group?: {
        className?: string;
    };
}

interface NamePhoneProps {
    goal?: string;
    className?: string;
    form: FormProps;
    btn: ButtonProps;
    input?: InputProps;
    onIsSent?: () => void;
}

interface Lead {
    name: string;
    phone: string;
}

declare global {
    interface Window {
        ym?: (
            metrikaId: string,
            event: string,
            goal: string,
            params?: Record<string, string>
        ) => void;
    }
}

const NamePhone: React.FC<NamePhoneProps> = ({ goal, className, form, btn, input, onIsSent }) => {
    const router = useRouter();
    const [lead, setLead] = useState<Lead>({ name: '', phone: '' });
    const [isSent, setIsSent] = useState<boolean>(false);
    const [inputFocused, setInputFocused] = useState(false);
    const [inputChanged, setInputChanged] = useState(false);
    const { variant } = useContext(ABTestContext);
    const METRIKA_ID = process.env.NEXT_PUBLIC_METRIKA_ID || '';

    // Функция очистки номера от нецифровых символов
    const clearPhone = (phone: string) => {
        return phone.replace(/\D/g, '');
    };

    const isNameValid = useMemo(() => lead.name.length > 1, [lead.name]);
    const isPhoneValid = useMemo(() => clearPhone(lead.phone).length > 10, [lead.phone]);
    const isDisabled = useMemo(
        () => !isNameValid || !isPhoneValid || isSent,
        [isNameValid, isPhoneValid, isSent]
    );

    // Общая функция для отправки события formInputFocus
    const triggerFormInputFocus = (field: string) => {
        if (!inputFocused && window.ym) {
            setInputFocused(true);
            window.ym(METRIKA_ID, 'reachGoal', 'formInputFocus', { abVariant: variant });
            console.log(`🎯 formInputFocus triggered (${field}), variant:`, variant);
        }
    };

    // Общая функция для отправки события formInputText
    const triggerFormInputText = (field: string) => {
        if (!inputChanged && window.ym) {
            setInputChanged(true);
            window.ym(METRIKA_ID, 'reachGoal', 'formInputText', { abVariant: variant });
            console.log(`🎯 formInputText triggered (${field}), variant:`, variant);
        }
    };

    // Обработчик изменения номера телефона с маской
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        triggerFormInputText('phone'); // Отправка события при изменении телефона
        if (value.length > 0) {
            value = '7' + value.substring(value.startsWith('7') ? 1 : 0);
            value = value.substring(0, 11);
            let formattedValue = '';
            if (value.length > 0) formattedValue += value[0] + ' ';
            if (value.length > 1) formattedValue += '(';
            if (value.length > 1) formattedValue += value.substring(1, Math.min(4, value.length));
            if (value.length > 4) formattedValue += ') ';
            if (value.length > 4) formattedValue += value.substring(4, Math.min(7, value.length));
            if (value.length > 7) formattedValue += '-';
            if (value.length > 7) formattedValue += value.substring(7, Math.min(9, value.length));
            if (value.length > 9) formattedValue += '-';
            if (value.length > 9) formattedValue += value.substring(9, 11);
            setLead((prev) => ({ ...prev, phone: formattedValue }));
        } else {
            setLead((prev) => ({ ...prev, phone: '' }));
        }
    };



    function getUtmData() {
        if (typeof window === 'undefined') return {};
    
        try {
            const raw = localStorage.getItem('utm');
            if (!raw) return {};
    
            return JSON.parse(raw);
        } catch (e) {
            console.warn('Ошибка при чтении UTM:', e);
            return {};
        }
    }




    // Отправка формы с вызовом целей Метрики
    const sendForm = async () => {
        const utm = getUtmData();


        const API = process.env.NEXT_PUBLIC_PROGRESS_API;
        const body = {
            brand: {
                id: 1,
                name: 'Алювин',
            },
            name: lead.name,
            phone: clearPhone(lead.phone),
            form: btn.text,
            utm: utm,
            ysclid: utm.ysclid,
            yclid: utm.yclid,
            gclid: utm.gclid,
        };

        try {
            await fetch(`${API}lead`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (onIsSent) {
                onIsSent();
            }

            if (typeof window !== 'undefined' && window.ym) {
                window.ym(METRIKA_ID, 'reachGoal', 'fromAnySubmited', { abVariant: variant });
                console.log('🎯 fromAnySubmited triggered, variant:', variant);
                if (goal) {
                    window.ym(METRIKA_ID, 'reachGoal', goal, { abVariant: variant });
                    console.log(`🎯 ${goal} triggered, variant:`, variant);
                }
            }

            router.push('/thanks');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={className}>
            <div className={`flex gap-3 ${form.className || ''}`}>
                <div className={input?.group?.className}>
                    <div className="form-group">
                        <div>Имя</div>
                        <input
                            id="name"
                            placeholder="Имя"
                            value={lead.name}
                            onFocus={() => triggerFormInputFocus('name')}
                            onChange={(e) => {
                                triggerFormInputText('name');
                                setLead((prev) => ({ ...prev, name: e.target.value }));
                            }}
                            className={input?.className}
                        />
                    </div>
                </div>

                <div className={input?.group?.className}>
                    <div className="form-group">
                        <div>Телефон</div>
                        <input
                            id="phone"
                            placeholder="+7 (999) 999-99-99"
                            value={lead.phone}
                            onChange={handlePhoneChange}
                            onFocus={() => triggerFormInputFocus('phone')}
                            type="tel"
                            className={input?.className}
                        />
                    </div>
                </div>

                <button
                    className={`w-full cursor-pointer ${btn.className} ${
                        isDisabled ? 'opacity-50' : ''
                    }`}
                    onClick={() => {
                        setIsSent(true);
                        if (window.ym) {
                            window.ym(METRIKA_ID, 'reachGoal', 'formSubmitClick', {
                                abVariant: variant,
                            });
                            console.log('🎯 formSubmitClick triggered, variant:', variant);
                        }
                        sendForm();
                    }}
                    disabled={isDisabled}
                >
                    {!isSent ? (
                        btn.text
                    ) : (
                        <Icon icon="svg-spinners:ring-resize" className="w-5 h-5 text-white" />
                    )}
                </button>
            </div>

            <Accept
                className="mt-3 text-sm"
                link={{
                    className: form?.accept?.link?.className,
                }}
            />
        </div>
    );
};

export default NamePhone;