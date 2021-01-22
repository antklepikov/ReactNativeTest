// Core
import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
// Redux
import { Provider } from 'react-redux'
import store from './src/redux/store'
// Components
import Navbar from './src/components/Navbar';
import TodoContainer from './src/components/TodoContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  sidebar: {
    backgroundColor: '#3949ab',
  }
});

function App() {
  return (
    <Provider store={store()}>
      <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor={'#3949ab'} barStyle="dark-content" />
        <Navbar text='Todo App!'/>
        <TodoContainer />
      </SafeAreaView>
    </Provider>

  );
}
export default App
