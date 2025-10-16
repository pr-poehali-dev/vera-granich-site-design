import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'bio', label: 'Биография', icon: 'User' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'video', label: 'Видео', icon: 'Video' },
    { id: 'repertoire', label: 'Репертуар', icon: 'Music' },
    { id: 'achievements', label: 'Достижения', icon: 'Award' },
    { id: 'schedule', label: 'Афиша', icon: 'Calendar' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const repertoire = [
    'Калинка-малинка',
    'Во поле берёза стояла',
    'Катюша',
    'Валенки',
    'Ой, мороз, мороз',
  ];

  const achievements = [
    { year: '2024', title: 'Гран-при конкурса "Золотые голоса"', place: 'Москва' },
    { year: '2023', title: 'I место на фестивале "Русская душа"', place: 'Санкт-Петербург' },
    { year: '2023', title: 'Лауреат конкурса "Юные таланты"', place: 'Казань' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-red-50">
      <div 
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/5d6fccc8-23ff-44fd-bf7e-21a2e3a63e55/files/599a5f43-df47-41e1-91c9-1df22e184dc9.jpg')`,
          backgroundSize: '300px',
        }}
      />

      <nav className="relative z-10 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'secondary' : 'ghost'}
                className={`${activeSection === item.id ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' : 'text-white hover:bg-white/20'} flex items-center gap-2`}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon name={item.icon as any} size={20} />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <div className="text-center mb-8">
              <div className="flex justify-center gap-4 mb-6">
                <img 
                  src="https://cdn.poehali.dev/projects/5d6fccc8-23ff-44fd-bf7e-21a2e3a63e55/files/941b7692-1134-4f84-b6ad-eaa4632a41d2.jpg" 
                  alt="kokoshnik" 
                  className="w-16 h-16 object-contain"
                />
                <img 
                  src="https://cdn.poehali.dev/projects/5d6fccc8-23ff-44fd-bf7e-21a2e3a63e55/files/8410229b-88ba-485a-87e6-5e9a7aa2aab8.jpg" 
                  alt="balalaika" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-primary mb-4 drop-shadow-lg">
                ВЕРА ГРАНИЧ
              </h1>
              <p className="text-2xl md:text-3xl text-secondary font-bold mb-6">
                Юная певица • Народный стиль
              </p>
              <div className="relative inline-block">
                <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full border-8 border-primary shadow-2xl flex items-center justify-center mx-auto">
                  <div className="text-6xl">🎤</div>
                </div>
                <div className="absolute -top-4 -right-4 text-6xl animate-bounce">⭐</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 bg-white/90 backdrop-blur border-4 border-primary hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎵</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Народные песни</h3>
                  <p className="text-muted-foreground">Исполняю русские народные песни с душой</p>
                </div>
              </Card>

              <Card className="p-6 bg-white/90 backdrop-blur border-4 border-secondary hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Победы</h3>
                  <p className="text-muted-foreground">Гран-при и лауреат многих конкурсов</p>
                </div>
              </Card>

              <Card className="p-6 bg-white/90 backdrop-blur border-4 border-primary hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎭</div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Выступления</h3>
                  <p className="text-muted-foreground">Концерты и фестивали по всей России</p>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'bio' && (
          <div className="animate-fade-in max-w-3xl mx-auto">
            <Card className="p-8 bg-white/95 backdrop-blur border-4 border-primary">
              <h2 className="text-4xl font-black text-primary mb-6 text-center">Биография</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary">Вера Гранич</strong> — талантливая юная певица, 8 лет. 
                  Начала петь с раннего детства, обожает русскую народную музыку.
                </p>
                <p>
                  Занимается в музыкальной школе, постоянно участвует в конкурсах и фестивалях. 
                  Её яркий голос и артистизм покоряют сердца зрителей.
                </p>
                <p>
                  Мечтает сохранить и развивать традиции русского народного пения, 
                  нести радость людям через песню.
                </p>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-primary mb-8 text-center">Галерея</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden border-4 border-primary hover:shadow-2xl transition-all hover:scale-105">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <p className="text-4xl font-bold text-primary/50">Фото {i}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'video' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-primary mb-8 text-center">Видео выступлений</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden border-4 border-secondary hover:shadow-2xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <Icon name="Play" size={64} className="text-primary" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-primary">Выступление {i}</h3>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'repertoire' && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <Card className="p-8 bg-white/95 backdrop-blur border-4 border-secondary">
              <h2 className="text-4xl font-black text-primary mb-8 text-center">Репертуар</h2>
              <div className="space-y-4">
                {repertoire.map((song, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                    <Icon name="Music" size={24} className="text-primary" />
                    <span className="text-lg font-semibold">{song}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'achievements' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-primary mb-8 text-center">Достижения</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {achievements.map((achievement, idx) => (
                <Card key={idx} className="p-6 bg-white/95 backdrop-blur border-4 border-primary hover:shadow-xl transition-all hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon name="Award" size={48} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-secondary mb-1">{achievement.year}</div>
                      <h3 className="text-xl font-bold text-primary mb-1">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.place}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-black text-primary mb-8 text-center">Афиша</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <Card className="p-6 bg-white/95 backdrop-blur border-4 border-secondary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="Calendar" size={48} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Фестиваль "Русская песня"</h3>
                    <p className="text-muted-foreground mb-2">15 ноября 2024 • 18:00</p>
                    <p className="text-sm">Концертный зал "Россия", Москва</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/95 backdrop-blur border-4 border-secondary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <Icon name="Calendar" size={48} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Концерт "Народные мотивы"</h3>
                    <p className="text-muted-foreground mb-2">2 декабря 2024 • 19:00</p>
                    <p className="text-sm">Дворец культуры, Санкт-Петербург</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <Card className="p-8 bg-white/95 backdrop-blur border-4 border-primary">
              <h2 className="text-4xl font-black text-primary mb-8 text-center">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                  <Icon name="Mail" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground">Email</p>
                    <p className="text-lg">vera.granich@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                  <Icon name="Phone" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground">Телефон</p>
                    <p className="text-lg">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg">
                  <Icon name="Instagram" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground">Instagram</p>
                    <p className="text-lg">@vera.granich</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="relative z-10 bg-primary text-primary-foreground py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div 
            className="h-12 mb-4 bg-contain bg-center bg-no-repeat mx-auto opacity-50"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/projects/5d6fccc8-23ff-44fd-bf7e-21a2e3a63e55/files/599a5f43-df47-41e1-91c9-1df22e184dc9.jpg')`,
              width: '300px',
            }}
          />
          <p className="text-lg font-semibold">© 2024 Вера Гранич. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
