// client side code for rendering

import * as React from "react";

const add_component = (name: string, callback: (domNode: any, settings: any, location: any, runtime: any) => Promise<void>) => {};

const add_multipage_component = (name: string, callback: (domNode: any, settings: any, location: any, runtime: any) => Promise<void>) => {};

const add_action = (name: string, callback: any) => {};

const add_filter = (name: string, callback: any) => {};

add_component("my-component", async (domNode, settings, location, runtime) => {
    const child = await settings.template_hooks.main(intoThisDomNode);
});

add_action("page_load", () => {

});

add_filter("page_load", () => {

});

// client side code for rendering


const register_component = (name: string, options: {
    title: string,
    description: string,
    keywords: string[],
    author: string,
    template_hooks: {
        name: string,
        description: string,
        multi_page: boolean
    }[]
}, callback: (domNode: any, settings: any, updateSettings: () => void) => void) => {
    
};

const add_multipage_component = (name: string, callback: (domNode: any, settings: any, location: any, runtime: any) => void) => {};

const add_action = (name: string, callback: any) => {};

const add_filter = (name: string, callback: any) => {};

register_component("my_component", {

}, () => {

});

add_action("page_load", () => {

});

add_filter("page_load", () => {

});