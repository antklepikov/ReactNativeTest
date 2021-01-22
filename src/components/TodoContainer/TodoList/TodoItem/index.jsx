// Core
import React from 'react'
import {View, Text, Button} from 'react-native'
// Redux
import {deleteTodo, doneTodo} from '../../../../redux/slices/todos'
import {useDispatch} from 'react-redux'
// Components
import RNPickerSelect from 'react-native-picker-select';
// Styles
import styles from './styles'

function TodoItem({title, id}) {
  const dispatch = useDispatch()

  const onChange = (value) => {
    if (value === 'done') {
      dispatch(doneTodo(title))
    }
    else {
      dispatch(deleteTodo(title))
    }
  }


  return (
    <View style={styles.item}>
      <View style={styles.itemText}>
        <Text style={{paddingRight: 8}}>{id})</Text>
        <Text>{title}</Text>

      </View>
      <View>
      <RNPickerSelect
        onValueChange={(value) => onChange(value)}
        items={[
          { label: 'Done', value: 'done' },
          { label: 'Delete', value: 'delete' },
        ]}
      />
      </View>
    </View>

  )
}

export default TodoItem
