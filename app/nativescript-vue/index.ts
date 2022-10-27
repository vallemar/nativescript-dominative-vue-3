import {Application} from '@nativescript/core';
import {registerComponents} from '@dominative/vue';
import {ComponentPublicInstance} from "@vue/runtime-core";
import {Component, ComputedOptions, MethodOptions, createApp as createAppVue, App as AppVue} from "vue";

export interface App<HostElement = any> extends AppVue<HostElement> {
    mount(): ComponentPublicInstance
    _mount(rootContainer: HostElement | string, isHydrate?: boolean, isSVG?: boolean): ComponentPublicInstance
}

export function createApp(rootComponent: Component<any, any, any, ComputedOptions, MethodOptions>): App<Element> {
    const app = createAppVue(rootComponent) as App;
    registerComponents(app);
    app._mount = app.mount;
    app.mount = (): ComponentPublicInstance => {
        Application.run({
            // @ts-ignore
            create: () => {
                return document;
            },
        });
        return app._mount(document);
    }

    return app;
}