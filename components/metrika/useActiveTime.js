// components/metrika/useActiveTime.js
'use client';
import { useEffect, useRef } from 'react';

export function useActiveTime({ on30sec, on60sec }) {
    const activeTimeRef = useRef(0);
    const lastActivityRef = useRef(Date.now());
    const isActiveRef = useRef(true);
    const fired30Ref = useRef(false);
    const fired60Ref = useRef(false);

    useEffect(() => {
        const ACTIVITY_TIMEOUT = 5000; // 5 секунд
        const checkInterval = 1000; // проверка раз в секунду

        function onUserActivity() {
            if (!isActiveRef.current) {
                isActiveRef.current = true;
                lastActivityRef.current = Date.now();
            }
        }

        const intervalId = setInterval(() => {
            const now = Date.now();

            if (isActiveRef.current) {
                activeTimeRef.current += (now - lastActivityRef.current) / 1000;
                lastActivityRef.current = now;

                if (!fired30Ref.current && activeTimeRef.current >= 30) {
                    fired30Ref.current = true;
                    on30sec?.();
                }
                if (!fired60Ref.current && activeTimeRef.current >= 60) {
                    fired60Ref.current = true;
                    on60sec?.();
                }
            }

            if (now - lastActivityRef.current > ACTIVITY_TIMEOUT) {
                isActiveRef.current = false;
            }
        }, checkInterval);

        window.addEventListener('mousemove', onUserActivity);
        window.addEventListener('keydown', onUserActivity);
        window.addEventListener('scroll', onUserActivity);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('mousemove', onUserActivity);
            window.removeEventListener('keydown', onUserActivity);
            window.removeEventListener('scroll', onUserActivity);
        };
    }, [on30sec, on60sec]);
}
