import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {Font} from 'expo';
import fontawsome from '../../assets/fonts/fa-solid-900.ttf'

class CircleButton extends React.Component{
    state = {
      fontloaded: false,
    }
   async componentWillMount() {
      await  Font.loadAsync({
          FontAwsome: fontawsome,
        });

        this.setState({fontloaded: true});
      }
  render(){
      const {style, color, onPress } = this.props
      let bgColor = '#E31676'
      let textColor = '#fff'
      
      if (color === 'white') {
        bgColor = '#E31676'
        textColor = '#fff'
      }
      return(
          
       <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayCoplor="transparent">
        <View style={[styles.memoAddButton, style, {backgroudColor: bgColor}]}>
          {
            this.state.fontloaded ? (
                <Text style={[styles.memoAddButtonTitle,{color: textColor}]}>
                {this.props.children}
                </Text> 
            ) : null
          }
        </View>
       </TouchableHighlight>   
      )
  }    
}

const styles = StyleSheet.create({
container:{
  width: 48, 
  height: 48,
  position: 'absolute',
  bottom: 150,
  right: 32,
},
memoAddButton: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#E31676',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },memoAddButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    color: '#fff',
  }
})

export default CircleButton;