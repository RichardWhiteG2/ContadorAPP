import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{
      flex:1,
      //backgroundColor:'red',
      justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 50,
        textAlign: 'center'
      }}>
        Hello, World!</Text>
    </View>
  );
};

export default App;


