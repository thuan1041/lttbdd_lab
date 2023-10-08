import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lab4_2a from './components/Lab4_2a';
import Lab4_2b from './components/Lab4_2b';
import Lab4_2c from './components/Lab4_2c';
import Tiki_Ok from './components/Tiki_Ok';

export default function App() {
  return (
    <Lab4_2a/>,
    <Lab4_2b/>,
    <Lab4_2c/>,
    <Tiki_Ok/>
  );
}
