// Core
import React from 'react'
import {View, Text, Button} from 'react-native'
// Redux
import {deleteTodo} from '../../../../redux/slices/todos'
import {useDispatch} from 'react-redux'
import {SafeAreaView} from "react-native-web";
// Styles
// import styles from './styles'

function TodoItem({title, id}) {
  const dispatch = useDispatch()

  const onPress = (title) => (
    dispatch(deleteTodo(title))
  )

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'red',
      paddingHorizontal: 15,
    }}>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Button
        // color='red'
        title='Delete'
        onPress={() => onPress(title)}
      />
    </View>
  )
}

export default TodoItem
