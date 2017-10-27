import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import CustomMapView from './components/Map/CustomMapView';
import DashboardIcon from './components/Dashboard/DashboardIcon';
import dashboardIcons from './constants/dashboardIcons';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // point to our reducer to obtain the url
        const { map } = this.props;

        // map over our dsahboard icons to render them
        let dashboardItems = dashboardIcons.map((icon, i) => {
			return (
				<DashboardIcon name={icon.name} text={icon.text} key={i} />
			);
        });
        
        return (
            <View style={styles.container}>
                <CustomMapView provider='PROVIDER_DEFAULT' url={map.basemap}/>
                <View style={styles.dashboard}>
                    {dashboardItems}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    dashboard: {
        flexDirection: 'row',
        backgroundColor: '#000'
    }
});

const mapStateToProps = (state) => {

    return {
        map: state.mapReducer
    };
};

export default connect(mapStateToProps)(Main);