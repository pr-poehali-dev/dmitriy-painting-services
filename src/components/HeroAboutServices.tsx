import Icon from "@/components/ui/icon";

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

export default function HeroAboutServices() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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
    </>
  );
}
