const initialState = {
    geoData: [],
    basemap: "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
};

// "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
// "http://c.tile.stamen.com/toner/{z}/{x}/{y}.png"

const mapReducer = (state = initialState, action) => {
    
    switch(action.type) {
        default:
            return state;
    }
};

export default mapReducer;