import { systems } from '@/data/systems';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Params {
    slug: string;
}

// Генерация метаданных
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const resolvedParams = await params; // Ожидаем Promise для получения slug
    const system = systems.find((s) => s.id === resolvedParams.slug);

    if (!system) {
        return {
            title: 'Система не найдена | Алювин',
            description: 'Запрашиваемая профильная система не найдена',
        };
    }

    return {
        title: `${system.name} | Профильные системы Alutech`,
        description: `Профильная система ${system.name} от Alutech. Производство алюминиевых конструкций любой сложности. Бесплатный расчёт и консультация.`,
    };
}

// Генерация статических параметров для SSG
export async function generateStaticParams() {
    return systems.map((system) => ({
        slug: system.id, // Предоставляем все возможные slug'и из systems
    }));
}

// Компонент страницы
export default async function SystemPage({ params }: { params: Promise<Params> }) {
    const resolvedParams = await params; // Ожидаем Promise для получения slug
    const { slug } = resolvedParams;
    const system = systems.find((s) => s.id === slug);

    if (!system) return notFound();

    let Component: React.ComponentType;

    try {
        Component = (await import(`@/components/systems/${slug}`)).default;
    } catch (error) {
        console.error(`Компонент не найден для slug: ${slug}`, error);
        return notFound();
    }

    return (
        <div className="container mx-auto">
            <Breadcrumbs
                items={[
                    { label: 'Главная', href: '/' },
                    { label: 'Профильные системы', href: '/systems' },
                    { label: system.name, href: `/systems/${system.url}` },
                ]}
            />
            <h1 className="text-3xl font-bold mb-6">{system.name}</h1>
            <Component />
        </div>
    );
}
