import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

const Home = ({ navigation }) => {
  const [keyword, setKeyword] = useState("");
  const handleSearch = useCallback((search)=>{
    setKeyword(search);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <SearchBar platform={"android"} containerStyle={{width:'100%'}}
        placeholder="산을 입력하세요"
        onChangeText={handleSearch}
        value={keyword}
      />
      <SearchList navigation={navigation} keyword={keyword}></SearchList>
    </View>

    )
}
export default Home;