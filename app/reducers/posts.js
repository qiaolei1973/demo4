
const posts = (state = {
    isFetching: false,
    item: []
}, action) => {
    switch (action.type) {
        case 'REQUEST_POSTS':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'RECEIVE_POSTS':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

export default (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_POSTS':
        case 'REQUEST_POSTS':
            return Object.assign({}, state, {
                [action.val]: posts(state[action.val], action)
            })
        default:
            return state;
    }
}
