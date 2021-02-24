import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { mtnList } from '../shared/mtnList'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import api from '../api/list'

const DomesticMtn = ({ navigation }) => {
  console.log('===================== DomesticMtn =====================')
  // const list = mtnList.filter(item => item.id < 6);
  const [list, setList] = useState([])
  const getList = useCallback(async () => {
    console.log('useCallback');
    // console.log(api)
    // console.log(api.list())
    const result = await api.list();
    // console.log(result)
    // console.log(result.data.filter(item => item.id < 6))
    setList(result.data.filter(item => item.id < 6));
  }, [])

  // useEffect(() => {
  //   console.log('useEffect')
  //   getList();
  // }, []) 

  useEffect(() => {
    console.log('useEffect')
    const unsubscribe = navigation.addListener( //useEeffect로 이벤트 리스너 등록
      'focus',
      () => {                   
        console.log('focus')
        getList();
      }
    )
    return unsubscribe;
  }, []) 

  return (
    <View>
      <ScrollView contentContainerStyle={{ flexGrow:1, justifyContent:"center" }}>
        {
          list.map((item, i) => 
            <ListItem key={i} onPress={()=>navigation.navigate("Detail", {id: item.id})}>
              <Avatar source={{uri: item.image}} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        } 
      </ScrollView>
    </View>
  )
}
export default DomesticMtn;
