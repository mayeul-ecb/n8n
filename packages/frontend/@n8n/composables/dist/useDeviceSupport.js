// src/useDeviceSupport.ts
import { ref } from "vue";
function useDeviceSupport() {
  const isTouchDevice = ref(
    window.matchMedia("(any-pointer: coarse)").matches && !window.matchMedia("(any-pointer: fine)").matches
  );
  const userAgent = ref(navigator.userAgent.toLowerCase());
  const isIOs = ref(
    userAgent.value.includes("iphone") || userAgent.value.includes("ipad") || userAgent.value.includes("ipod")
  );
  const isAndroidOs = ref(userAgent.value.includes("android"));
  const isMacOs = ref(userAgent.value.includes("macintosh") || isIOs.value);
  const isMobileDevice = ref(isIOs.value || isAndroidOs.value);
  const controlKeyCode = ref(isMacOs.value ? "Meta" : "Control");
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
export {
  useDeviceSupport
};
//# sourceMappingURL=useDeviceSupport.js.map