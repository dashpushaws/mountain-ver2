import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Divider  } from 'react-native-elements';

const Classify = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button 
        buttonStyle={{width: '100%', height: '30%'}} 
        onPress={() => {
          navigation.navigate("DomesticList")
        }} 
        title="국내산(山)" 
      />

      {/* <Divider style={{ height:2, backgroundColor: 'black' }} /> */}

      <Button 
        buttonStyle={{width: '100%'}} 
        onPress={() => {
          navigation.navigate("ForeignList")
        }} 
        title="외국산(山)" 
      />
    </View>
    )
}
export default Classify;