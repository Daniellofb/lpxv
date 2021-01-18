import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import * as Font from 'expo-font';

export default class FooterTabsExample extends Component {
  render() {
    return (
      <View style={ styles.bottomView} >
        <Text style={styles.textStyle}>This is Bottom View.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
      bottomView:{
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },
      
      textStyle:{
        color: '#fff',
        fontSize:22
      }
  });
