define("/page_websites/index.js", ["react", "/services.js"], (react, services) => {
    const h = react.createElement;

    return {
        list: h("div", {}, "WEBSITE MODULE LIST"),
        item: h("div", {}, "WEBSITE MODULE ITEM")
    }
});