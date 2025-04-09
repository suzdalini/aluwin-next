//import { cookies } from 'next/headers';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
// import { ABTestProvider } from '@/components/metrika/ABTestProvider';
import { YandexMetrika } from '@/components/metrika/YandexMetrika';
import Image from 'next/image';
import UtmTracker from '@/components/metrika/UtmTracker';
const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	//const cookieStore = await cookies();
	//const variant = cookieStore.get('ab_variant')?.value || 'A';
	//const variant = 'A';

	return (
		<html lang="ru">
		<head>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
		</head>
		<body className={`${montserrat.variable} antialiased`}>
			<UtmTracker />
			{/* Яндекс.Метрика */}
			<Script id="yandex-metrika" strategy="afterInteractive">
			{`
				(function(m,e,t,r,i,k,a){
				m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
				m[i].l=1*new Date();
				k=e.createElement(t),a=e.getElementsByTagName(t)[0],
				k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
				})
				(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

				ym(${process.env.NEXT_PUBLIC_METRIKA_ID}, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true
				});
			`}
			</Script>

			<noscript>
			<div>
				<Image
				src={`https://mc.yandex.ru/watch/${process.env.NEXT_PUBLIC_METRIKA_ID}`}
				alt=""
				width={1}
				height={1}
				style={{ position: 'absolute', left: '-9999px' }}
				/>
			</div>
			</noscript>

			{/* A/B-провайдер с вариантом из cookie */}
			{/* <ABTestProvider variant={variant}> */}
			<YandexMetrika />

			<div className="sticky top-0 z-50 bg-white">
				<div className="container mx-auto px-5 md:px-0">
				<Header />
				</div>
			</div>

			<div className="h-6"></div>

			<div className="container mx-auto px-5 md:px-0">
				{children}
				<Footer />
			</div>
			{/* </ABTestProvider> */}
		</body>
		</html>
	);
}
