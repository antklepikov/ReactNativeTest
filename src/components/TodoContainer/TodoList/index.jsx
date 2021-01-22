// Core
import React from 'react'
import {FlatList} from "react-native"
// Redux
import {getTodos} from "../../../redux/selectors/todoSelectors";
import {useSelector} from "react-redux";
// Components
import TodoItem from "./TodoItem";
// Styles
import styles from './styles'


function TodoList() {

  const list = useSelector(getTodos)

  return (
    <FlatList
      style={styles.list}
      data={list}
      renderItem={({item, index}) => (
        <TodoItem title={item} id={index + 1}/>
        )}
      keyExtractor={item => item}
    />
  )
}
export default TodoList
