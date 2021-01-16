define("/page_apps/index.js", ["react", "/services.js", "/page.js"], (react, services, page) => {
    const h = react.createElement;

    return {
        list: page(h("div", {}, "APPS LIST MODULE")),
        item: page(h("div", {}, "APPS ITEM MODULE"))
    }
});