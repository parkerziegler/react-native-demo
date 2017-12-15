import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Incident from './Incident';

class IncidentContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    renderItem = ({ item }) => {
        console.log(item);
        return <Incident beat={item.zone_beat} type={item.initial_type_description} date={item.event_clearance_date} />
    };

    render() {

        const { crimeData } = this.props.maps;

        return (
            <FlatList data={crimeData.slice(0, 20)}
                    renderItem={(incident) => this.renderItem(incident)} keyExtractor={(item, index) => index} />
            // <View><Text>Howdy!</Text></View>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        maps: state.mapReducer
    };
};

export default connect(mapStateToProps)(IncidentContainer);
