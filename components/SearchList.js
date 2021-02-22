import React from 'react';
import { mtnList } from '../shared/mtnList'
import { ListItem } from 'react-native-elements'


const SearchList = ({ navigation, keyword }) => {
  let list = mtnList;

  // const dispatch = useDispatch();

  if(keyword && keyword.length > 1){
    list = list.filter(item => item.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1 )

    return(

      list.map((item, i) => (
        <ListItem 
          containerStyle={{width:"100%"}} 
          key={i} 
          bottomDivider onPress={()=>{
            navigation.navigate('Detail', {id: item.id})
            // dispatch(recentSearch(item.title))
            }}
        >

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