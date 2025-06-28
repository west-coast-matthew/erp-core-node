// TODO: Migrate to common API
export const mockMenuNavJson = [
    {
        type: 'title',
        name: 'Main Navigation'
    },
    {
        type: 'item',
        name: 'Dashboard - OLD',
        to: '/dashboard',
        icon: 'cil-speedometer'
    },
    {
        type: 'group',
        name: 'Entity Management',
        icon: 'cil-group',
        items: [
            {
                type: 'item',
                name: 'Users',
                to: '/entity-mgmnt/users',
                icon: 'cil-user'
            },
            {
                type: 'item',
                name: 'Teams',
                to: '/entity-mgmnt/teams',
                icon: 'cil-user'
            }
        ]
    }
];
export const loadMenuConfig = async () => {
    const menuCfg = await fetch('/api-base/menu');
    console.log('menu config raw output', menuCfg);
    const menuJson = await menuCfg.json();
    return menuJson;
};
//# sourceMappingURL=menu-service.service.js.map