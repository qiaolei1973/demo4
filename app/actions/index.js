import * as STA from '../Util/static';
// import {Alert} from 'react-native';

export const openScanner = (checked) => {
    return {
        type: 'OPEN_SCANNER',
        modalVisible: true,
        checked
    }
}

export const closeScanner = () => {
    return {
        type: 'CLOSE_SCANNER',
        modalVisible: false
    }
}

export const openCombobox = (checked) => {
    return {
        type: 'OPEN_COMBOBOX',
        comboboxVisible: true,
        checked
    }
}

export const inlineBoxClick = (checked) => {
    return {
        type: 'INLINE_BOX_CLICK',
        checked
    }
}

export const closeCombobox = () => {
    return {
        type: 'CLOSE_COMBOBOX',
        comboboxVisible: false
    }
}

export const setInputValue = (text) => {
    return {
        type: 'SET_INPUT_VALUE',
        text
    }
}

export const signUpClick = (param) => {
    console.log('param', param)
    return {
        type: 'SIGN_UP_CLICK'
    }
}

export const createItems = (items, checked) => {
    return {
        type: 'CREATE_ITEMS',
        items,
        checked
    }
}

export const requestPosts = (val) => {
    return {
        type: 'REQUEST_POSTS',
        val
    }
}

export const receivePosts = (val, json) => {
    return {
        type: 'RECEIVE_POSTS',
        val,
        posts: json,
        receiveAt: Date.now()
    }
}

export const fetchPosts = (action, param) => {
    return dispatch => {
        const path = STA.URL + action + '.do';
        dispatch(requestPosts(action));
        return fetch(path, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded;"
            },
            body: param
        }
        )
            .then(response => {
                const status = response.status;
                if (status === 200)
                    return response.json();
                else
                    return status;
            })
            .then(json => dispatch(receivePosts(action, json)))
            .catch(err => { console.log('err:',err) });
    }
}