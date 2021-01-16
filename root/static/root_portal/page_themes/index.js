define("/page_themes/index.js", ["react", "/services.js", "/page.js"], (react, services, page) => {
    const h = react.createElement;

    return {
        list: page(h("div", {}, "THEME LIST MODULE")),
        item: page(h("div", {}, "THEME ITEM MODULE"))
    }
});