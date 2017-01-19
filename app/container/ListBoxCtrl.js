import { connect } from 'react-redux';

import ListBox from '../component/ListBox';
import { closeCombobox, setInputValue } from '../actions'

const formatState = ({items, checked}) => {
    let title;
    switch (checked) {
        case 'GATEWAY':
            items = items.concentrators;
            title = 'concentrator_name';
            break;
        case 'POINT':
            items = items.suppliers;
            title = 'supplier_name';
            break;
        case 'FEE':
            title = 'feeTypeName';
            break;
        default:
            break;
    }
    return {items,checked,title};
}

const mapStateToProps = (state, ownProps) => {
    state = state.listBox;
    return formatState(state);
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

const ListBoxCtrl = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListBox)

export default ListBoxCtrl;