define("/page_themes/index.js", ["react", "/services.js"], (react, services) => {
    const h = react.createElement;

    return {
        list: h("div", {}, "THEME LIST MODULE"),
        item: h("div", {}, "THEME ITEM MODULE")
    }
});