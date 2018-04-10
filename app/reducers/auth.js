const defaultState = {
  isLoggedIn: false,
  isGuest: false,
  username: '',
  password: '',
  fullname: '',
  index: 0
}

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        isGuest: action.isGuest,
        username: action.username,
        password: action.password
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        isGuest: false,
        username: '',
        password: ''
      }
    case 'SIGNUP': {
      return {
        ...state,
        isLoggedIn: false,
        username: action.username,
        password: action.password,
        fullname: action.fullname
      }
    }
    default:
      return state
  }
}
