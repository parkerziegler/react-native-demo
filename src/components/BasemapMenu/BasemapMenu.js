import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BasemapThumbnail from './BasemapThumbnail';

class BasemapMenu extends React.Component {

    render() {

        let sources = [{path: require('./toner.png'), title: 'Toner', url: "http://c.tile.stamen.com/toner/{z}/{x}/{y}.png"}, {path: require('./terrain.png'), title: 'Terrain', url: "http://c.tile.stamen.com/terrain/{z}/{x}/{y}.png"}, {path: require('./watercolor.png'), title: 'Watercolor', url: "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.png"}];

        let basemapThumbnails = sources.map((source, i) => {

            return <BasemapThumbnail source={source.path} title={source.title} url={source.url} key={i} />
        });

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Basemaps</Text>
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
        color: '#FFFFFF',
        fontSize: 20
    }
});

export default BasemapMenu;
