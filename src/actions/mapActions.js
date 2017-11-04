import { SWITCH_BASEMAP } from './action-types';

export const switchBasemap = (payload) => {

    return {
        type: SWITCH_BASEMAP,
        payload
    };
};
