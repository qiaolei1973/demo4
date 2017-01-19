import { connect } from 'react-redux';
import { Alert } from 'react-native';
import SignUp from '../component/SignUp';
import { closeScanner, setInputValue, fetchPosts } from '../actions';
import * as STA from '../Util/static';

const mapStateToProps = (state, ownProps) => {
    const {gateway, point, fee, meter} = state.inlineBox;
    state = state.signUp;
    return {
        modalVisible: state.modalVisible,
        comboboxVisible: state.comboboxVisible,
        inlineBoxState: { gateway, point, fee, meter }
    }
}

const format2FormData = (obj) => {
    let arr = [];
    for (v in obj) {
        arr.push(v + '=' + obj[v]);
    }
    return arr.join('&');
}

const alertMsg = (data) => {
    let msg = '';
    if (typeof data === 'number')
        msg = 'err:' + data;
    else {
        const status = data.posts.status;
        msg = status === 1 ?
            'success' :
            'fail:' + status;
    }
    Alert.alert('message', msg);
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signUpClick: (param) => {
            param =
                // {
                //     user_name: 1,
                //     user_address_room: 1,
                //     gateway_name: 'WBus',
                //     point_name: 'WBus',
                //     contact_info: 1,
                //     id_card_no: 1,
                //     fee_type: '热表',
                //     meter_no: 693882853009,
                //     submeter_no: 1,
                //     house_area: 1,
                //     house_coefficient: 1,
                //     kq: 1,
                //     kc: 1,
                //     kt: 1,
                //     ka: 1,
                //     operator_account: '',
                //     access_token: ''
                // }
            dispatch(fetchPosts(STA.SIGN_UP, format2FormData(param)))
                .then((data) => alertMsg(data))
                .catch((err) => { console.log('err:',err) });
        }
    }
}

const SignUpCtrl = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp)

export default SignUpCtrl;