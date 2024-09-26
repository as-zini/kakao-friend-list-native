import React from 'react'
import { View } from 'react-native'

//마진을 위한 컴포넌트
const Margin = (props) => {
  return (
    <View style={{height: props.height }}></View>
  )
}

export default Margin