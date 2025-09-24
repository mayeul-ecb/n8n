import { MessageEventBusDestinationOptions } from 'n8n-workflow';
import { IRestApiContext } from '../types.js';

type ApiMessageEventBusDestinationOptions = MessageEventBusDestinationOptions & {
    id: string;
};
declare function hasDestinationId(destination: MessageEventBusDestinationOptions): destination is ApiMessageEventBusDestinationOptions;
declare function saveDestinationToDb(context: IRestApiContext, destination: ApiMessageEventBusDestinationOptions, subscribedEvents?: string[]): Promise<unknown>;
declare function deleteDestinationFromDb(context: IRestApiContext, destinationId: string): Promise<unknown>;
declare function sendTestMessageToDestination(context: IRestApiContext, destination: ApiMessageEventBusDestinationOptions): Promise<boolean>;
declare function getEventNamesFromBackend(context: IRestApiContext): Promise<string[]>;
declare function getDestinationsFromBackend(context: IRestApiContext): Promise<MessageEventBusDestinationOptions[]>;

export { type ApiMessageEventBusDestinationOptions, deleteDestinationFromDb, getDestinationsFromBackend, getEventNamesFromBackend, hasDestinationId, saveDestinationToDb, sendTestMessageToDestination };
