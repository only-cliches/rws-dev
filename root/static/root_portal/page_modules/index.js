define("/page_modules/index.js", ["react", "/services.js"], (react, services) => {
    const h = react.createElement;

    return {
        list: h("div", {}, "MODULES LIST MODULE"),
        item: h("div", {}, "MODULES ITEM MODULE")
    }
});