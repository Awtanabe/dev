import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import CircleButton from '../elements/CircleButton'
class MemoDetailScreen extends React.Component{
    render(){
        return(
         <View style={styles.container}>
           <View>
            <View style={styles.memoHeader}>
              <View>
              <Text style={styles.memoeHeaderTitle}>講座のアイディア</Text>
              <Text style={styles.memoeHeaderDate}>2018/11/1</Text>
              </View>
            </View>
           </View>
           
           <View style={styles.memoContent}>
            <Text>
                講座のアイディア
            </Text>
           </View>
           <CircleButton color="white"style={styles.editButton} onPress={()=> {this.props.navigation.navigate('MemoEdit')}}>
            {'\uf303'}
           </CircleButton>
         </View>
        )
    }
  }

  const styles = StyleSheet.create({
   container: {
     flex: 1,
     width: '100%',
   },
   memoHeader: {
     padding: 10,
     height: 100,
     backgroundColor: '#17313C',
     justifyContent: 'center',
   },
   memoeHeaderTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 4,
    },memoeHeaderDate: {
        fontSize: 12,
      color: '#fff',
    },memoContent:{
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      backgroundColor: '#ddd',
      flex: 1,
    },editButton: {
       top: 75,
    }
  })

//  editButton　style={[styles.memoAddButton, style]}>

  export default MemoDetailScreen;


　