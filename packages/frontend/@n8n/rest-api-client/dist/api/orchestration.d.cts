import { IRestApiContext } from '../types.cjs';

declare const sendGetWorkerStatus: (context: IRestApiContext) => Promise<void>;

export { sendGetWorkerStatus };
