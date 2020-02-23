export const subMenuList = [
    {
        title: '介绍',
        route: "/subgroup/alert"
    },
    {
        title: 'Alert',
        route: "/subgroup/alert"
    },
    {
        title: '组件',
        route: "/subgroup/alert",
        children: [
            {
                title: '基础',
                route: "/subgroup/alert",
                children: [
                    {
                        title: 'Alert',
                        route: "/subgroup/alert"
                    },
                    {
                        title: 'Icon',
                        route: "/subgroup/icon"
                    },
                    {
                        title: 'Menu',
                        route: "/subgroup/menu"
                    }
                ]
            },
            {
                title: '时间',
                route: "/subgroup/alert"
            }
        ]
    }
]