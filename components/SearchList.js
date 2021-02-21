import React from 'react';
import { mtData } from '../shared/mountainList'
import { ListItem } from 'react-native-elements'

const SearchList = ({ navigation, keyword }) => {
  let list = mtData;

  if(keyword && keyword.length > 1){
    list = list.filter(item => item.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1 )

    return(

      list.map((item, i) => (
        <ListItem containerStyle={{width:"100%"}} key={i} bottomDivider onPress={()=>{navigation.navigate('Detail', {id: item.id})}}>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))
      
    )
  } else {
    return (
      <></>
    )
  }
}

export default SearchList;