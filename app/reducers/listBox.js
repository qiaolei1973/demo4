
const signUp = (
    state = {
        items: [],
        checked:null
    },
    action) => {
    switch (action.type) {
        case 'CREATE_ITEMS':
            return ({
                items: action.items,
                checked: action.checked
            })
        default:
            return state;
    }
}

export default signUp;