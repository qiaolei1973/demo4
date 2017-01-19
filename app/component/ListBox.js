import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView
} from 'react-native';
const width = Dimensions.get('window').width;
import ItemCtrl from '../container/ItemCtrl'

const ListBox = ({items, checked, title}) =>
    <View style={styles.listBox}>
        <ScrollView>
            {
                items.map((item, index) =>
                    <ItemCtrl
                        text={item[title]}
                        key={`${checked}${index}`}
                        />
                )
            }
        </ScrollView>
    </View>

const styles = StyleSheet.create({
    listBox: {
        width: width * 2 / 3,
        borderWidth: 2,
        borderRadius: 4,
        backgroundColor: 'blue',
        opacity: .8,
        maxHeight: 400,
        minHeight: 150
    }
});

export default ListBox;

