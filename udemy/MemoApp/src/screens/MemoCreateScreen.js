import React from 'react';
import { StyleSheet, View , Text, TextInput} from 'react-native';
import firebase from 'firebase';
import CircleButton from '../elements/CircleButton'

class MemoCreateScreen extends React.Component {
  state = {
    body: '',  
  }

//   () => {this.props.navigation.goBack()}

  handleSave(){
    const {params} = this.props.navigation.state;
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
    .then((docRef)=>{
      console.log(docRef)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  render(){
      return(
       <View style={styles.container}>
         <TextInput 
           style={styles.memoEditTnput} 
           multiline 
           value={this.state.body} 
           onChangeText={(text) =>{this.setState({body: text});}}/>
          <CircleButton onPress={this.handleSave.bind(this)}> 
            {'\uf00c'}
         </CircleButton>
       </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
  },
  memoEditInput:{
    flex:1,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom:16,
    fontSize:16,
  },
})

export default MemoCreateScreen;