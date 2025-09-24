import { FrontendExtension } from './types.cjs';
import 'vue-router';
import 'vue';

declare function defineFrontendExtension(extension: FrontendExtension): FrontendExtension;

export { defineFrontendExtension };
