import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { switchBasemap } from '../../actions/mapActions';

const BasemapThumbnail = (props) => {

    const { source, title, url, navigation, dispatch } = props;

    const onPressHandler = () => {

        dispatch(switchBasemap({ url }));

        navigation.navigate('DrawerClose');
    };

    return (
        <View>
            <TouchableOpacity onPress={() => onPressHandler()}>
                <Image style={styles.thumbnail} source={source} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    thumbnail: {
        height: 100,
        width: 150,
        borderColor: '#FFFFFF',
        borderWidth: 1
    },
    title: {
        color: '#FFFFFF',
        textAlign: 'center'
    }
});

const mapStateToProps = (state, ownProps) => {

    return {
        maps: state.mapReducer,
        source: ownProps.source,
        title: ownProps.title,
        url: ownProps.url
    };
};

export default connect(mapStateToProps)(BasemapThumbnail);
