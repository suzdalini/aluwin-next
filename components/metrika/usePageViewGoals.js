'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useContext } from 'react';
import { ABTestContext } from '@/components/metrika/ABTestProvider';

export function usePageViewGoals() {
    const pathname = usePathname();
    const firstRenderRef = useRef(true);
    const { variant } = useContext(ABTestContext);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }

        let count = parseInt(localStorage.getItem('pageViews') || '0', 10);
        count++;
        localStorage.setItem('pageViews', String(count));

        const METRIKA_ID = process.env.NEXT_PUBLIC_METRIKA_ID || '';

        const sendGoal = (goalName) => {
            if (window.ym) {
                window.ym(METRIKA_ID, 'reachGoal', goalName, { abVariant: variant });
                console.log(`🎯 ${goalName} triggered, variant:`, variant);
            }
        };

        if (count === 3) {
            sendGoal('3pagesView');
        } else if (count === 5) {
            sendGoal('5pagesView');
        } else if (count === 10) {
            sendGoal('10pagesView');
        }
    }, [pathname, variant]);
}
