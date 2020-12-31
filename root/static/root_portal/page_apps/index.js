define("/page_apps/index.js", ["react", "/services.js"], (react, services) => {
    const h = react.createElement;

    return {
        list: h("div", {}, "APPS LIST MODULE"),
        item: h("div", {}, "APPS ITEM MODULE")
    }
});