import React, { Component } from 'react'
import { ScrollView, View, Dimensions, Image, Animated } from 'react-native'
import { styles } from './Style'

const images = [
  'https://i.pinimg.com/originals/90/b1/74/90b1742ecb6f0992d3132de5c91d17d5.jpg',
  'https://i1.wp.com/www.styledemocracy.com/wp-content/uploads/2017/08/adidas_Originals.jpg?resize=660%2C400&ssl=1'
]

export default class AnimatedHeader extends Component {
  render() {
    return (
      <View style={styles.scrollViewImages}>
        <ScrollView
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: new Animated.Value(0)
                }
              }
            }
          ])}
        >
          {images.map((image, key) => (
            <Image
              key={key}
              source={{
                uri: image
              }}
              style={{
                width: Dimensions.get('window').width
              }}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}
