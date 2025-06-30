import { FC } from "react";
import {
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavGroup,
  CNavTitle,
  CSidebarToggler,
  CSidebarBrand,
} from "@coreui/react";

//import { loadMenuConfig } from "@/services/menu-service.service";
import { NavItem } from "@/types/menu-nav-item.type";

//const config: NavItem[] = await loadMenuConfig();

export interface Props {
  handleSidebarToggle: (arg0: boolean) => void;
  toggleSidebar: () => void;
  sidebarShow: boolean;
  menuItems?: NavItem[];
}

const renderNavItems = (menuItems: NavItem[] = []) => {
  return menuItems.map((item, idx) => {
    if (item.type === "title") {
      return <CNavTitle key={idx}>{item.name}</CNavTitle>;
    }

    if (item.type === "item") {
      return (
        <CNavItem key={idx} href={item.to}>
          {item.name}
        </CNavItem>
      );
    }

    if (item.type === "group") {
      return (
        <CNavGroup key={idx} toggler={<>{item.name}</>}>
          {renderNavItems(item.items || [])}
        </CNavGroup>
      );
    }

    return null;
  });
};

export const SideMenu: FC<Props> = ({
  sidebarShow,
  handleSidebarToggle,
  toggleSidebar,
  menuItems = [],
}) => {
  //console.log("api menu config: ", await loadMenuConfig());

  return (
    <div>
      <CSidebar
        position="fixed"
        unfoldable={false}
        visible={sidebarShow}
        onVisibleChange={handleSidebarToggle}
      >
        <CSidebarBrand className="d-md-flex" href={"/"}>
          <span className="h4"></span>
        </CSidebarBrand>
        <CSidebar>
          <CSidebarNav>{renderNavItems(menuItems)}</CSidebarNav>
        </CSidebar>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() => toggleSidebar()}
        />
      </CSidebar>
    </div>
  );
};

//export SideMenu;
