import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BasemapThumbnail from './BasemapThumbnail';
import basemapSources from './constants';

class BasemapMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { navigation } = this.props;

        const basemapThumbnails = basemapSources.map((source) => {

            // destructure basemapSources
            const { path, title, url } = source;

            // return a BasemapThumbnail component for each
            return <BasemapThumbnail source={path} title={title} url={url} key={title} navigation={navigation} />;
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
