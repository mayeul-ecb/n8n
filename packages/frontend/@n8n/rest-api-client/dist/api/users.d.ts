import { User, LoginRequestDto, UserUpdateRequestDto, SettingsUpdateRequestDto, PasswordUpdateRequestDto, UsersListFilterDto, UsersList, Role } from '@n8n/api-types';
import { Scope } from '@n8n/permissions';
import { IPersonalizationSurveyAnswersV4, IUserSettings, FeatureFlags } from 'n8n-workflow';
import { IRestApiContext } from '../types.js';

type IPersonalizationSurveyAnswersV1 = {
    codingSkill?: string | null;
    companyIndustry?: string[] | null;
    companySize?: string | null;
    otherCompanyIndustry?: string | null;
    otherWorkArea?: string | null;
    workArea?: string[] | string | null;
};
type IPersonalizationSurveyAnswersV2 = {
    version: 'v2';
    automationGoal?: string | null;
    codingSkill?: string | null;
    companyIndustryExtended?: string[] | null;
    companySize?: string | null;
    companyType?: string | null;
    customerType?: string | null;
    mspFocus?: string[] | null;
    mspFocusOther?: string | null;
    otherAutomationGoal?: string | null;
    otherCompanyIndustryExtended?: string[] | null;
};
type IPersonalizationSurveyAnswersV3 = {
    version: 'v3';
    automationGoal?: string | null;
    otherAutomationGoal?: string | null;
    companyIndustryExtended?: string[] | null;
    otherCompanyIndustryExtended?: string[] | null;
    companySize?: string | null;
    companyType?: string | null;
    automationGoalSm?: string[] | null;
    automationGoalSmOther?: string | null;
    usageModes?: string[] | null;
    email?: string | null;
};
type IPersonalizationLatestVersion = IPersonalizationSurveyAnswersV4;
type IPersonalizationSurveyVersions = IPersonalizationSurveyAnswersV1 | IPersonalizationSurveyAnswersV2 | IPersonalizationSurveyAnswersV3 | IPersonalizationSurveyAnswersV4;
interface IUserResponse extends User {
    globalScopes?: Scope[];
    personalizationAnswers?: IPersonalizationSurveyVersions | null;
    settings?: IUserSettings | null;
}
interface CurrentUserResponse extends IUserResponse {
    featureFlags?: FeatureFlags;
}
interface IUser extends IUserResponse {
    isDefaultUser: boolean;
    isPendingUser: boolean;
    inviteAcceptUrl?: string;
    fullName?: string;
    createdAt?: string;
    mfaEnabled: boolean;
    mfaAuthenticated?: boolean;
}
declare function loginCurrentUser(context: IRestApiContext): Promise<CurrentUserResponse | null>;
declare function login(context: IRestApiContext, params: LoginRequestDto): Promise<CurrentUserResponse>;
declare function logout(context: IRestApiContext): Promise<void>;
declare function setupOwner(context: IRestApiContext, params: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}): Promise<CurrentUserResponse>;
declare function validateSignupToken(context: IRestApiContext, params: {
    inviterId: string;
    inviteeId: string;
}): Promise<{
    inviter: {
        firstName: string;
        lastName: string;
    };
}>;
declare function signup(context: IRestApiContext, params: {
    inviterId: string;
    inviteeId: string;
    firstName: string;
    lastName: string;
    password: string;
}): Promise<CurrentUserResponse>;
declare function sendForgotPasswordEmail(context: IRestApiContext, params: {
    email: string;
}): Promise<void>;
declare function validatePasswordToken(context: IRestApiContext, params: {
    token: string;
}): Promise<void>;
declare function changePassword(context: IRestApiContext, params: {
    token: string;
    password: string;
    mfaCode?: string;
}): Promise<void>;
declare function updateCurrentUser(context: IRestApiContext, params: UserUpdateRequestDto): Promise<IUserResponse>;
declare function updateCurrentUserSettings(context: IRestApiContext, settings: SettingsUpdateRequestDto): Promise<IUserSettings>;
declare function updateOtherUserSettings(context: IRestApiContext, userId: string, settings: SettingsUpdateRequestDto): Promise<IUserSettings>;
declare function updateCurrentUserPassword(context: IRestApiContext, params: PasswordUpdateRequestDto): Promise<void>;
declare function deleteUser(context: IRestApiContext, { id, transferId }: {
    id: string;
    transferId?: string;
}): Promise<void>;
declare function getUsers(context: IRestApiContext, filter?: UsersListFilterDto): Promise<UsersList>;
declare function getInviteLink(context: IRestApiContext, { id }: {
    id: string;
}): Promise<{
    link: string;
}>;
declare function getPasswordResetLink(context: IRestApiContext, { id }: {
    id: string;
}): Promise<{
    link: string;
}>;
declare function submitPersonalizationSurvey(context: IRestApiContext, params: IPersonalizationLatestVersion): Promise<void>;
interface UpdateGlobalRolePayload {
    id: string;
    newRoleName: Role;
}
declare function updateGlobalRole(context: IRestApiContext, { id, newRoleName }: UpdateGlobalRolePayload): Promise<IUserResponse>;

export { type CurrentUserResponse, type IPersonalizationLatestVersion, type IPersonalizationSurveyAnswersV1, type IPersonalizationSurveyAnswersV2, type IPersonalizationSurveyAnswersV3, type IPersonalizationSurveyVersions, type IUser, type IUserResponse, type UpdateGlobalRolePayload, changePassword, deleteUser, getInviteLink, getPasswordResetLink, getUsers, login, loginCurrentUser, logout, sendForgotPasswordEmail, setupOwner, signup, submitPersonalizationSurvey, updateCurrentUser, updateCurrentUserPassword, updateCurrentUserSettings, updateGlobalRole, updateOtherUserSettings, validatePasswordToken, validateSignupToken };
