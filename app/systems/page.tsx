import Image from 'next/image';
import Systems from '@/components/Systems';
import { products } from '@/data/products';
import FormFooter from '@/components/Form/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
    return {
        title: 'Профильные системы Alutech | Окна, двери, фасады Alutech',
        description: 'Производство алюминиевых окон, дверей, порталов и фасадов из профиля Alutech. Типовые и нестандартные решения для любых объектов. Бесплатный расчёт.',
    };
};

export default function SystemsPage() {
    return (
        <>
            <div className="">
                <Breadcrumbs
                    items={[
                        { label: 'Главная', href: '/' },
                        { label: 'Профильные системы', href: '/systems' },
                    ]}
                />

                <h1 className="text-3xl font-bold mb-8">Профильные системы Alutech</h1>

                <div className="grid lg:grid-cols-2 gap-5 text-black/80">
                    <p className="text-xl mb-3 lg:mb-0">
                        «АЛЮТЕХ» предлагает широкий ассортимент алюминиевых профильных систем для
                        реализации типовых и нестандартных архитектурных решений для объектов
                        различного функционального назначения.
                    </p>
                    <p className="text-xl">
                        Мы производим следующий спектр изделий из профиля Алютех: окна, двери,
                        порталы, фасады, витражи, интерьерные решения.
                    </p>
                </div>

                {/* divider */}
                <div className="h-16"></div>
                {/* divider */}

                <Systems />

                {/* divider */}
                <div className="h-16"></div>
                {/* divider */}

                <h2 className="text-3xl font-bold mb-8">Что мы производим из профиля Алютех:</h2>

                <div className="grid lg:grid-cols-3 gap-5">
                    {products.map((product) => (
                        <div
                            key={product.title}
                            className="rounded-xl bg-white shadow-2xl shadow-slate-200"
                        >
                            <div className="overflow-hidden h-[250px]">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMG}${product.img}`}
                                    alt={product.title}
                                    className="rounded-t-xl object-cover w-full"
                                    width={400}
                                    height={250}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            <div className="p-6">
                                <div className="text-xl font-bold mb-2">{product.title}</div>
                                <div className="text-slate-600 text-sm">{product.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* divider */}
            <div className="h-16"></div>
            {/* divider */}

            <FormFooter />
        </>
    );
}
