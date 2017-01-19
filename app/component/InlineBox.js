import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions
} from 'react-native';

import * as STA from '../Util/static';
import JButton from './JButton';

const width = Dimensions.get('window').width;

const InlineBox = ({gateway, point, fee, meter, openScanner, openCombobox}) =>
    <View>
        <View style={styles.inlineBox}>
            <TextInput
                placeholder='gateway name'
                placeholderTextColor={STA.PLACEHOLDERTEXTCOLOR}
                value={gateway}
                editable={false}
                style={[styles.inputFiled, { width: width / (STA.TEXTSIZE + 0.2) }]}
                onChangeText={text => { gateway_name = text } }
                />
            <JButton
                title={'gateway'}
                times={0.35}
                onPress={() => openCombobox(STA.GATEWAY)}
                />
        </View>
        <View style={styles.inlineBox}>
            <TextInput
                placeholder='point name'
                placeholderTextColor={STA.PLACEHOLDERTEXTCOLOR}
                value={point}
                editable={false}
                style={[styles.inputFiled, { width: width / STA.TEXTSIZE }]}
                onChangeText={text => { point_name = text } }
                />
            <JButton
                title={'point'}
                times={0.25}
                onPress={() => openCombobox(STA.POINT)}
                />
        </View>
        <View style={styles.inlineBox}>
            <TextInput
                placeholder='fee type'
                placeholderTextColor={STA.PLACEHOLDERTEXTCOLOR}
                value={fee}
                editable={false}
                style={[styles.inputFiled, { width: width / STA.TEXTSIZE }]}
                onChangeText={text => { fee_type = text } }
                />
            <JButton
                title={'fee'}
                times={0.25}
                onPress={() => openCombobox(STA.FEE)}
                />
        </View>
        <View style={styles.inlineBox}>
            <TextInput
                placeholder='meter no'
                placeholderTextColor={STA.PLACEHOLDERTEXTCOLOR}
                value={meter}
                editable={false}
                style={[styles.inputFiled, { width: width / STA.TEXTSIZE }]}
                onChangeText={text => { meterno = text } }
                />
            <JButton
                title={'scanner'}
                times={0.25}
                onPress={() => openScanner(STA.METER)}
                />
        </View>
    </View>

const styles = StyleSheet.create({
    inlineBox: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputFiled: {
        //flex:1,
        height: 40,
        width: width,
        padding: 5,
        color: '#666',
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 5,
        textAlign: 'center'
        //marginBottom:10
    }
});

export default InlineBox;

