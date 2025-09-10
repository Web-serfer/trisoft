export const menus = [
	{
		name: 'Главная',
		url: '/',
	},
	{
		name: 'Услуги',
		url: '/services',
		children: [
			{ name: 'Разработка 1С', url: '/services/development' },
			{ name: 'Внедрение', url: '/services/implementation' },
			{ name: 'Сопровождение', url: '/services/support' },
			{ name: 'Аутсорс/аутстафф', url: '/services/outsource' },
		],
	},
	{
		name: 'Кейсы',
		url: '/cases',
	},
    {
        name: 'Блог',
        url: '/blog',
    },
	{
		name: 'О Компании',
		url: '/about',
	}
]
