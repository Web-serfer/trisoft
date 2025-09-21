
import audit from '@assets/images/filtersCards/audit.avif'
import developmentMain from '@assets/images/filtersCards/development-main.avif'
import implementationMain from '@assets/images/filtersCards/implementation-main.avif'
import migration from '@assets/images/filtersCards/migration.avif'
import optimization from '@assets/images/filtersCards/optimization.avif'
import outsourcing from '@assets/images/filtersCards/outsourcing.avif'

export const cases = [
	{
		id: 1,
		title: 'Комплексная автоматизация для "ТехноПром"',
		client: 'ООО "ТехноПром"',
		industry: 'Производство',
		description:
			'Внедрили 1С:ERP для управления производственными процессами, что позволило сократить издержки на 15% и повысить прозрачность учета.',
		tags: ['1С:ERP', 'Производство', 'Автоматизация'],
		image: developmentMain,
		link: '/cases/technoprom',
	},
	{
		id: 2,
		title: 'Оптимизация складского учета для "Логистик-Центр"',
		client: 'АО "Логистик-Центр"',
		industry: 'Логистика',
		description:
			'Перевели складской учет на 1С:WMS, интегрировали с терминалами сбора данных. Скорость приемки и отгрузки товаров выросла на 40%.',
		tags: ['1С:WMS', 'Склад', 'Оптимизация'],
		image: optimization,
		link: '/cases/logistic-center',
	},
	{
		id: 3,
		title: 'Переход на новую версию 1С:Бухгалтерия',
		client: 'Бухгалтерское агентство "Баланс"',
		industry: 'Финансы',
		description:
			'Выполнили безболезненный переход со старой версии 1С на 1С:Бухгалтерия 3.0 с сохранением всех данных и доработок. Обучили сотрудников.',
		tags: ['1С:Бухгалтерия', 'Миграция', 'Обновление'],
		image: migration,
		link: '/cases/balance-agency',
	},
	{
		id: 4,
		title: 'Разработка системы отчетности для "Ритейл Групп"',
		client: 'Сеть магазинов "Ритейл Групп"',
		industry: 'Розничная торговля',
		description:
			'Создали кастомную систему аналитических отчетов на базе 1С:Управление торговлей, которая помогает принимать решения по ассортименту.',
		tags: ['1С:УТ', 'Аналитика', 'Отчетность'],
		image: audit,
		link: '/cases/retail-group',
	},
	{
		id: 5,
		title: 'IT-аутсорсинг и поддержка инфраструктуры 1С',
		client: 'Медицинский центр "Здоровье"',
		industry: 'Здравоохранение',
		description:
			'Взяли на себя полное обслуживание инфраструктуры 1С, включая регулярные обновления, резервное копирование и консультации пользователей.',
		tags: ['1С:Поддержка', 'Аутсорсинг', 'Сопровождение'],
		image: outsourcing,
		link: '/cases/health-center',
	},
	{
		id: 6,
		title: 'Внедрение 1С:Документооборот в "ЮрПрактика"',
		client: 'Юридическая фирма "ЮрПрактика"',
		industry: 'Юриспруденция',
		description:
			'Автоматизировали процессы согласования договоров и внутренней документации. Сроки согласования сократились в 3 раза.',
		tags: ['1С:Документооборот', 'ЭДО', 'Внедрение'],
		image: implementationMain,
		link: '/cases/jurpractice',
	},
]
