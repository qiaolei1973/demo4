import { connect } from 'react-redux';

import Item from '../component/Item';
import { closeCombobox, setInputValue } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const text = ownProps.text;
    return {
        onItemClick: () => {
            dispatch(closeCombobox());
            dispatch(setInputValue(text));
        }
    }
}

const ItemCtrl = connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)

export default ItemCtrl;