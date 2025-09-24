import { FrontendExtension } from './types.js';
import 'vue-router';
import 'vue';

declare function defineFrontendExtension(extension: FrontendExtension): FrontendExtension;

export { defineFrontendExtension };
