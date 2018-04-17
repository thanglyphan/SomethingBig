import { combineReducers } from 'redux'
import auth from './auth'
import location from './location'
import destination from './destination'
import event from './event'
import maincontrol from './maincontrol'

// Combine all the reducers
const rootReducer = combineReducers({
  auth,
  location,
  destination,
  event,
  maincontrol
})

export default rootReducer
