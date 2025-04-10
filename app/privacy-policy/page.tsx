import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Политика конфиденциальности | Алювин (Aluwin)',
    description: 'Политика конфиденциальности Алювин (Aluwin)',
};

export default function PrivacyPolicyPage() {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>

            <div className="">
                <div className="prose prose-slate max-w-none">
                    <h2 className="text-2xl font-bold mt-6 mb-4">ООО «Оконный центр «Прогресс»</h2>

                    <h3 className="text-xl font-bold mt-5 mb-3">1. Общие положения</h3>
                    <p>
                        Настоящая Политика конфиденциальности определяет порядок обработки и защиты
                        персональных данных, предоставляемых пользователями на сайте ООО «Оконный
                        центр «Прогресс» (далее — «Компания»), а также меры по обеспечению
                        безопасности таких данных.
                    </p>
                    <p>
                        Используя сайт Компании, пользователь выражает согласие с условиями
                        настоящей Политики.
                    </p>

                    <h3 className="text-xl font-bold mt-5 mb-3">2. Оператор персональных данных</h3>
                    <p>
                        <strong>Наименование:</strong>
                        <br />
                        Общество с ограниченной ответственностью «Оконный центр «Прогресс»
                    </p>
                    <p>
                        <strong>ИНН/КПП:</strong> 5018178410 / 501801001
                        <br />
                        <strong>ОГРН:</strong> 1155018001621
                        <br />
                        <strong>ОКПО:</strong> 01286889
                        <br />
                        <strong>ОКВЭД (основной):</strong> 52.46
                    </p>
                    <p>
                        <strong>Юридический и фактический адрес:</strong>
                        <br />
                        141068, Московская область, г. Королёв, ул. Силикатная, дом 72, помещение 57
                    </p>
                    <p>
                        <strong>E-mail:</strong> info@progresscentr.ru
                    </p>
                    <p>
                        <strong>Генеральный директор:</strong> Баранов Андрей Сергеевич
                    </p>

                    <h3 className="text-xl font-bold mt-5 mb-3">
                        3. Персональные данные, обрабатываемые Компанией
                    </h3>
                    <p>Компания может обрабатывать следующие персональные данные:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Фамилия, имя, отчество</li>
                        <li>Контактный телефон</li>
                        <li>Адрес электронной почты</li>
                        <li>Адрес доставки</li>
                        <li>
                            Иные данные, которые пользователь добровольно предоставляет через формы
                            на сайте
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold mt-5 mb-3">
                        4. Цели обработки персональных данных
                    </h3>
                    <p>Сбор и обработка персональных данных осуществляется с целью:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Обработки заказов и обращений пользователей</li>
                        <li>Оказания услуг и обратной связи</li>
                        <li>
                            Направления уведомлений, писем, предложений (с согласия пользователя)
                        </li>
                        <li>Улучшения работы сайта и качества обслуживания</li>
                        <li>Выполнения требований законодательства РФ</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-5 mb-3">
                        5. Правовые основания обработки данных
                    </h3>
                    <p>Обработка данных осуществляется на основании:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Согласия субъекта персональных данных</li>
                        <li>Договора, стороной которого является субъект</li>
                        <li>Обязанностей, возложенных законодательством Российской Федерации</li>
                        <li>Законных интересов оператора</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-5 mb-3">
                        6. Условия обработки и передачи персональных данных
                    </h3>
                    <p>Компания обязуется:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>
                            Не раскрывать персональные данные третьим лицам без согласия субъекта,
                            за исключением случаев, предусмотренных законодательством
                        </li>
                        <li>Принимать необходимые меры для защиты персональных данных</li>
                        <li>
                            Передавать данные только в случаях, когда это необходимо для выполнения
                            обязательств (например, службе доставки)
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold mt-5 mb-3">
                        7. Срок хранения персональных данных
                    </h3>
                    <p>
                        Персональные данные хранятся в течение срока, необходимого для достижения
                        целей обработки, или в течение срока, установленного законодательством РФ.
                    </p>

                    <h3 className="text-xl font-bold mt-5 mb-3">8. Права пользователя</h3>
                    <p>Пользователь имеет право:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Получать информацию о своих персональных данных</li>
                        <li>Требовать их уточнения, блокировки или удаления</li>
                        <li>Отозвать согласие на обработку</li>
                        <li>Обжаловать действия оператора в Роскомнадзор или в суд</li>
                    </ul>
                    <p>
                        Для реализации своих прав пользователь может направить письменное обращение
                        на электронную почту:
                        <a href="mailto:info@progresscentr.ru" className="text-sky-600 hover:underline">
                            info@progresscentr.ru
                        </a>
                        .
                    </p>

                    <h3 className="text-xl font-bold mt-5 mb-3">
                        9. Использование файлов cookie и аналитики
                    </h3>
                    <p>
                        Сайт может использовать cookie-файлы, а также инструменты веб-аналитики,
                        такие как Яндекс.Метрика и Google Analytics, для сбора обезличенной
                        статистики. Пользователь может отключить cookie в настройках браузера.
                    </p>

                    <h3 className="text-xl font-bold mt-5 mb-3">10. Обновление политики</h3>
                    <p>
                        Компания оставляет за собой право вносить изменения в настоящую Политику без
                        предварительного уведомления. Актуальная редакция всегда доступна на сайте
                        Компании.
                    </p>

                    <p className="mt-6 text-sm text-slate-500">
                        Дата последнего обновления: 07.04.2025
                    </p>
                </div>
            </div>
        </section>
    );
}
