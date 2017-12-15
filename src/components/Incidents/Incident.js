import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

export default class Incident extends Component {

    render() {

        const { beat, type, date } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.address}>{beat} - {moment(date).format("MM-D-YYYY")}</Text>
                <Text style={styles.description}>{type}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    address: {
        color: '#2BBEE0',
        fontSize: 20
    },
    description: {
        fontSize: 14
    }
});
