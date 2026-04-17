import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое генетическое разнообразие простыми словами?",
      answer:
        "Генетическое разнообразие — это различия в ДНК между людьми и популяциями. Чем больше вариаций в геноме, тем лучше вид приспосабливается к новым условиям, болезням и изменениям среды. Это природный механизм выживания.",
    },
    {
      question: "Правда ли, что все люди на 99,9% одинаковы генетически?",
      answer:
        "Да, это так. Все люди на Земле разделяют 99,9% ДНК. Оставшиеся 0,1% и создают всё видимое разнообразие — цвет кожи, предрасположенность к болезням, особенности метаболизма. При этом генетическое разнообразие внутри одной «расы» больше, чем между разными группами.",
    },
    {
      question: "Почему потеря генетического разнообразия опасна?",
      answer:
        "Популяции с низким разнообразием очень уязвимы — одна эпидемия или резкое изменение климата может их уничтожить. Именно это произошло с ирландским картофелем в XIX веке. У людей потеря разнообразия ведёт к росту наследственных болезней и снижению иммунитета.",
    },
    {
      question: "Для кого создан этот образовательный проект?",
      answer:
        "Проект рассчитан на широкую аудиторию: школьников старших классов, студентов биологических и медицинских специальностей, педагогов и всех, кто хочет понять науку о нашем общем наследии. Специальных знаний не требуется.",
    },
    {
      question: "Как редактирование генома связано с разнообразием?",
      answer:
        "Технологии вроде CRISPR позволяют изменять гены. Если их использовать для «улучшения» людей по единым стандартам, это может снизить генетическое разнообразие и создать непредвиденные риски. Это один из ключевых биоэтических вопросов нашего времени.",
    },
    {
      question: "Можно ли изучать материалы в своём темпе?",
      answer:
        "Да, все материалы доступны в удобном формате без привязки к расписанию. Вы можете возвращаться к темам, которые вас интересуют, и изучать их столько, сколько нужно.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на самые популярные вопросы о генетике, разнообразии и нашем образовательном проекте.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}