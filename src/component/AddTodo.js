import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
         if (value.trim()){
             onSubmit(value)
             setValue('')
         } else {
            Alert.alert('Name not a null')
         }
    }
    return (
        <View style={styles.block}>
            <TextInput autoCapitalize='none' autoCorrect={false} placeholder='Input...' value={value} onChangeText={ text => setValue(text)} style={styles.input}  />
            <Button onPress={pressHandler} title='Add' />
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle:'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
})
