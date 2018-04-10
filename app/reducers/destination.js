const defaultState = {
  toDestination: {
    latitude: null,
    longitude: null
  }
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'DESTINATION':
      return {
        ...state,
        toDestination: action.toDestination
      }
    default:
      return state
  }
}
