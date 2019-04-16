import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


class Bodytext extends React.Component{
  render(){
    return(
      <View>
        <Text style={styles.text}>{this.props.children} </Text>
      </View>    
    )
  }    
}

// スタイルシート
const styles = StyleSheet.create({
  text:{
    color: '#DDD',
    backgroundColor: '#eee'
  },   
}) 

export default Bodytext;