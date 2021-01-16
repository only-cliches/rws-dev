define("/page_websites/index.js", ["react", "/services.js", "/page.js"], (react, services, page) => {
    const h = react.createElement;

    return {
        list: page(h("div", {}, "WEBSITE MODULE LIST")),
        item: page(h("div", {}, "WEBSITE MODULE ITEM"))
    }
});