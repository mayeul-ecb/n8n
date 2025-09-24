import { KeyFilter } from '@vueuse/core';
import { MaybeRefOrGetter } from 'vue';

declare function useShortKeyPress(key: KeyFilter, fn: () => void, { dedupe, threshold, disabled, }: {
    dedupe?: boolean;
    threshold?: number;
    disabled?: MaybeRefOrGetter<boolean>;
}): void;

export { useShortKeyPress };
