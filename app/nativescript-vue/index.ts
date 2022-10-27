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
  rootComponent: Component<any, any, any, ComputedOptions, MethodOptions>,
  props?: any
): App<Element> {
  const app = createAppVue(rootComponent, props) as App;
  console.log("createAppcreateAppcreateAppcreateAppcreateAppcreateAppcreateApp")
  registerComponents(app);
  app._mount = app.mount;
  app.mount = (): ComponentPublicInstance => {
    console.log("mountmountmountmountmountmountmountmountmountmountmountmount")


    Application.run({
      // @ts-ignore
      create: () => {

        // @ts-ignore

        document.documentElement.actionBarHidden = true;
        return document;
      },
    });
    return app._mount(document);
  };

  return app;
}
