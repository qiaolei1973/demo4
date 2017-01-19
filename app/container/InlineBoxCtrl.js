import { connect } from 'react-redux';
import {Alert} from 'react-native';

import InlineBox from '../component/InlineBox';
import { openScanner, openCombobox, fetchPosts, createItems } from '../actions';
import * as STA from '../Util/static';

const mapStateToProps = (state, ownProps) => {
    state = state.inlineBox;
    return state;
}

const getActionName = (checked) => {
    switch (checked) {
        case (STA.GATEWAY):
            return STA.FIND_GATEWAYS;
        case (STA.POINT):
            return STA.FIND_POINTS;
        case (STA.FEE):
            return STA.FIND_FEES;
        default:
            return;
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openCombobox: (checked) => {
            dispatch(fetchPosts(getActionName(checked), 'access_token='))
                .then((data) => {
                    return dispatch(createItems(data.posts.data, checked));
                })
                .then((v) => {
                    dispatch(openCombobox(checked));
                })
                .catch((err) => {
                    Alert.alert('err:', err);
                });
        },
        openScanner: (checked) => {
            dispatch(openScanner(checked));
        }
    }
}

const InlineBoxCtrl = connect(
    mapStateToProps,
    mapDispatchToProps
)(InlineBox)

export default InlineBoxCtrl;