'use client';

import { useSaveUtm } from '@/hooks/useSaveUtm';

export default function UtmTracker() {
    useSaveUtm();
    return null; // ничего не рендерит
}
