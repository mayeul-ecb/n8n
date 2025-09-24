import { IRestApiContext } from '../types.js';

declare function sessionStarted(context: IRestApiContext): Promise<void>;

export { sessionStarted };
