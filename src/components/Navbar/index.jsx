// Core
import React from 'react'
import {View, Text} from "react-native";
// Styles
import styles from "./styles";

function Navbar({text}) {
  return(
    <View style={styles.navbarBlock}>
      <Text style={styles.navbarText}>
        {text}
      </Text>
    </View>
  )
}
export default  Navbar
