// src/useShortKeyPress.ts
import { onKeyDown, onKeyUp } from "@vueuse/core";
import { ref, unref } from "vue";
function useShortKeyPress(key, fn, {
  dedupe = true,
  threshold = 300,
  disabled = false
}) {
  const keyDownTime = ref(null);
  onKeyDown(
    key,
    () => {
      if (unref(disabled)) return;
      keyDownTime.value = Date.now();
    },
    {
      dedupe
    }
  );
  onKeyUp(key, () => {
    if (unref(disabled) || !keyDownTime.value) return;
    const isShortPress = Date.now() - keyDownTime.value < threshold;
    if (isShortPress) {
      fn();
    }
  });
}
export {
  useShortKeyPress
};
//# sourceMappingURL=useShortKeyPress.js.map