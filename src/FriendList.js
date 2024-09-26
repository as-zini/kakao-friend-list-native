import React from 'react'
import { ScrollView } from 'react-native'
import Profile from './Profile'

const FriendList = (props) => {
  return props.isOpened ? (
    <ScrollView>
      {props.data.map((item, index) => (
        <Profile
          key={index}
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
        />
      ))}
    </ScrollView>
  )
  : null;
}

export default FriendList