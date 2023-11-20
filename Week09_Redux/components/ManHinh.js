import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { View } from 'react-native';
// redux
import store from '../redux/store';
import tang from '../redux/tang';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import giam from '../redux/giam';

function ManHinh({count}) {
    return ( 
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={()=>{
                store.dispatch(giam)
                setCount(store.getState().count)
                console.log(store.getState().count);
                }}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <Text style={styles.text}>{count}</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>{
                store.dispatch(tang)
                setCount(store.getState().count)
                console.log(store.getState().count);
                }}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
        </View>
     );
}

var mapStateToProps = (state) => ({
    count: state.count
})


export default connect(mapStateToProps,null) (ManHinh);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 130,
        margin:50
    }
  });
  