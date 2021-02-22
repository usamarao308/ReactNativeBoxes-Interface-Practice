import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';

import { button,StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { render } from 'react-dom';


export default function App() {
/*
  buttonpressed=(text) =>
  {
    console.log(text);
  }*/
 
  
  return (


    <View style={styles.container}>
      <View style={styles.calculation}>
        
      <Text style={styles.calText}>11*11</Text>
      </View>
      <View style={styles.result}>

        <Text style={styles.resultText}>121</Text>

      </View>
      <View style={styles.buttons} >
      <View style={styles.numbers} >

        <View style={styles.row}>

           <TouchableOpacity /*onPress={this.buttonpressed('7')}*/>
             <Text style={styles.btntext}> 7</Text >
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext} > 8</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}> 9</Text>
            </TouchableOpacity>
          

        </View>
        
        <View style={styles.row}>
           <TouchableOpacity>
             <Text style={styles.btntext}> 4</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}> 5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}> 6</Text>
            </TouchableOpacity>

        </View>
        
        <View style={styles.row}>
           <TouchableOpacity>
             <Text style={styles.btntext}> 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}> 2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}> 3</Text>
            </TouchableOpacity>

        </View>

        <View style={styles.row}>
           <TouchableOpacity>
             <Text style={styles.btntext}> .</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}> 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}>= </Text>
            </TouchableOpacity>

        </View>



      </View>
      <View style={styles.operation} >
            <TouchableOpacity >
             <Text style={styles.btntext}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}> *</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}> -</Text>
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={styles.btntext}> /</Text>
            </TouchableOpacity>

      </View>

      

      </View>
        
    </View>
  );

 

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  result:{
    flex: 1,
    backgroundColor: 'red',
    alignItems:'flex-end',
    alignContent: 'center',
    flexDirection: 'column-reverse',


  },

  resultText:{

    fontSize: 30,
    color:'white',



  },

  calText:{


    fontSize: 40,
    color:'black',

  },

  calculation:{
    flex: 2,
    backgroundColor:'green',
    alignItems:'flex-end',
    flexDirection: 'column-reverse',
    justifyContent: 'space-around',

  },

  buttons:{
 
    flex: 7,
    flexDirection: 'row'

    },

    btntext:{

      fontSize: 50,

    },

  numbers:
  {
    flex: 3,
    backgroundColor: 'yellow',
    flexDirection:'column'
    

  },

  operation:
  {

    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'green',
    
  },

  row:
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'

  },


});
