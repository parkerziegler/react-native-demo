import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import CustomMapView from './components/Map/CustomMapView';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // point to our reducer to obtain the url
        const { map, navigation } = this.props;
        
        return (
            <View style={styles.container}>
                <CustomMapView provider='PROVIDER_DEFAULT' url={map.basemap}/>
                <View style={styles.layerControl}>
                    <Icon name='layers' size={35} color="#FFF"/>
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
    },
    layerControl: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 50,
        right: 25,
        padding: 5,
        borderRadius: 5
    }
});

const mapStateToProps = (state) => {

    return {
        map: state.mapReducer
    };
};

export default connect(mapStateToProps)(Main);