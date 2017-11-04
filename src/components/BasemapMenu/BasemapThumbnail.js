import React from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { switchBasemap } from '../../actions/mapActions';

const BasemapThumbnail = (props) => {

    const onPressHandler = () => {
        console.log('Parkie-Doo');

        props.dispatch(switchBasemap({ url: props.url }));
    };

    return (
        <View>
            <TouchableOpacity onPress={() => onPressHandler()}>
                <Image style={styles.thumbnail} source={props.source} />
            </TouchableOpacity>
            <Text style={styles.title}>{props.title}</Text>
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
        title: ownProps.title
    };
};

export default connect(mapStateToProps)(BasemapThumbnail);
