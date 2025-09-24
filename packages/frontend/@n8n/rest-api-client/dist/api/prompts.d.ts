interface N8nPrompts {
    message?: string;
    title?: string;
    showContactPrompt?: boolean;
}
interface N8nPromptResponse {
    updated: boolean;
}
declare function getPromptsData(instanceId: string, userId: string): Promise<N8nPrompts>;
declare function submitContactInfo(instanceId: string, userId: string, email: string): Promise<N8nPromptResponse>;

export { type N8nPromptResponse, type N8nPrompts, getPromptsData, submitContactInfo };
