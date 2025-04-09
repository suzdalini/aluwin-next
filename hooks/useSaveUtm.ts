'use client';

import { useEffect } from 'react';

export const useSaveUtm = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const url = new URL(window.location.href);
        const params = url.searchParams;

        const utmKeys = [
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_term',
            'utm_content',
            'gclid',
            'yclid',
            'ysclid',
        ];

        const utmData: Record<string, string> = {};

        utmKeys.forEach((key) => {
            const value = params.get(key);
            if (value) {
                utmData[key] = value;
            }
        });

        if (Object.keys(utmData).length > 0) {
            localStorage.setItem('utm', JSON.stringify(utmData));
            console.log('💾 UTM сохранены в localStorage:', utmData);
        }
    }, []);
};
