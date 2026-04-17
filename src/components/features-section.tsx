import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Эволюционная устойчивость",
    description: "Генетическое разнообразие — главный щит человечества против болезней и изменений среды. Узнайте, как оно формировалось миллионами лет.",
    icon: "brain",
    badge: "Эволюция",
  },
  {
    title: "Популяционная генетика",
    description: "Как гены распределяются между народами и что это говорит о нашей общей истории, миграциях и адаптации.",
    icon: "globe",
    badge: "Наука",
  },
  {
    title: "ДНК и идентичность",
    description: "Разбираем, что геном может рассказать о человеке, и почему 99,9% ДНК у всех людей идентичны.",
    icon: "lock",
    badge: "ДНК",
  },
  {
    title: "Угрозы разнообразию",
    description: "Бутылочные горлышки, инбридинг, вымирание популяций — как потеря разнообразия угрожает нашему будущему.",
    icon: "zap",
    badge: "Риски",
  },
  {
    title: "Биоэтика и геномика",
    description: "Редактирование генома, евгеника прошлого и этика будущего — где проходит граница допустимого?",
    icon: "link",
    badge: "Этика",
  },
  {
    title: "Будущее человечества",
    description: "Как сохранение генетического разнообразия определяет выживаемость нашего вида в условиях климатических и биологических вызовов.",
    icon: "target",
    badge: "Будущее",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что вы узнаете</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Образовательная программа, которая меняет взгляд на природу человека и его место в эволюции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}