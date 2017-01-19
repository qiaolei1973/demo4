import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

const Item = ({text, onItemClick}) =>
    <TouchableOpacity
        style={styles.item}
        onPress={onItemClick}
        >
        <Text style={styles.font}>{text}</Text>
    </TouchableOpacity>

const styles = StyleSheet.create({
    item: {
        height: 36,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 1
    },
    font: {
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        fontWeight: '500'
    }
});

export default Item;

