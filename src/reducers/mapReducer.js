import * as actions from '../actions/action-types';

const initialState = {
    crimeData: [],
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
        case actions.STORE_CRIME_DATA:
            
            return {
                ...state,
                crimeData: action.payload.crimeData
            };
        default:
            return state;
    }
};

export default mapReducer;