import * as actions from '../actions/action-types';

const initialState = {
    geoData: [],
    basemap: "http://c.tile.stamen.com/toner/{z}/{x}/{y}.png"
};

// "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
// "http://c.tile.stamen.com/toner/{z}/{x}/{y}.png"

const mapReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case actions.SWITCH_BASEMAP:
        
            return {
                ...state,
                basemap: action.payload.url
            };
        default:
            return state;
    }
};

export default mapReducer;