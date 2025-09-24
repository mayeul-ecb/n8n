import { RouteRecordRaw } from 'vue-router';
import { App, Component } from 'vue';

type FrontendExtensionContext = {
    app: App;
    defineRoutes: (routes: RouteRecordRaw[]) => void;
    registerComponent: (name: string, component: Component) => void;
};
type FrontendExtensionSetupFn = (context: FrontendExtensionContext) => void;
type FrontendExtension = {
    setup: FrontendExtensionSetupFn;
};

export type { FrontendExtension, FrontendExtensionContext, FrontendExtensionSetupFn };
