import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Rocket" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-glow">Космос</h1>
            </div>
            <div className="flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'research', label: 'Исследования', icon: 'Telescope' },
                { id: 'discoveries', label: 'Открытия', icon: 'Sparkles' },
                { id: 'contact', label: 'Контакты', icon: 'Mail' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:bg-muted ${
                    activeSection === item.id ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary/10 to-background"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <p className="text-lg md:text-xl text-secondary font-medium mb-4">
              Открытие звёзд и вселенной, от Настюши, любимой Даше ✨
            </p>
            <div className="inline-block animate-float">
              <Icon name="Orbit" size={80} className="text-primary" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-glow">
              Космос и <span className="text-primary">Человечество</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Исследуйте влияние космоса на развитие цивилизации, открывайте новые горизонты и узнавайте о последних достижениях в освоении Вселенной
            </p>
            <div className="flex gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="text-lg card-glow"
                onClick={() => scrollToSection('research')}
              >
                <Icon name="Telescope" size={20} className="mr-2" />
                Исследования
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg"
                onClick={() => scrollToSection('discoveries')}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Открытия
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="research" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-glow">Исследования</h2>
            <p className="text-xl text-muted-foreground">
              Как космос влияет на развитие человечества и нашу повседневную жизнь
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Моральное влияние',
                description: 'Космос вдохновляет человечество стремиться к великим целям, объединяет нации и расширяет наше понимание места в мироздании',
                icon: 'Heart',
                image: 'https://cdn.poehali.dev/projects/870d82f3-fa76-4a31-9715-ea63a86975d5/files/fffbb410-c8c0-4173-a633-79870298655f.jpg'
              },
              {
                title: 'Технологический прогресс',
                description: 'Космические исследования дают миру GPS, спутниковую связь, медицинские технологии и материалы нового поколения',
                icon: 'Cpu',
                image: 'https://cdn.poehali.dev/projects/870d82f3-fa76-4a31-9715-ea63a86975d5/files/9e0ab454-e2d2-451e-aa91-444d54ac14c0.jpg'
              },
              {
                title: 'Философское осмысление',
                description: 'Взгляд на Землю из космоса изменил наше восприятие планеты как единого хрупкого дома для всего человечества',
                icon: 'Brain',
                image: 'https://cdn.poehali.dev/projects/870d82f3-fa76-4a31-9715-ea63a86975d5/files/f2d835a6-274b-46c0-ac0e-2fd5bf321fc4.jpg'
              },
              {
                title: 'Научные открытия',
                description: 'Космос помогает понять происхождение Вселенной, законы физики и возможность существования жизни за пределами Земли',
                icon: 'Atom',
                image: 'https://cdn.poehali.dev/projects/870d82f3-fa76-4a31-9715-ea63a86975d5/files/fffbb410-c8c0-4173-a633-79870298655f.jpg'
              },
              {
                title: 'Экономическая польза',
                description: 'Космическая индустрия создает рабочие места, стимулирует инновации и открывает новые рынки для коммерческого использования',
                icon: 'TrendingUp',
                image: 'https://cdn.poehali.dev/projects/870d82f3-fa76-4a31-9715-ea63a86975d5/files/9e0ab454-e2d2-451e-aa91-444d54ac14c0.jpg'
              },
              {
                title: 'Будущее человечества',
                description: 'Освоение космоса — это страховка от глобальных катастроф и возможность стать межпланетной цивилизацией',
                icon: 'Rocket',
                image: 'https://cdn.poehali.dev/projects/870d82f3-fa76-4a31-9715-ea63a86975d5/files/f2d835a6-274b-46c0-ac0e-2fd5bf321fc4.jpg'
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:scale-105 transition-all duration-300 card-glow hover:shadow-2xl group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="discoveries" className="min-h-screen py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-glow">Открытия</h2>
            <p className="text-xl text-muted-foreground">
              Ключевые достижения человечества в освоении космоса
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                year: '1961',
                title: 'Первый человек в космосе',
                description: 'Юрий Гагарин совершил первый пилотируемый полет в космос, открыв эру космонавтики',
                icon: 'User'
              },
              {
                year: '1969',
                title: 'Высадка на Луну',
                description: 'Нил Армстронг и Базз Олдрин стали первыми людьми, ступившими на поверхность другого небесного тела',
                icon: 'Moon'
              },
              {
                year: '1990',
                title: 'Телескоп Хаббл',
                description: 'Запуск космического телескопа революционизировал астрономию, позволив увидеть Вселенную с невиданной четкостью',
                icon: 'Eye'
              },
              {
                year: '1998',
                title: 'МКС',
                description: 'Начало строительства Международной космической станции — символа международного сотрудничества',
                icon: 'Building'
              },
              {
                year: '2020',
                title: 'Коммерческая космонавтика',
                description: 'SpaceX начала регулярные пилотируемые полеты, открыв эру частной космонавтики',
                icon: 'Zap'
              },
              {
                year: '2024',
                title: 'Программа Артемида',
                description: 'Подготовка к возвращению человека на Луну и созданию постоянной базы',
                icon: 'Flag'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-8 items-start group hover:translate-x-4 transition-transform duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center card-glow">
                    <Icon name={item.icon} size={40} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-bold text-primary mb-2">{item.year}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-20 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-glow">Контакты</h2>
              <p className="text-xl text-muted-foreground">
                Есть вопросы о космосе? Напишите нам!
              </p>
            </div>
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
                <CardDescription>
                  Мы ответим на все ваши вопросы о космических исследованиях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите, что вас интересует..."
                      className="bg-background min-h-[150px]"
                    />
                  </div>
                  <Button size="lg" className="w-full card-glow">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Rocket" size={20} className="text-primary" />
            <span>© 2024 Космос и Человечество. Создано с любовью к Вселенной</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;