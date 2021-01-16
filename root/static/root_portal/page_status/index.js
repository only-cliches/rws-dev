define("/page_status/index.js", ["react", "/services.js", "/page.js"], (react, services, page) => {
    const h = react.createElement;

    return page(h("div", {}, "STATUS MODULE"))
});