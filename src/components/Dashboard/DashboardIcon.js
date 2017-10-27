import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DashboardIcon = (props) => {

    return (
        <View style={styles.buttonContainer}>
            <Icon name={props.name} color="#FFFFFF" size={50} />
            <Text style={styles.buttonText}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: '#FFF'
    },
    buttonText: {
        color: '#FFFFFF'
    }
});

export default DashboardIcon;
