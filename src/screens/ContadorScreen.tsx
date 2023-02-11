import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
  return (
    <View style={{
        flex:1,
        //backgroundColor: 'red',
        justifyContent:'center'
    }}>
        <Text 
            style={{
                textAlign:'center', 
                fontSize:40, 
                position: 'relative',
                top:-15
            }}>
                Contador: {contador }</Text>
        <Button
            onPress={ ()=> setContador(contador+1)}
            title="Click"
        />
    </View>
  )
}
