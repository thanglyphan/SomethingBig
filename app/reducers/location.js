const defaultState = {
  region: {
    latitude: '59.9549474',
    longitude: '10.7393271',
    latitudeDelta: '',
    longitudeDelta: ''
  }
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOCATION':
      return {
        ...state,
        region: action.region
      }
    default:
      return state
  }
}
