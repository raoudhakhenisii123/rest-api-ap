import {combineReducers} from 'redux'
import ContactReducer from './contactReducer'

export default combineReducers({contacts: ContactReducer})