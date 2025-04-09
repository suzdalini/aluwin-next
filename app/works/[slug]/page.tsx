import { works } from '@/data/works';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Params {
    slug: string;
}

// Генерация метаданных
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const resolvedParams = await params;
    const work = works.find((w) => w.url === resolvedParams.slug);

    if (!work) {
        return {
            title: 'Работа не найдена | Алювин',
            description: 'Запрашиваемая работа не найдена',
        };
    }

    return {
        title: `${work.name} | Наши работы`,
        description: `Работа ${work.name}`,
    };
}

// Генерация статических параметров для SSG
export async function generateStaticParams() {
    return works.map((work) => ({
        slug: work.url, // Используем work.url как slug
    }));
}

// Компонент страницы
export default async function WorkPage({ params }: { params: Promise<Params> }) {
    const resolvedParams = await params; // Ожидаем Promise для получения slug
    const { slug } = resolvedParams;
    const work = works.find((w) => w.url === slug);

    if (!work) return notFound();

    const images = Array.from(
        { length: work.images_count },
        (_, i) => `${process.env.NEXT_PUBLIC_IMG}works/${work.id}/${i}.webp`
    );

    return (
        <section>
            <div>
                <Breadcrumbs
                    items={[
                        { label: 'Главная', href: '/' },
                        { label: 'Наши работы', href: '/works' },
                        { label: work.name, href: `/works/${work.url}` },
                    ]}
                />
                <h1 className="flex items-center gap-3">{work.name}</h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {images.map((src, idx) => (
                    <div key={idx} className="h-[180px] overflow-hidden rounded-lg w-full">
                        <Image
                            src={src}
                            alt={`work-${idx}`}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                            width={400}
                            height={200}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
