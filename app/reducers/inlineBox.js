
const inlineBox = (
    state = {
        checked: null,
        gateway: null,
        point: null,
        fee: null,
        meter: null
    },
    action) => {
    switch (action.type) {
        case 'SET_INPUT_VALUE':
            const text = action.text;
            if (!state.checked) {
                return state;
            }
            let obj;
            switch (state.checked) {
                case 'GATEWAY':
                    obj = { gateway: action.text };
                    break;
                case 'POINT':
                    obj = { point: action.text };
                    break;
                case 'FEE':
                    obj = { fee: action.text };
                    break;
                case 'METER':
                    obj = { meter: action.text };
                    break;
                default:
                    break;
            }
            return Object.assign({}, state, obj);
        case 'OPEN_COMBOBOX': {
            return Object.assign(
                {},
                state,
                {
                    checked: action.checked
                }
            )
        }
        case 'OPEN_SCANNER': {
            return Object.assign(
                {},
                state,
                {
                    checked: action.checked
                }
            )
        }
        default:
            return state;
    }
}

export default inlineBox;