import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
const width = Dimensions.get('window').width;

const JButton = ({title, times, onPress, ownStyle}) =>
    <TouchableOpacity
        style={[
            styles.btn,
            times && { width: width * times },
            ownStyle && ownStyle
        ]}
        onPress={onPress}
        >
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        height: 36,
        backgroundColor: 'transparent',
        borderRadius: 4,
        borderColor: '#ee735c',
        borderWidth: 2,
        marginRight: 8
    },
    btnText: {
        lineHeight: 18,
        color: '#ee735c',
        textAlign: 'center',
        fontSize: 16
    },
});

export default JButton;

