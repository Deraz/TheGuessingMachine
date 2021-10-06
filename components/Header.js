import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const Header = props => {

    return (
        <View style = {styles.header}>
            <Text style= {styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: colors.primary,
        height: 100,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.header,
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 2,
        fontFamily: 'open-sans-bold'
    }
});

export default Header;