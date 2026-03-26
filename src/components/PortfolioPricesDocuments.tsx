import { useState } from "react";
import Icon from "@/components/ui/icon";

const PRICES = [
  {
    category: "Покраска",
    rows: [
      ["Сплошные поверхности (забор, фасад)", "м²", "от 200 ₽"],
      ["Решётчатые заборы, ворота", "м²", "от 250 ₽"],
      ["Ограждение клумбы", "пог. м", "от 500 ₽"],
      ["Скамейка парковая", "шт.", "от 1 500 ₽"],
      ["Урна металлическая", "шт.", "от 800 ₽"],
      ["Качели садовые", "шт.", "2 000 – 6 000 ₽"],
      ["Беседка / веранда", "шт.", "6 000 – 18 000 ₽"],
      ["Бытовка / хозблок", "шт.", "5 000 – 12 000 ₽"],
      ["Турник / брусья", "шт.", "от 1 500 ₽"],
    ],
  },
  {
    category: "Демонтаж",
    rows: [
      ["Старое строение (дерево)", "м²", "от 400 ₽"],
      ["Сгоревшее строение", "м²", "от 700 ₽"],
      ["Фундамент", "м³", "от 1 200 ₽"],
      ["Забор / ограждение", "пог. м", "от 300 ₽"],
      ["Теплица (поликарбонат)", "шт.", "4 000 – 10 000 ₽"],
      ["Теплица (стекло / плёнка)", "шт.", "3 000 – 6 000 ₽"],
    ],
  },
  {
    category: "Покос и спил",
    rows: [
      ["Покос травы (газон, участок)", "сотка", "от 500 ₽"],
      ["Покос травы (запущенный)", "сотка", "от 800 ₽"],
      ["Спил небольшого дерева (до 30 см)", "шт.", "от 1 500 ₽"],
      ["Сбор и складирование скошенного", "участок", "от 1 000 ₽"],
    ],
  },
];

const PORTFOLIO = [
  {
    img: "https://cdn.poehali.dev/projects/0fff86fb-f807-43dc-899e-73cb3ab5594f/bucket/680f0f94-81a9-42d8-93f1-0260c70a02e2.jpg",
    title: "Демонтаж после пожара — в работе",
    tag: "Демонтаж",
  },
  {
    img: "https://cdn.poehali.dev/projects/0fff86fb-f807-43dc-899e-73cb3ab5594f/bucket/4f4ed591-a153-4503-94d2-8bc0d2daf8a1.jpg",
    title: "Расчистка и сортировка материалов",
    tag: "Демонтаж",
  },
  {
    img: "https://cdn.poehali.dev/projects/0fff86fb-f807-43dc-899e-73cb3ab5594f/bucket/34492606-01d1-43b7-b9e1-d456480e6208.jpg",
    title: "Площадка готова под застройку",
    tag: "Демонтаж",
  },
  {
    img: "https://cdn.poehali.dev/projects/0fff86fb-f807-43dc-899e-73cb3ab5594f/bucket/356fbb3e-2277-4022-86b0-19aef7ea339a.png",
    title: "Покраска деревянной бытовки",
    tag: "Покраска",
  },
  {
    img: "https://cdn.poehali.dev/projects/0fff86fb-f807-43dc-899e-73cb3ab5594f/bucket/01e9db91-d255-40c4-9714-8bcaa4b64322.png",
    title: "Покраска беседки для детской площадки",
    tag: "Покраска",
  },
];

const DOCUMENTS = [
  { icon: "FileText", title: "Договор", desc: "Официальный договор на выполнение работ" },
  { icon: "Receipt", title: "Чек", desc: "Чек самозанятого через приложение «Мой налог»" },
  { icon: "ClipboardList", title: "Акт выполненных работ", desc: "Подписывается по завершению объекта" },
  { icon: "Camera", title: "Лист осмотра с фотофиксацией", desc: "Фото до и после работ, прилагается к акту" },
  { icon: "BadgeCheck", title: "Справка о самозанятости", desc: "Официальный документ из ФНС" },
];

export default function PortfolioPricesDocuments() {
  const [activePrice, setActivePrice] = useState(0);

  return (
    <>
      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Реальные работы</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-16">Портфолио</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO.map((p) => (
              <div key={p.title} className="group relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-site/90 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-gold text-xs tracking-wider uppercase border border-gold/40 px-2 py-0.5 mb-2 inline-block">
                    {p.tag}
                  </span>
                  <div className="font-display text-white text-base leading-snug">{p.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://vk.com/club234852553"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gold/40 text-gold px-8 py-3 text-sm tracking-wider uppercase font-body hover:border-gold hover:bg-gold/5 transition-colors"
            >
              Больше работ во ВКонтакте
              <Icon name="ExternalLink" size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Прайс-лист 2026</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Цены</h2>
          <p className="text-muted-text mb-10 text-sm">Точная цена — после бесплатного осмотра объекта</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {PRICES.map((p, i) => (
              <button
                key={p.category}
                onClick={() => setActivePrice(i)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-all font-body border ${
                  activePrice === i
                    ? "bg-gold text-site border-gold"
                    : "border-gold/30 text-muted-text hover:border-gold/60 hover:text-gold"
                }`}
              >
                {p.category}
              </button>
            ))}
          </div>

          <div className="border border-gold/20 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gold/10 border-b border-gold/20">
                  <th className="text-left px-6 py-3 text-xs tracking-wider text-gold uppercase font-body font-normal">Объект</th>
                  <th className="text-left px-6 py-3 text-xs tracking-wider text-gold uppercase font-body font-normal hidden sm:table-cell">Ед.</th>
                  <th className="text-right px-6 py-3 text-xs tracking-wider text-gold uppercase font-body font-normal">Цена</th>
                </tr>
              </thead>
              <tbody>
                {PRICES[activePrice].rows.map(([obj, unit, price]) => (
                  <tr key={obj} className="border-b border-gold/10 hover:bg-gold/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-white">{obj}</td>
                    <td className="px-6 py-4 text-sm text-muted-text hidden sm:table-cell">{unit}</td>
                    <td className="px-6 py-4 text-sm text-gold text-right font-display tracking-wide">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 border border-gold/20 bg-gold/5 flex items-start gap-3">
            <Icon name="Info" size={16} className="text-gold mt-0.5 flex-shrink-0" />
            <p className="text-muted-text text-sm">
              Указаны ориентировочные цены. Финальная стоимость определяется после бесплатного осмотра. Детский игровой комплекс — по договорённости.
            </p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section id="documents" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Для юридических лиц</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Документы</h2>
          <p className="text-muted-text mb-12 text-sm max-w-xl">
            Работаем официально. Все документы предоставляются по запросу и прилагаются к актам выполненных работ.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {DOCUMENTS.map((d) => (
              <div key={d.title} className="flex gap-4 items-start p-6 border border-gold/20 hover:border-gold/40 transition-colors">
                <div className="text-gold flex-shrink-0">
                  <Icon name={d.icon} size={22} />
                </div>
                <div>
                  <div className="font-display text-white text-sm tracking-wider mb-1">{d.title}</div>
                  <div className="text-muted-text text-xs leading-relaxed">{d.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Лист осмотра */}
          <div className="border border-gold/30 mb-6">
            <div className="bg-gold/10 border-b border-gold/20 px-6 py-4 flex items-center gap-3">
              <Icon name="ClipboardCheck" size={20} className="text-gold" />
              <span className="font-display text-white tracking-wider">Лист осмотра объекта</span>
              <span className="ml-auto text-gold/60 text-xs tracking-wider uppercase">Заполняется на месте</span>
            </div>
            <div className="p-6 grid sm:grid-cols-2 gap-8">
              <div>
                <div className="text-gold text-xs tracking-[0.2em] uppercase mb-4 font-body">1. Описание работ</div>
                <div className="space-y-2">
                  {[
                    "Удаление плесени / грибка",
                    "Антисептическая обработка",
                    "Грунтовка",
                    "Покраска (указать кол-во слоёв)",
                    "Подготовка поверхности (очистка, шлифовка)",
                    "Шпаклёвка (при необходимости)",
                  ].map((w) => (
                    <div key={w} className="flex items-center gap-3 text-sm text-muted-text">
                      <div className="w-4 h-4 border border-gold/30 flex-shrink-0" />
                      {w}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-gold text-xs tracking-[0.2em] uppercase mb-4 font-body">2. Стоимость работ</div>
                <div className="space-y-2">
                  {[
                    ["Подготовка поверхности", ""],
                    ["Обработка антисептиком", ""],
                    ["Покраска (1 слой)", ""],
                    ["Покраска (2 слой)", ""],
                    ["Удаление плесени", ""],
                    ["Выезд и осмотр", "бесплатно"],
                  ].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between text-sm border-b border-gold/10 pb-1">
                      <span className="text-muted-text">{label}</span>
                      <span className="text-gold font-display tracking-wider">{val || "_______ ₽"}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gold/30 pt-3">
                  <span className="text-white font-display tracking-wider">Итого</span>
                  <span className="text-gold font-display text-lg tracking-wider">_______ ₽</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gold/20 px-6 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <div className="text-muted-text text-xs">
                Гарантия на выполненные работы: <span className="text-gold">12 месяцев</span> · Мастер: Дмитрий Голубничий · ИНН 661914015077
              </div>
              <a
                href="https://vk.com/club234852553"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:ml-auto inline-flex items-center gap-2 border border-gold/40 text-gold px-5 py-2 text-xs tracking-wider uppercase font-body hover:border-gold hover:bg-gold/5 transition-colors whitespace-nowrap"
              >
                <Icon name="Download" size={13} />
                Скачать бланк
              </a>
            </div>
          </div>

          <div className="p-6 border border-gold/30 bg-gold/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Icon name="FolderOpen" size={24} className="text-gold flex-shrink-0" />
            <div>
              <div className="font-display text-white tracking-wider mb-1">Все документы в открытом доступе</div>
              <div className="text-muted-text text-sm">Прайс-лист, лист осмотра, справка о самозанятости — в альбоме сообщества ВКонтакте</div>
            </div>
            <a
              href="https://vk.com/club234852553"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:ml-auto inline-flex items-center gap-2 border border-gold/40 text-gold px-6 py-2 text-sm tracking-wider uppercase font-body hover:border-gold hover:bg-gold/5 transition-colors whitespace-nowrap"
            >
              Открыть альбом
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
