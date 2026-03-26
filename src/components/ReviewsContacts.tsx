import Icon from "@/components/ui/icon";

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

export default function ReviewsContacts() {
  return (
    <>
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
    </>
  );
}
