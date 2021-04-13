require([
    "react", 
    "react-dom", 
    "carbon-components-react", 
    "carbon-icons-react", 
    "react-router-dom", 
    "/services.js",
    "/page_websites/index.js",
    "/page_themes/index.js",
    "/page_status/index.js",
    "/page_settings/index.js",
    "/page_security/index.js",
    "/page_modules/index.js",
    "/page_libraries/index.js",
    "/page_apps/index.js",
    "/page.js"
], (
        react, 
        reactDom, 
        carbon, 
        icons, 
        reactRouter, 
        services, 
        page_website, 
        page_themes,
        page_status,
        page_settings,
        page_security,
        page_modules,
        page_libs,
        page_apps,
        page
    ) => {

    const h = react.createElement;

    const HomeTitle = ({icon, title, description, href}) => {

        const history = reactRouter.useHistory();

        return  h(reactRouter.Link, {to: href, className: "home-tiles", style: { backdropFilter: "blur(4px)", "-webkit-backdropFilter": "blur(4px)", display: "inline-block", margin: 10, flexGrow: 1, color: "white"}}, 
            h(carbon.Tile, {href: "#"}, h("div", {style: {minWidth: 280, minHeight: 80, display: "flex", flexDirection: "row", justifyContent: "flex-start"}}, 
                h(icon, {style: {position: "relative", top: "2px"}}),
                h("div", {style: {position: "relative", top: "-2px", marginLeft: 10}}, 
                    h("h4", {}, title),
                    h("span", {}, description)
                )
            )))
    }

    const BreadCrumbs = () => {

        const location = reactRouter.useLocation();

        const history = reactRouter.useHistory();
        
        const path_parts = location.pathname.split("/").filter(item => item && item.length)
        let root = "/";

        const mainNavTitles = {
            apps: "Applications",
            modules: "Modules",
            themes: "Themes",
            libs: "Libraries",
            settings: "Settings",
            accounts: "Accounts",
            websites: "Websites",
            status: "Status",
            security: "Security",
            ecommerce: "Ecommerce",
            support: "Support",
            marketing: "Marketing",
            analytics: "Analyics"
        };


        return h("div", {className: "breadcrumbs"}, 
            h(carbon.Breadcrumb,{noTrailingSlash: false}, 
                h(carbon.BreadcrumbItem, {href: root, onClick: (e) => {
                    e.preventDefault();
                    history.push(e.target.getAttribute("href"));
                }}, "Home"),
                ...path_parts.map((segment, idx) => {
                    root += segment + "/";
                    if (idx == 0 && mainNavTitles[segment]) {
                        segment = mainNavTitles[segment];
                    }
                    return h(carbon.BreadcrumbItem, {href: root, onClick: (e) => {
                        e.preventDefault();
                        history.push(e.target.getAttribute("href"));
                    }}, segment)
                })
            )
        );
    }
    
    const App = () => {

        return h(reactRouter.BrowserRouter, {}, 
            h("div", {className: "container"}, 
                h("div", {className: "header-container", style: {height: "48px"}}, 
                    h(carbon.Header, {"aria-label": "RWS Dev Panel"}, 
                        h(carbon.HeaderName, {href: "#", prefix: "RWS"}, "Root Panel")
                    ),
                ),
                h(BreadCrumbs, {}),
                h("div", {className: "inner-container", style: {maxWidth: "calc(100% - 40px)", margin: "auto", marginTop: 20}}, 
                    h(reactRouter.Switch, {}, 
                        h(reactRouter.Route, {exact: true, path: "/apps"}, page_apps.list),
                        h(reactRouter.Route, {exact: true, path: "/apps/:id"}, page_apps.item),
                        h(reactRouter.Route, {exact: true, path: "/modules"}, page_modules.list),
                        h(reactRouter.Route, {exact: true, path: "/modules/:id"}, page_modules.item),
                        h(reactRouter.Route, {exact: true, path: "/themes"}, page_themes.list),   
                        h(reactRouter.Route, {exact: true, path: "/themes/:id"}, page_themes.item),
                        h(reactRouter.Route, {exact: true, path: "/libs"}, page_libs),    
                        h(reactRouter.Route, {exact: true, path: "/settings"}, page_settings),  
                        h(reactRouter.Route, {exact: true, path: "/websites"}, page_website.list),  
                        h(reactRouter.Route, {exact: true, path: "/websites/:id"}, page_website.item),  
                        h(reactRouter.Route, {exact: true, path: "/status"}, page_status), 
                        h(reactRouter.Route, {exact: true, path: "/security"}, page_security), 
                        h(reactRouter.Route, {exact: true, path: "/accounts"},
                            page(h("div", {}, "Accounts App"))
                        ),   
                        h(reactRouter.Route, {exact: true, path: "/ecommerce"}, 
                            page(h("div", {}, "Ecommerce App"))
                        ),   
                        h(reactRouter.Route, {exact: true, path: "/support"}, 
                            page(h("div", {}, "Support App"))
                        ),   
                        h(reactRouter.Route, {exact: true, path: "/marketing"}, 
                            page(h("div", {}, "Marketing App"))
                        ),  
                        h(reactRouter.Route, {exact: true, path: "/analytics"}, 
                            page(h("div", {}, "Analytics App"))
                        ),    
                        h(reactRouter.Route, {exact: true, path: "/"}, 
                            h("div", {className: "options", style: {display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}, 
                                h(HomeTitle, {
                                    icon: icons.UserAvatar32, 
                                    title: "Clients", 
                                    description: "CRM & Marketing",
                                    href: "/accounts"
                                }),
                                h(HomeTitle, {
                                    icon: icons.Earth32, 
                                    title: "Websites *", 
                                    description: "Adjust Domains & Subdomains",
                                    href: "/websites"
                                }),
                                h(HomeTitle, {
                                    icon: icons.PaintBrush32, 
                                    title: "Themes *", 
                                    description: "Control Panel / Admin Themes",
                                    href: "/themes"
                                }),
                                // h(HomeTitle, { // move to website as subpage
                                //     icon: icons.Application32, 
                                //     title: "Applications *",
                                //     description: "Available Apps & Utilities",
                                //     href: "/apps"
                                // }),
                                // h(HomeTitle, { // move to website as subpage
                                //     icon: icons.Chip32, 
                                //     title: "Modules *",
                                //     description: "Native Backend Modules",
                                //     href: "/modules"
                                // }),
                                h(HomeTitle, {
                                    icon: icons.Plug32, 
                                    title: "Libraries *",
                                    description: "JS Libraries for Apps & Themes",
                                    href: "/libs"
                                }),
                                h(HomeTitle, {
                                    icon: icons.Settings32, 
                                    title: "Settings *",
                                    description: "Configure System Behavior",
                                    href: "/settings"
                                }),
                                h(HomeTitle, {
                                    icon: icons.Stethoscope32, 
                                    title: "Status *",
                                    description: "View System Health & Security",
                                    href: "/status"
                                }),
                                // h(HomeTitle, { // subpage of accounts
                                //     icon: icons.ShoppingBag32, 
                                //     title: "Ecommerce",
                                //     description: "Products, Billing & Invoicing",
                                //     href: "/ecommerce"
                                // }),
                                // h(HomeTitle, { // subpage of accounts
                                //     icon: icons.ServiceDesk32, 
                                //     title: "Support",
                                //     description: "Client Chat & Tickets",
                                //     href: "/support"
                                // }),
                                // h(HomeTitle, { // subpage of accounts
                                //     icon: icons.Chat32, 
                                //     title: "Marketing",
                                //     description: "Client Outreach",
                                //     href: "/marketing"
                                // }),
                                // h(HomeTitle, {
                                //     icon: icons.Analytics32, 
                                //     title: "Analytics",
                                //     description: "Track Activity & Trends",
                                //     href: "/analytics"
                                // })
                            )
                        ),  
                        h(reactRouter.Route, {path: "*"}, h("h2", {}, "Nothing Here (404)"))
                    )
                )
            )    
        )
    }

    reactDom.render(h(App), document.getElementById("app"));
});