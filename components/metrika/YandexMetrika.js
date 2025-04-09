'use client';
import { useContext } from 'react';
import { useActiveTime } from './useActiveTime';
import { usePageViewGoals } from './usePageViewGoals';
import { useSectionObserver } from './useSectionObserver';
import { ABTestContext } from '@/components/metrika/ABTestProvider';

export function YandexMetrika() {
    const { variant } = useContext(ABTestContext);

    // 1) Активное время: 30 и 60 секунд
    useActiveTime({
        on30sec: () => {
            if (window.ym)
                window.ym(process.env.NEXT_PUBLIC_METRIKA_ID, 'reachGoal', '30SecActiveSurfing', {
                    abVariant: variant,
                });
            console.log('🎯 30SecActiveSurfing triggered, variant:', variant);
        },
        on60sec: () => {
            if (window.ym)
                window.ym(process.env.NEXT_PUBLIC_METRIKA_ID, 'reachGoal', '60SecActiveSurfing', {
                    abVariant: variant,
                });
            console.log('🎯 60SecActiveSurfing triggered, variant:', variant);
        },
    });

    // 2) Просмотры страниц: 3, 5, 10
    usePageViewGoals();

    // 3) Глубина скролла до секций #works и #contacts
    useSectionObserver('works', () => {
        if (window.ym)
            window.ym(process.env.NEXT_PUBLIC_METRIKA_ID, 'reachGoal', 'scrollWorks', {
                abVariant: variant,
            });
        console.log('🎯 scrollWorks triggered, variant:', variant);
    });
    useSectionObserver('contacts', () => {
        if (window.ym)
            window.ym(process.env.NEXT_PUBLIC_METRIKA_ID, 'reachGoal', 'scrollContacts', {
                abVariant: variant,
            });
        console.log('🎯 scrollContacts triggered, variant:', variant);
    });

    return null;
}
