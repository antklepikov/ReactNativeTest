// Core
import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from "react-native"
// Redux
import {createTodo} from "../../../redux/slices/todos";
import {useDispatch} from "react-redux";
// Libs
import isEmpty from 'lodash/isEmpty'
// Styles
import styles from "./styles";

function AddTodo() {

  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const onPress = () => {
    !isEmpty(todo) &&
    dispatch(createTodo({data: todo}))
    setTodo('')
  }

  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardBlock}
      >
        <TextInput
          style={styles.addInput}
          placeholder='Input your todo'
          paddingLeft={12}
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={onPress}
        >
          <View style={styles.addButtonTextWrapper}>
            <Text style={styles.addButtonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}
export default AddTodo
