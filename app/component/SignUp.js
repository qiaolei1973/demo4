
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  Dimensions
} from 'react-native';

import * as STA from '../Util/static';

import ScannerCtrl from '../container/ScannerCtrl';
import JButton from './JButton';

import ListBoxCtrl from '../container/ListBoxCtrl';
import InlineBoxCtrl from '../container/InlineBoxCtrl';

const width = Dimensions.get('window').width;

const SignUp = ({
  modalVisible, comboboxVisible, signUpClick,
  inlineBoxState: {
    gateway,
    point,
    fee,
    meter
  }
}) => {

  const {PLACEHOLDERTEXTCOLOR } = STA;
  let param =
    {
      user_name: null,
      user_address_room: null,
      gateway_name: gateway,
      point_name: point,
      contact_info: null,
      id_card_no: null,
      fee_type: fee,
      meter_no: meter,
      submeter_no: null,
      house_area: null,
      house_coefficient: null,
      kq: null,
      kc: null,
      kt: null,
      ka: null,
      operator: '',
      access_token: ''
    }
  return (
    <ScrollView style={styles.container}>
      <Modal
        // animationType='slide'
        visible={comboboxVisible}
        onRequestClose={() => this.close()}
        transparent={true}
        >
        <View style={styles.mask}>
          <ListBoxCtrl />
        </View>
      </Modal>
      <Modal
        visible={modalVisible}
        onRequestClose={() => this.close()}
        transparent={true}
        >
        <ScannerCtrl />
      </Modal>
      <View style={styles.singupBox}>
        <Text style={styles.title}>用户注册</Text>
        <TextInput
          placeholder='user name'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          onChangeText={text => { param.user_name = text } }
          />
        <TextInput
          placeholder='user address room'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          onChangeText={text => { param.user_address_room = text } }
          />
        <TextInput
          placeholder='contact info'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          keyboardType='numeric'
          onChangeText={text => { param.contact_info = text } }
          />
        <TextInput
          placeholder='submeter no'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          onChangeText={text => { param.submeter_no = text } }
          />
        <TextInput
          placeholder='house area'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          keyboardType='numeric'
          onChangeText={text => { param.house_area = text } }
          />
        <TextInput
          placeholder='house coefficient'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          keyboardType='numeric'
          onChangeText={text => { param.house_coefficient = text } }
          />
        <TextInput
          placeholder='kq'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          keyboardType='numeric'
          onChangeText={text => { param.kq = text } }
          />
        <TextInput
          placeholder='kc'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          keyboardType='numeric'
          onChangeText={text => { param.kc = text } }
          />
        <TextInput
          placeholder='kt'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          keyboardType='numeric'
          onChangeText={text => { param.kt = text } }
          />
        <TextInput
          placeholder='ka'
          placeholderTextColor={PLACEHOLDERTEXTCOLOR}
          style={styles.inputFiled}
          keyboardType='numeric'
          onChangeText={text => { param.ka = text } }
          />
      </View>
      <InlineBoxCtrl />
      <JButton
        title={'注册'}
        ownStyle={{ margin: 10 }}
        onPress={() => signUpClick(param)}
        />
    </ScrollView>
  );
}

SignUp.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  comboboxVisible: PropTypes.bool.isRequired,
}

const styles = StyleSheet.create({
  mask: {
    backgroundColor: 'rgba(0,0,0,.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    paddingTop: 15,
    paddingBottom: 15,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#ee735c',
  },
  inputFiled: {
    height: 40,
    width: width,
    padding: 5,
    color: '#666',
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 5,
    textAlign: 'center'
  }
});

export default SignUp;