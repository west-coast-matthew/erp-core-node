import { NavItem } from "@/types/menu-nav-item.type";

/**
 * Perform API call used to retireve menu item contents.
 */
export const loadMenuConfig = async():Promise<NavItem[]>=>{
  const menuCfg = await fetch('/api-base/menu');
  console.log('menu config raw output',menuCfg);
  const menuJson = await menuCfg.json();
  return menuJson as NavItem[];
}