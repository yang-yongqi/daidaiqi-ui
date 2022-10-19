import Mock from 'mockjs';

Mock.mock('/user/getPermissions', {
	code: 200,
	msg: '请求成功',
	data: [
		{
			path: 'dashboard',
			name: 'Dashboard',
			component: 'layout/BlankLayout',
			meta: {
				title: '控制台',
				icon: 'DesktopOutlined',
			},
			children: [
				{
					path: 'console',
					name: 'Console',
					component: 'console/index',
					meta: {
						title: '主控台',
					},
				},
				{
					path: 'monitor',
					name: 'Monitor',
					component: 'monitor/index',
					meta: {
						title: '监控台',
					},
				},
			],
		},
		{
			path: 'system',
			name: 'System',
			component: 'layout/BlankLayout',
			redirect: '/system/menu',
			meta: {
				title: '系统设置',
				icon: 'WindowsOutlined',
			},
			children: [
				{
					path: 'menu',
					name: 'Menu',
					component: 'menu/index',
					meta: {
						title: '菜单管理',
					},
				},
				{
					path: 'role',
					name: 'Role',
					component: 'role/index',
					meta: {
						title: '角色管理',
					},
				},
				{
					path: 'user',
					name: 'User',
					component: 'user/index',
					meta: {
						title: '用户管理',
					},
				},
			],
		},
		{
			path: 'personal',
			name: 'Personal',
			component: 'personal/index',
			meta: {
				title: '个人中心',
				icon: 'UserOutlined',
			},
		},
	],
});

Mock.mock('/user/getUserInfo', {
	code: 200,
	msg: '请求成功',
	data: {
		name: '呆呆奇',
		phone: '18888888888',
		avatar: '',
	},
});
