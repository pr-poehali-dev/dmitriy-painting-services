import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Цены", href: "#prices" },
  { label: "Документы", href: "#documents" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Paintbrush",
    title: "Покраска краскопультом",
    desc: "Безвоздушный и пневматический краскопульт. Полный цикл: подготовка, грунт, 2–3 слоя. Скорость в 5–10 раз выше, чем кистью.",
    items: ["Заборы, ворота, навесы", "Беседки, веранды, бытовки", "Детские и спортивные площадки", "Скамейки, урны, качели", "Входные группы подъездов"],
  },
  {
    icon: "Scissors",
    title: "Покос и уход за участком",
    desc: "Триммер, ровно, без проплешин. Уборка поросли и кустарника. Складирование в оговорённое место.",
    items: ["Частные дворы и участки", "Территории УК и ТСЖ", "Спил деревьев до 30 см", "Сбор и складирование скошенного"],
  },
  {
    icon: "HardHat",
    title: "Демонтаж и расчистка",
    desc: "Разбор строений, расчистка после пожара, подготовка площадок под строительство. Убираем за собой полностью.",
    items: ["Деревянные строения", "Сгоревшие конструкции", "Теплицы любого типа", "Заборы и ограждения", "Фундаменты"],
  },
];

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

const REVIEWS = [
  {
    name: "Юлия Романова",
    role: "Управляющий ТСЖ «Центральный»",
    text: "Покрасили все скамейки и урны во дворе. Работали быстро, аккуратно, мусор убрали. Предоставили полный пакет документов для бухгалтерии — акт, чек, договор.",
    stars: 5,
  },
  {
    name: "Алексей Петров",
    role: "Частный заказчик",
    text: "Заросший участок привели в порядок за один день. Дмитрий сначала сделал осмотр, назвал цену — и держал слово. Рекомендую.",
    stars: 5,
  },
  {
    name: "Светлана Кириллова",
    role: "Директор управляющей компании",
    text: "Обратились по демонтажу сгоревшей бани. Три дня — и площадка готова под застройку. Документы, самозанятость — всё официально.",
    stars: 5,
  },
];

const DOCUMENTS = [
  { icon: "FileText", title: "Договор", desc: "Официальный договор на выполнение работ" },
  { icon: "Receipt", title: "Чек", desc: "Чек самозанятого через приложение «Мой налог»" },
  { icon: "ClipboardList", title: "Акт выполненных работ", desc: "Подписывается по завершению объекта" },
  { icon: "Camera", title: "Лист осмотра с фотофиксацией", desc: "Фото до и после работ, прилагается к акту" },
  { icon: "BadgeCheck", title: "Справка о самозанятости", desc: "Официальный документ из ФНС" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePrice, setActivePrice] = useState(0);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="font-body bg-site text-site-text min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-site/95 backdrop-blur border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-gold flex items-center justify-center">
              <div className="w-3 h-3 bg-gold" />
            </div>
            <span className="font-display text-lg tracking-widest text-gold uppercase">МАХ</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm tracking-wider text-muted-text hover:text-gold transition-colors uppercase font-body"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href="tel:89935039859"
            className="hidden lg:flex items-center gap-2 text-gold text-sm tracking-wider font-display"
          >
            <Icon name="Phone" size={15} />
            8 (993) 503-98-59
          </a>

          <button
            className="lg:hidden text-gold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-site border-t border-gold/20 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-sm tracking-wider text-muted-text hover:text-gold transition-colors uppercase"
              >
                {l.label}
              </button>
            ))}
            <a href="tel:89935039859" className="text-gold text-sm tracking-wider">
              8 (993) 503-98-59
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(180,140,60,0.12)_0%,_transparent_60%)]" />
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-body">Первоуральск · Самозанятый · ИНН 661914015077</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6 text-white">
              Дмитрий<br />
              <span className="text-gold">Голубничий</span>
            </h1>

            <p className="text-xl text-muted-text mb-4 font-body leading-relaxed max-w-xl">
              Покраска краскопультом, покос, демонтаж.<br />
              Официально — с договором, актом и чеком.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Самозанятый", "Договор и чек", "Документы для юрлиц", "Бесплатный осмотр"].map((tag) => (
                <span key={tag} className="border border-gold/40 text-gold/80 text-xs tracking-wider px-3 py-1 uppercase font-body">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:89935039859"
                className="inline-flex items-center justify-center gap-2 bg-gold text-site px-8 py-3 text-sm tracking-wider uppercase font-body hover:bg-gold/90 transition-colors"
              >
                <Icon name="Phone" size={16} />
                Позвонить
              </a>
              <button
                onClick={() => scrollTo("#services")}
                className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold px-8 py-3 text-sm tracking-wider uppercase font-body hover:border-gold hover:bg-gold/5 transition-colors"
              >
                Услуги и цены
                <Icon name="ArrowDown" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold text-xs tracking-[0.3em] uppercase">О мастере</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
                Подхожу к делу<br /><span className="text-gold">основательно</span>
              </h2>
              <p className="text-muted-text leading-relaxed mb-6">
                Работаю официально как самозанятый — ИНН 661914015077. Для физических лиц: договор и чек. Для юридических лиц — полный пакет: договор, акты, чеки, лист осмотра с фотофиксацией.
              </p>
              <p className="text-muted-text leading-relaxed mb-8">
                Цену называю честно — только после бесплатного осмотра объекта. Убираю за собой, соблюдаю сроки, не бросаю работу на полпути.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "5–10×", label: "Быстрее кисти" },
                  { val: "100%", label: "Официально" },
                  { val: "0 ₽", label: "Осмотр бесплатно" },
                  { val: "3 дня", label: "Расчистка после пожара" },
                ].map((s) => (
                  <div key={s.label} className="border border-gold/20 p-4">
                    <div className="font-display text-3xl text-gold mb-1">{s.val}</div>
                    <div className="text-xs text-muted-text tracking-wider uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { icon: "ShieldCheck", title: "Официальный статус", desc: "Самозанятый, зарегистрирован в ФНС. ИНН 661914015077" },
                { icon: "FileSignature", title: "Полный пакет для юрлиц", desc: "Договор, акты, чеки, лист осмотра с фотофиксацией" },
                { icon: "Clock", title: "Соблюдаю сроки", desc: "Называю реальные сроки и держу их" },
                { icon: "Trash2", title: "Убираю за собой", desc: "Складываю отходы в оговорённое место" },
                { icon: "Volume2", title: "Соблюдаю закон о тишине", desc: "Работаю в допустимые часы" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start p-4 border border-gold/10 hover:border-gold/30 transition-colors">
                  <div className="mt-0.5 text-gold flex-shrink-0">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div>
                    <div className="font-display text-white text-sm tracking-wider mb-0.5">{item.title}</div>
                    <div className="text-muted-text text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Что делаю</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-16">Услуги</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="border border-gold/20 p-8 hover:border-gold/50 transition-colors group">
                <div className="text-gold mb-6">
                  <Icon name={s.icon} size={32} />
                </div>
                <h3 className="font-display text-xl text-white mb-4 tracking-wide">{s.title}</h3>
                <p className="text-muted-text text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-text">
                      <div className="w-1 h-1 bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                {PRICES[activePrice].rows.map(([obj, unit, price], i) => (
                  <tr
                    key={obj}
                    className="border-b border-gold/10 hover:bg-gold/5 transition-colors"
                  >
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

      {/* REVIEWS */}
      <section id="reviews" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Что говорят клиенты</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-16">Отзывы</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="border border-gold/20 p-8 hover:border-gold/40 transition-colors flex flex-col">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-gold" />
                  ))}
                </div>
                <p className="text-muted-text text-sm leading-relaxed flex-1 mb-6 italic">«{r.text}»</p>
                <div>
                  <div className="font-display text-white tracking-wider text-sm">{r.name}</div>
                  <div className="text-muted-text text-xs mt-1">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Связаться</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-16">Контакты</h2>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              <a
                href="tel:89935039859"
                className="flex items-center gap-5 p-6 border border-gold/20 hover:border-gold/50 transition-colors group"
              >
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-site transition-all flex-shrink-0">
                  <Icon name="Phone" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-text tracking-wider uppercase mb-1">Телефон</div>
                  <div className="font-display text-white text-xl tracking-wide">8 (993) 503-98-59</div>
                </div>
              </a>

              <a
                href="https://vk.com/club234852553"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 border border-gold/20 hover:border-gold/50 transition-colors group"
              >
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-site transition-all flex-shrink-0">
                  <Icon name="Users" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-text tracking-wider uppercase mb-1">Сообщество ВКонтакте</div>
                  <div className="font-display text-white text-lg tracking-wide">vk.com/club234852553</div>
                </div>
              </a>

              <a
                href="https://max.ru/join/dfe20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 border border-gold/20 hover:border-gold/50 transition-colors group"
              >
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-site transition-all flex-shrink-0">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div>
                  <div className="text-xs text-muted-text tracking-wider uppercase mb-1">МАХ группа</div>
                  <div className="font-display text-white text-lg tracking-wide">max.ru/join/dfe20</div>
                  <div className="text-muted-text text-xs mt-1">Фото работ, отчёты, общение</div>
                </div>
              </a>
            </div>

            <div className="border border-gold/20 p-8">
              <h3 className="font-display text-2xl text-white mb-2">Оставьте заявку</h3>
              <p className="text-muted-text text-sm mb-8">Опишите задачу — перезвоню и назначу бесплатный осмотр</p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border border-gold/20 px-4 py-3 text-sm text-white placeholder:text-muted-text focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full bg-transparent border border-gold/20 px-4 py-3 text-sm text-white placeholder:text-muted-text focus:outline-none focus:border-gold/50 transition-colors"
                />
                <textarea
                  placeholder="Опишите задачу"
                  rows={4}
                  className="w-full bg-transparent border border-gold/20 px-4 py-3 text-sm text-white placeholder:text-muted-text focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
                <button className="w-full bg-gold text-site px-8 py-3 text-sm tracking-wider uppercase font-body hover:bg-gold/90 transition-colors">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/20 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-gold flex items-center justify-center">
              <div className="w-2 h-2 bg-gold" />
            </div>
            <span className="font-display text-sm tracking-widest text-gold uppercase">МАХ · Дмитрий Голубничий</span>
          </div>
          <div className="text-muted-text text-xs tracking-wider text-center">
            Самозанятый · ИНН 661914015077 · Первоуральск
          </div>
          <a href="tel:89935039859" className="text-gold text-sm font-display tracking-wider">
            8 (993) 503-98-59
          </a>
        </div>
      </footer>
    </div>
  );
}