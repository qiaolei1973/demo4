
const signUp = (
    state = {
        modalVisible: false,
        comboboxVisible: false
    },
    action) => {
    switch (action.type) {
        case 'OPEN_SCANNER':
            return Object.assign(
                {},
                state,
                { modalVisible: action.modalVisible }
            )
        case 'CLOSE_SCANNER':
            return Object.assign(
                {},
                state,
                { modalVisible: action.modalVisible }
            )
        case 'OPEN_COMBOBOX': {
            return Object.assign(
                {},
                state,
                { comboboxVisible: action.comboboxVisible }
            )
        }
        case 'CLOSE_COMBOBOX': {
            return Object.assign(
                {},
                state,
                { comboboxVisible: action.comboboxVisible }
            )
        }

        default:
            return state;
    }
}

export default signUp;