import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Истоки разнообразия",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Как «выход из Африки» 70 000 лет назад заложил основу генетического разнообразия современного человечества.
            Небольшая группа наших предков несла в себе весь будущий потенциал вида.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Миграции и расселение Homo sapiens
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Эффект основателя и бутылочные горлышки
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Генетические следы древних скрещиваний с неандертальцами
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Разнообразие как защита",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Почему однородные популяции уязвимы к эпидемиям и изменениям климата.
            Генетическое разнообразие — это страховой полис человечества, накопленный за тысячелетия.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Иммунная система и разнообразие генов HLA
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Эпидемии и устойчивость популяций
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Примеры популяций с низким разнообразием
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Геномика будущего",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Как современные технологии секвенирования ДНК открывают новые горизонты в медицине,
            биологии и понимании эволюции. И какие этические вопросы они поднимают.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Персонализированная медицина на основе генома
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              CRISPR и редактирование генома
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Сохранение генетического наследия человечества
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Путь через историю генома</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            От истоков человечества в Африке до вызовов геномики XXI века —
            прослеживаем, как генетическое разнообразие формировало и продолжает формировать нашу судьбу.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
