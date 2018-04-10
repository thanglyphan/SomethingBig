export const login = (username, password, isGuest) => {
  return {
    type: 'LOGIN',
    isGuest: isGuest,
    username: username,
    password: password
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const signup = (username, password, fullname) => {
  return {
    type: 'SIGNUP',
    username: username,
    password: password,
    fullname: fullname
  }
}
