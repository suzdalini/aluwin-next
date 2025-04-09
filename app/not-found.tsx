// app/not-found.tsx
import Link from 'next/link';

export const dynamic = 'force-static';

export default function NotFound() {
    return (
        <div className="text-center py-20 flex flex-col gap-5">
            <h1>Страница не найдена</h1>
            <p className="text-lg">Проверьте адрес или вернитесь на главную</p>
            <Link href="/" className="px-6 py-3 btn-primary rounded-xl text-white w-fit mx-auto">
                Вернуться на главную
            </Link>
        </div>
    );
}
