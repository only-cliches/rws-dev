define("/page.js", ["react"], (react, services) => {
    const h = react.createElement;

    return (inner) => {
        return h("div", {
            className: "page-container"
        }, inner)
    }
});