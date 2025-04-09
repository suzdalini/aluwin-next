// app/thanks.tsx
import Link from 'next/link';
import { Metadata } from 'next';
export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'Спасибо за заявку! | Алювин',
    description: 'Спасибо за заявку!',
};

export default function ThanksPage() {
    return (
        <div className="text-center py-20 flex flex-col gap-5">
            <h1>Спасибо за заявку!</h1>
            <p className="text-lg">Наш менеджер перезвонит Вам в течение 15 минут</p>
            <Link href="/" className="px-6 py-3 btn-primary rounded-xl text-white w-fit mx-auto">
                Вернуться на главную
            </Link>
        </div>
    );
}
