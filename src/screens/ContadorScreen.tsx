import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
        <Text 
            style={styles.title}>
                Contador: {contador }</Text>
        {/* <Button
            onPress={ ()=> setContador(contador+1)}
            title="Click"
            /> */}
        <TouchableOpacity
            onPress={() => setContador(contador + 1)}
        >
            <View style={ styles.botonIncrementar}>
                <Text>Click me !!</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
        container:{
        flex:1,
        //backgroundColor: 'red',
        justifyContent:'center'
    },
    title:{
        textAlign:'center', 
        fontSize:40, 
        position: 'relative',
        top:-15
    },
    botonIncrementar:{
        backgroundColor:'red',
        borderRadius: 100
    }
})