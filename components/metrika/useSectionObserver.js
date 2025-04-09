// components/metrika/useSectionObserver.js
'use client';
import { useEffect, useState } from 'react';

export function useSectionObserver(sectionId, onIntersect) {
    const [done, setDone] = useState(false);

    useEffect(() => {
        if (!sectionId || !onIntersect || done) return;
        const el = document.getElementById(sectionId);
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onIntersect();
                        setDone(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [sectionId, onIntersect, done]);
}
