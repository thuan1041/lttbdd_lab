import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstSceen from './components/FirstSceen';
import App_1a from './components/App_1a';
import App_1b from './components/App_1b';
import App_1c from './components/App_1c';
import App_1d from './components/App_1d';

export default function App() {
  return (
    <FirstSceen/>,
    <App_1a/>,
    <App_1b/>,
    <App_1c/>,
    <App_1d/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
