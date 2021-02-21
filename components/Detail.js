import React from 'react';
import { Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { mtData } from '../shared/mountainList'

import { add, remove, climb, unclimb } from '../redux/actioncreator'
import { useDispatch, useSelector } from 'react-redux'

const Detail = ({ navigation, route }) => {
  const list = mtData;
  const { id } = route.params;
  const dispatch = useDispatch();

  const item = list.filter( item => item.id == id)[0];
  
  const likes = useSelector(state => state.likes);
  const isExistedLike = likes.filter(item => item.id == id).length > 0 ? true : false;

  const flag = useSelector(state => state.flag);
  const isClimbed = flag.filter(item => item.id == id).length > 0 ? true : false;

  console.log('렌더링 난수', Math.random())
  return (
    <View>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Card.Divider/>
          <Card.Image source={{uri: item.image}} />
        <Card.Divider/>
        <Text style=
        {{
          marginBottom: 10,
          marginLeft: 10,
          color: '#000',
          }}>
            {"위치: " + item.location}
        </Text>
        <Text style=
        {{
          marginLeft: 10,
          color: '#000',
          }}>
            {"높이: " + item.height}
        </Text>
        
        {
          isExistedLike ?
          <Icon
            raised
            name='favorite'
            type='material'
            color='#FF3333'
            onPress={() => {
              dispatch(remove(item))
              }}
          />
          :
          <Icon
            raised
            name='favorite-border'
            type='material'
            color='#FF3333'
            onPress={() => {
              console.log('add----->')
              dispatch(add(item))
              }}
          />
        }
        {
          isClimbed ?
          <Icon
            raised
            name='flag'
            type='entypo'
            color='#009900'
            onPress={() => {
              dispatch(unclimb(item))
           }}
          />
          :
          <Icon
            raised
            name='atlassian'
            type='fontisto'
            color='#FFCC00'
            onPress={() => {
              dispatch(climb(item))
           }}
          />
        }
      </Card>
    </View>
    )
}
export default Detail;