import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

export default function App_1a() {
  return (
    <View style={styles.container}>
        <Image style={styles.img_circle} source={require('../assets/circle.png')} />
        <Text style={styles.text_grow} >GROW <br/>YOUR BUSINESS</Text>
        <Text style={styles.textDescription} >We will help you to grow your business using online server</Text>
        
        <View style={styles.btnWrapper}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>SIGNUP</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.textHow} >HOW WE WORK?</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    width:'100%',
    backgroundColor:'#00CCF9',
    backgroundImage:'linear-gradient(rgba(199,244,246,1) 0%, rgba(209,244,246,1) 80%, rgba(0,204,249,1) 100%)',
  },
  img_circle: {
    height:140,
    width:140,
    marginTop:80,
  },
  text_grow:{
    width:189,
    height:58,
    marginTop:100,
    textAlign:'center',
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:25,
    lineHeight:29.3,
    alignItems:'center',
  },  
  textDescription:{
    width:302,
    height:36,
    marginTop:80,
    textAlign:'center',
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:15,
    lineHeight:17.58,
    alignItems:'center',
  },
  btnWrapper: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:302, 
    margin:30,
  },
  btn: {
    display: 'flex',
    justifyContent:'center',
    backgroundColor:'#E3C000',
    width:119,
    height:48,
    borderRadius:10,
  },
  btnText: {
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:20,
    lineHeight:23.44,
    textAlign:'center',
  },
  textHow:{
    width:302,
    height:53,
    marginTop:10,
    textAlign:'center',
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:18,
    lineHeight:21.09,
    alignItems:'center',
  },  
});
