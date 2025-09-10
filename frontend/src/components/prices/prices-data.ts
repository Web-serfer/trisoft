export interface Programmer {
  id: string;
  icon: string; // Placeholder for icon path
  title: string;
  subtitle: string;
  experience: string;
  description: string;
  price: string;
  cta: {
    text: string;
    link: string;
  };
}

export const pricesData: Programmer[] = [
  {
    id: 'project-manager',
    icon: 'icon-project-manager.svg', // Placeholder
    title: 'Руководитель проекта',
    subtitle: 'Опыт работы - более 15 лет.',
    experience: 'Опыт работы - более 15 лет.',
    description: 'Управление проектом и командой: разработка бизнес-архитектуры с учётом рисков. Глубокая проработка задач самой высокой сложности.',
    price: '9 000 руб. / час',
    cta: {
      text: 'Обсудить условия',
      link: '/contacts?subject=project-manager',
    },
  },
  {
    id: 'senior-dev',
    icon: 'icon-senior-dev.svg', // Placeholder
    title: 'Старший программист',
    subtitle: 'Опыт работы - более 10 лет.',
    experience: 'Опыт работы - более 10 лет.',
    description: 'Выполнение работ любой сложности в сжатые сроки: чёткое ценообразование, прогнозируемое качество и сроки выполнения работ.',
    price: '6 400 руб. / час',
    cta: {
      text: 'Быстро и качественно',
      link: '/contacts?subject=senior-dev',
    },
  },
  {
    id: 'middle-dev',
    icon: 'icon-middle-dev.svg', // Placeholder
    title: '🥇 Инженер-программист 🥇',
    subtitle: 'Сертифицированный специалист.',
    experience: 'Сертифицированный специалист.',
    description: 'Любой тип задач 1С: разработка, внедрение, интеграция, доработка, настройка, сопровождение, кастомизация. Можно на аутсорс!',
    price: '2 400 — 5 400 руб. / час',
    cta: {
      text: 'Рекомендуемый выбор',
      link: '/contacts?subject=middle-dev',
    },
  },
  // Duplicates for 6 cards
  {
    id: 'project-manager-2',
    icon: 'icon-project-manager.svg', // Placeholder
    title: 'Руководитель проекта',
    subtitle: 'Опыт работы - более 15 лет.',
    experience: 'Опыт работы - более 15 лет.',
    description: 'Управление проектом и командой: разработка бизнес-архитектуры с учётом рисков. Глубокая проработка задач самой высокой сложности.',
    price: '9 000 руб. / час',
    cta: {
      text: 'Обсудить условия',
      link: '/contacts?subject=project-manager-2',
    },
  },
  {
    id: 'senior-dev-2',
    icon: 'icon-senior-dev.svg', // Placeholder
    title: 'Старший программист',
    subtitle: 'Опыт работы - более 10 лет.',
    experience: 'Опыт работы - более 10 лет.',
    description: 'Выполнение работ любой сложности в сжатые сроки: чёткое ценообразование, прогнозируемое качество и сроки выполнения работ.',
    price: '6 400 руб. / час',
    cta: {
      text: 'Быстро и качественно',
      link: '/contacts?subject=senior-dev-2',
    },
  },
  {
    id: 'middle-dev-2',
    icon: 'icon-middle-dev.svg', // Placeholder
    title: '🥇 Инженер-программист 🥇',
    subtitle: 'Сертифицированный специалист.',
    experience: 'Сертифицированный специалист.',
    description: 'Любой тип задач 1С: разработка, внедрение, интеграция, доработка, настройка, сопровождение, кастомизация. Можно на аутсорс!',
    price: '2 400 — 5 400 руб. / час',
    cta: {
      text: 'Рекомендуемый выбор',
      link: '/contacts?subject=middle-dev-2',
    },
  },
];
