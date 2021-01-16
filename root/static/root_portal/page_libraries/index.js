define("/page_libraries/index.js", ["react", "/services.js", "/page.js"], (react, services, page) => {
    const h = react.createElement;

    return page(h("div", {}, "LIBRARY MODULE"))
});