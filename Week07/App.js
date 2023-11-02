import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";  
import AP_Screen_01 from './components/AP_Screen_01';
import AP_Screen_02 from './components/AP_Screen_02';
import AP_Screen_03 from './components/AP_Screen_03';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AP_Screen_01'>
        <Stack.Screen name = "AP_Screen_01" component={AP_Screen_01} options={{
            headerShown:false}
        }/>
        <Stack.Screen name = "AP_Screen_02" component={AP_Screen_02} options={{
            headerShown:false
          }
        } />
        <Stack.Screen name = "AP_Screen_03" component={AP_Screen_03} options={{headerShown:false}}/>
      </Stack.Navigator>          
    </NavigationContainer>
    // <AP_Screen_02/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
