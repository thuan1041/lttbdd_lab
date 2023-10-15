import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from './components/Screen_01';
import Screen_02 from './components/Screen_02';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

export default function App() {
    const Stack = createNativeStackNavigator();
    return ( 
        <NavigationContainer>
            <Stack.Navigator initiaRouteName="Screen_01">
                <Stack.Screen name="Screen_01" component={Screen_01} options={{headerShown: false}}  />
                <Stack.Screen name="Screen_02" component={Screen_02} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
