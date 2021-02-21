import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, ListItem, Icon, Tile, Header } from 'react-native-elements'
import { remove } from '../redux/actioncreator'

const Like = ({ navigation }) => {
  const dispatch = useDispatch();

  const likes = useSelector(state => state.likes);
  const flag = useSelector(state => state.flag);

  console.log('===============Like==============')
  console.log('test------>', likes);
  
  
  

  return (
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {

        likes.map((likeItem, i) => (


              <ListItem containerStyle={{width:"100%"}} key={i}>
                <Avatar
                source={{uri: likeItem.image}} 
                // size={70}
                />
                <ListItem.Content>
                  <ListItem.Title>{likeItem.title}</ListItem.Title>
                  <ListItem.Subtitle>{likeItem.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                
                {
                  flag.findIndex(flagItem => flagItem.id == likeItem.id) == -1 ?
                    <Icon
                      name='atlassian'
                      type='fontisto'
                      color='#FFCC00'
                    />
                    :
                    <Icon
                      name='flag'
                      type='entypo'
                      color='#009900'
                    />
                }

                <Icon name='checkmark-outline' type='ionicon' color='#f00' onPress={()=>{dispatch(remove(likeItem))}} />
              </ListItem>
            )
        
        
        )
      }
      {/* {
        likes.map((item, i) => (
            <Tile key={i}
              imageSrc={{uri: item.image}}
              title={item.title}
              contentContainerStyle={{ height: 70 }}
              caption={item.height}
              featured
            >
              <View
                style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
              >
                <Text>Caption</Text>
                <Text>Caption</Text>
              </View>
            </Tile>
        ))
      } */}
      </ScrollView>
    </View>
    )
}
export default Like;