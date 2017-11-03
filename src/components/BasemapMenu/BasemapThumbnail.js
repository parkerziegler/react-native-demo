import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BasemapThumbnail = (props) => {

    return (
        <View>
            <Image source={require('./toner.PNG')} style={styles.thumbnail} />
        </View>
    )
};

const styles = StyleSheet.create({
    thumbnail: {
        height: 100,
        width: 100,
        borderColor: '#FFFFFF',
        borderWidth: 1
    }
});

export default BasemapThumbnail;
