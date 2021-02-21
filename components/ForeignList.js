import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch  } from 'react-redux';
import { mtData } from '../shared/mountainList'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const ForeignList = ({ navigation }) => {
  const list = mtData.filter(item => item.id > 5);

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
export default ForeignList;

