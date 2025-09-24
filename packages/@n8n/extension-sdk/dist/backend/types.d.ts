type BackendExtensionContext = {
    example?: string;
};
type BackendExtensionSetupFn = (context: BackendExtension) => void;
type BackendExtension = {
    setup: BackendExtensionSetupFn;
};

export type { BackendExtension, BackendExtensionContext, BackendExtensionSetupFn };
