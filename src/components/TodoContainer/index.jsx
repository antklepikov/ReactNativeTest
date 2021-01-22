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
      <Text>Add your tasks</Text>
      <AddTodo/>
      <TodoList/>
    </View>
  )
}
export default TodoContainer
