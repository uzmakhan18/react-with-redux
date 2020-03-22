import { combineReducers } from 'redux'
import todos from './redux/reducers/todoreducer'
import visibilityFilter from './redux/reducers/filterreducer'


export default combineReducers ({
    todos,
    visibilityFilter
})