import { IRestApiContext } from '../types.cjs';

declare function sessionStarted(context: IRestApiContext): Promise<void>;

export { sessionStarted };
