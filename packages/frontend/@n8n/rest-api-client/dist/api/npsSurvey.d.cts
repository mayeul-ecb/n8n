import { NpsSurveyState } from 'n8n-workflow';
import { IRestApiContext } from '../types.cjs';

declare function updateNpsSurveyState(context: IRestApiContext, state: NpsSurveyState): Promise<void>;

export { updateNpsSurveyState };
