import { connect } from 'react-redux';
import { Vibration } from 'react-native';

import Scanner from '../component/Scanner';
import { closeScanner, setInputValue } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        barcodeReceived: (e) => {
            const {data, type} = e;
            if (data) {
                Vibration.vibrate();
            }
            dispatch(closeScanner());
            dispatch(setInputValue(data));
        }
    }
}

const ScannerCtrl = connect(
    mapStateToProps,
    mapDispatchToProps
)(Scanner)

export default ScannerCtrl;