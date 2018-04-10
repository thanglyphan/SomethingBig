import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Image, View } from 'react-native-animatable'
import { styles } from './Style'
import color from '../../../assets/color'

export const renderLower = (
  loginSignIn,
  switchSwiper,
  guestLogin,
  btnText,
  altText,
  btnOnClickOneText,
  symbol,
  btnOnClickTwoText
) => {
  return (
    <View style={styles.lower} pointerEvents="box-none">
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => loginSignIn()}
        style={styles.button}
      >
        <Text style={styles.signinText}>{btnText}</Text>
      </TouchableOpacity>
      {btnText == 'Sign in' ? (
        smallTextButton({}, 'Forgot password?', () => console.log('yo'))
      ) : (
        <Text style={styles.textForgotPassword} />
      )}
      {btnText == 'Sign in' ? (
        <View style={styles.lowerTextComponent}>
          <Text style={styles.textBottomThin}>{altText}</Text>
          <TouchableOpacity activeOpacity={1} onPress={() => switchSwiper()}>
            <Text style={styles.textBottomBold}> {btnOnClickOneText}</Text>
          </TouchableOpacity>
          <Text style={styles.textBottomThin}> {symbol} </Text>
          <TouchableOpacity activeOpacity={1} onPress={() => guestLogin()}>
            <Text style={styles.textBottomBold}>{btnOnClickTwoText}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.lowerTextComponent}>
          <Text style={styles.textBottomThin}> {altText} </Text>
          <TouchableOpacity activeOpacity={1} onPress={() => switchSwiper()}>
            <Text style={styles.textBottomBold}>{btnOnClickOneText}</Text>
          </TouchableOpacity>
          <Text style={styles.textBottomThin}> {symbol} </Text>
          <TouchableOpacity activeOpacity={1} onPress={() => guestLogin()}>
            <Text style={styles.textBottomBold}>{btnOnClickTwoText}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export const inputField = (index, placeholder, value, action) => {
  return (
    <View style={styles.inputBox}>
      <Image source={getIcon(index)} style={styles.image} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#FFF"
        value={value}
        onChangeText={text => action(text)}
      />
    </View>
  )
}

export const smallTextButton = (style, text, action) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => action()}
      animation={'zoomIn'}
      style={style}
      delay={300}
      duration={400}
    >
      <Text style={styles.textForgotPassword}>{text}</Text>
    </TouchableOpacity>
  )
}

function getIconUser() {
  return require('../../../assets/images/user.png')
}

function getIconPassword() {
  return require('../../../assets/images/password.png')
}

function getIconFullname() {
  return require('../../../assets/images/fullname.png')
}

function getIcon(index) {
  switch (index) {
    case 1:
      return getIconUser()
    case 2:
      return getIconPassword()
    case 3:
      return getIconFullname()
    default:
      break
  }
}
