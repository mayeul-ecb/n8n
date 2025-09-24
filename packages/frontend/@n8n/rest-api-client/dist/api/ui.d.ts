import { BannerName } from '@n8n/api-types';
import { IRestApiContext } from '../types.js';

declare function dismissBannerPermanently(context: IRestApiContext, data: {
    bannerName: BannerName;
    dismissedBanners: string[];
}): Promise<void>;

export { dismissBannerPermanently };
