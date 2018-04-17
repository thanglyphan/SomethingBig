const defaultState = {
  event: {}
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'EVENT':
      return {
        ...state,
        event: action.event
      }
    default:
      return state
  }
}
