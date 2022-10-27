import { registerComponents } from "@dominative/vue";
import { Application } from "@nativescript/core";
import { ComponentPublicInstance } from "@vue/runtime-core";
import {
  App as AppVue,
  Component,
  ComputedOptions,
  createApp as createAppVue,
  MethodOptions,
} from "vue";

export interface App<HostElement = any> extends AppVue<HostElement> {
  mount(): ComponentPublicInstance;
  _mount(
    rootContainer: HostElement | string,
    isHydrate?: boolean,
    isSVG?: boolean
  ): ComponentPublicInstance;
}

export function createApp(
  rootComponent: Component<any, any, any, ComputedOptions, MethodOptions>
): App<Element> {
  const app = createAppVue(rootComponent) as App;
  registerComponents(app);
  app._mount = app.mount;
  app.mount = (): ComponentPublicInstance => {
    Application.run({
      // @ts-ignore
      create: () => {
        // @ts-ignore
        document.documentElement.actionBarHidden = true;
        return document.documentElement;
      },
    });
    return app._mount(document.documentElement);
  };

  return app;
}
