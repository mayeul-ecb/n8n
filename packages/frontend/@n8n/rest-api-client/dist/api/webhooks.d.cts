import { IHttpRequestMethods } from 'n8n-workflow';
import { IRestApiContext } from '../types.cjs';

type WebhookData = {
    workflowId: string;
    webhookPath: string;
    method: IHttpRequestMethods;
    node: string;
};
declare const findWebhook: (context: IRestApiContext, data: {
    path: string;
    method: string;
}) => Promise<WebhookData | null>;

export { findWebhook };
