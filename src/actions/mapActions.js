import * as actions from './action-types';

export const switchBasemap = (payload) => {

    return {
        type: actions.SWITCH_BASEMAP,
        payload
    };
};

export const storeCrimeData = (payload) => {

    return {
        type: actions.STORE_CRIME_DATA,
        payload
    };
};
