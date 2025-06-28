import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { CSidebar, CSidebarNav, CNavItem, CNavGroup, CNavTitle, CSidebarToggler, CSidebarBrand, } from "@coreui/react";
import { loadMenuConfig, } from "../../services/menu-service.service";
const config = await loadMenuConfig();
console.log("config", config);
const renderNavItems = (items) => {
    return items.map((item, idx) => {
        if (item.type === "title") {
            return _jsx(CNavTitle, { children: item.name }, idx);
        }
        if (item.type === "item") {
            return (_jsx(CNavItem, { href: item.to, children: item.name }, idx));
        }
        if (item.type === "group") {
            return (_jsx(CNavGroup, { toggler: _jsx(_Fragment, { children: item.name }), children: renderNavItems(item.items || []) }, idx));
        }
        return null;
    });
};
const SideMenu = ({ sidebarShow, handleSidebarToggle, toggleSidebar, }) => {
    //console.log("api menu config: ", await loadMenuConfig());
    return (_jsx("div", { children: _jsxs(CSidebar, { position: "fixed", unfoldable: false, visible: sidebarShow, onVisibleChange: handleSidebarToggle, children: [_jsx(CSidebarBrand, { className: "d-md-flex", href: "/", children: _jsx("span", { className: "h4" }) }), _jsx(CSidebar, { children: _jsx(CSidebarNav, { children: renderNavItems(config) }) }), _jsx(CSidebarToggler, { className: "d-none d-lg-flex", onClick: () => toggleSidebar() })] }) }));
};
export default SideMenu;
//# sourceMappingURL=SideMenu.js.map