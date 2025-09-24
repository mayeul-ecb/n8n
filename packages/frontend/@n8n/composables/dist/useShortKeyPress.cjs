"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/useShortKeyPress.ts
var _core = require('@vueuse/core');
var _vue = require('vue');
function useShortKeyPress(key, fn, {
  dedupe = true,
  threshold = 300,
  disabled = false
}) {
  const keyDownTime = _vue.ref.call(void 0, null);
  _core.onKeyDown.call(void 0, 
    key,
    () => {
      if (_vue.unref.call(void 0, disabled)) return;
      keyDownTime.value = Date.now();
    },
    {
      dedupe
    }
  );
  _core.onKeyUp.call(void 0, key, () => {
    if (_vue.unref.call(void 0, disabled) || !keyDownTime.value) return;
    const isShortPress = Date.now() - keyDownTime.value < threshold;
    if (isShortPress) {
      fn();
    }
  });
}


exports.useShortKeyPress = useShortKeyPress;
//# sourceMappingURL=useShortKeyPress.cjs.map