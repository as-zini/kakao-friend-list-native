import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MyProfile from './src/Profile';
import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSections from './src/FriendSections';
import FriendList from './src/FriendList';
import { useState } from 'react';
import TabBar from './src/TabBar';
import Profile from './src/Profile';

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow=()=>{
    console.log('clicked Arrow')
    setIsOpened(!isOpened)
  }

  const ItemSeparatorComponent = () => <Margin height={13}/>
  const renderItem = ({item}) => (
    <View >
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
            isMe={false}
          />
    </View>
  )

  const ListHeaderComponent = () => {
    return(
    <View style={{backgroundColor:'white'}}>
      <Header/>
        <Margin height={10}/>
        <Profile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
            isMe={true}
          />
        <Margin height={15}/>
        <Division/>
        <Margin height={12}/>
        <FriendSections
            friendProfileLen={friendProfiles.length}
            onPressArrow={onPressArrow}
            isOpened={isOpened}
        />
        <Margin height={5} />
    </View>
    )
  }


  return(
    <View style={styles.container}>
      <FlatList 
        data={isOpened ? friendProfiles : []}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem }
        //고정을 할 헤더의 인덱스를 넣어주는것(헤더가 하나니까 0)
        stickyHeaderIndices={[0]}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={{paddingHorizontal: 15}}
      />
      <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx}/>
    </View>
  )

  // return (
  //   <SafeAreaProvider>
  //     <View style={{flex: 1, paddingHorizontal: 15}}>
  //       <SafeAreaView >
          
          
  //           <FriendList data={friendProfiles} isOpened={isOpened}/>
          
  //       </SafeAreaView>
  //     </View>
  //     
      
  //   </SafeAreaProvider>
    
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width:'100%',
    paddingHorizontal: 15
  },
});
