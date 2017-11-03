import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BasemapThumbnail from './BasemapThumbnail';

class BasemapMenu extends React.Component {

    render() {

        let sources = ['../../assets/terrain.png', '../../assets/toner.png', '../../assets/watercolor'];

        let basemapThumbnails = sources.map((source, i) => {

            return <BasemapThumbnail source={source} key={i} />
        });

        return (
            <View style={styles.container}>
                <Text style={styles.header}>HEADER</Text>
                {basemapThumbnails}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#000000',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    header: {
        color: '#FFFFFF'
    }
});

export default BasemapMenu;
