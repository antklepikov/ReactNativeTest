import React from 'react'
import {View, Text} from "react-native"
// Components
import AddTodo from "./AddTodo";
// Styles
import styles from "./styles";
import TodoList from "./TodoList";


function TodoContainer() {
  return (
    <View style={styles.container}>
      <Text>Container</Text>
      <AddTodo/>
      <TodoList/>
    </View>
  )
}
export default TodoContainer
