
// TODO: Migrate to common API
export const mockMenuNavJson:NavItem[]  = 
[
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
  
]
export type NavItem = {
  type: 'item' | 'group' | 'title'
  name: string
  to?: string
  icon?: string
  items?: NavItem[]
}

export const loadMenuConfig = async():Promise<NavItem[]>=>{
  const menuCfg = await fetch('/api-base/menu');
  console.log('menu config raw output',menuCfg);
  const menuJson = await menuCfg.json();
  return menuJson as NavItem[];
}