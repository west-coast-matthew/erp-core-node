/**
 * Wrapper for JSON config data which drives the menu.
 */
 export type NavItem = {
  type: 'item' | 'group' | 'title'
  name: string
  to?: string
  icon?: string
  items?: NavItem[]
}