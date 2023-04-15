import {combineReducers} from 'redux'
import subscription from '../../redux/modules/subscription'

const rootReducer = combineReducers({
    //pass all the reducer file
    subscription
})

export default rootReducer