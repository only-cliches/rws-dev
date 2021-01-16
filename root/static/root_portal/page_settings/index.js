define("/page_settings/index.js", ["react", "/services.js", "/page.js"], (react, services, page) => {
    const h = react.createElement;

    return page(h("div", {}, "SETTINGS MODULE"))
});