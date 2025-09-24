"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/useDeviceSupport.ts
var _vue = require('vue');
function useDeviceSupport() {
  const isTouchDevice = _vue.ref.call(void 0, 
    window.matchMedia("(any-pointer: coarse)").matches && !window.matchMedia("(any-pointer: fine)").matches
  );
  const userAgent = _vue.ref.call(void 0, navigator.userAgent.toLowerCase());
  const isIOs = _vue.ref.call(void 0, 
    userAgent.value.includes("iphone") || userAgent.value.includes("ipad") || userAgent.value.includes("ipod")
  );
  const isAndroidOs = _vue.ref.call(void 0, userAgent.value.includes("android"));
  const isMacOs = _vue.ref.call(void 0, userAgent.value.includes("macintosh") || isIOs.value);
  const isMobileDevice = _vue.ref.call(void 0, isIOs.value || isAndroidOs.value);
  const controlKeyCode = _vue.ref.call(void 0, isMacOs.value ? "Meta" : "Control");
  function isCtrlKeyPressed(e) {
    if (isMacOs.value) {
      return e.metaKey;
    }
    return e.ctrlKey;
  }
  return {
    userAgent: userAgent.value,
    isTouchDevice: isTouchDevice.value,
    isAndroidOs: isAndroidOs.value,
    isIOs: isIOs.value,
    isMacOs: isMacOs.value,
    isMobileDevice: isMobileDevice.value,
    controlKeyCode: controlKeyCode.value,
    isCtrlKeyPressed
  };
}


exports.useDeviceSupport = useDeviceSupport;
//# sourceMappingURL=useDeviceSupport.cjs.map