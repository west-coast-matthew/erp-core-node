export declare const mockMenuNavJson: NavItem[];
export type NavItem = {
    type: 'item' | 'group' | 'title';
    name: string;
    to?: string;
    icon?: string;
    items?: NavItem[];
};
export declare const loadMenuConfig: () => Promise<NavItem[]>;
//# sourceMappingURL=menu-service.service.d.ts.map