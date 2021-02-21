import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { mtnList } from '../shared/mtnList'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const DomesticMtn = ({ navigation }) => {
  const list = mtnList.filter(item => item.id < 6);

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
