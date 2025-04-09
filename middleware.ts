import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const ab = req.cookies.get('ab_variant');

    if (!ab) {
        const variant = Math.random() < 0.5 ? 'A' : 'B';
        res.cookies.set('ab_variant', variant, { path: '/' });
    }

    return res;
}