import { combineReducers } from 'redux'
import auth from './auth'
import location from './location'
import destination from './destination'

// Combine all the reducers
const rootReducer = combineReducers({
  auth,
  location,
  destination
})

export default rootReducer
