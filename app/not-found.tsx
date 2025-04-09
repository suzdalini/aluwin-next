// app/not-found.tsx
import Link from 'next/link';

export const dynamic = 'force-static';

export default function NotFound() {
    return (
        <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Страница не найдена</h1>
            <p className="text-lg">Проверьте адрес или вернитесь на главную</p>
            <Link href="/" className="px-4 py-2 btn-primary">
                На главную
            </Link>
        </div>
    );
}
