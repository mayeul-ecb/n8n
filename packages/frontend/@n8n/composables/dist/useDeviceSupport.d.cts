declare function useDeviceSupport(): {
    userAgent: string;
    isTouchDevice: boolean;
    isAndroidOs: boolean;
    isIOs: boolean;
    isMacOs: boolean;
    isMobileDevice: boolean;
    controlKeyCode: string;
    isCtrlKeyPressed: (e: MouseEvent | KeyboardEvent) => boolean;
};

export { useDeviceSupport };
