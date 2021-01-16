define("/page_modules/index.js", ["react", "/services.js", "/page.js"], (react, services, page) => {
    const h = react.createElement;

    return {
        list: page(h("div", {}, "MODULES LIST MODULE")),
        item: page(h("div", {}, "MODULES ITEM MODULE"))
    }
});