import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstSceen from './components/FirstSceen';
import App_1a from './components/App_1a';
import App_1b from './components/App_1b';

export default function App() {
  return (
    <FirstSceen/>,
    <App_1a/>,
    <App_1b/>
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
