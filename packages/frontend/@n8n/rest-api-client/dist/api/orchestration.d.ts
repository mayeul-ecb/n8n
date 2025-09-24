import { IRestApiContext } from '../types.js';

declare const sendGetWorkerStatus: (context: IRestApiContext) => Promise<void>;

export { sendGetWorkerStatus };
