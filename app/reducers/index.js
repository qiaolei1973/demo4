import { combineReducers } from "redux";

import signUp from './signUp';
import posts from './posts';
import inlineBox from './inlineBox';
import listBox from './listBox';

const reducers = combineReducers({
    signUp,
    posts,
    inlineBox,
    listBox
})

export default reducers;