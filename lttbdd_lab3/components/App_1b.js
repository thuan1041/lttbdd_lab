import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

export default function App_1b() {
  return (
    <View style={styles.container}>
        <Image style={styles.imgLock} source={require('../assets/Vectorlock.png')} />
        <Text style={styles.textForget} >FORGET<br/>PASSWORD</Text>
        <Text style={styles.textDescription} >Provide your accounts email for which you want to reset your password</Text>
        <View style={styles.mailWrapper}>
            <TouchableOpacity style={styles.btnMail}>
                <Image style={styles.IconMail} source={require('../assets/mail.png')} />
                <Text style={styles.textMail}>Email</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnNext}>
            <Text style={styles.textNext}>Next</Text>
        </TouchableOpacity>
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
  imgLock: {
    height:117,
    width:105,
    marginTop:80,
  },
  textForget:{
    width:158,
    height:100,
    marginTop:50,
    textAlign:'center',
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:25,
    lineHeight:29.3,
    alignItems:'center',
  },  
  textDescription:{
    width:302,
    height:53,
    marginTop:5,
    textAlign:'center',
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:15,
    lineHeight:17.58,
    alignItems:'center',
  },
  mailWrapper: {
    backgroundColor:'#C4C4C4',
    width:305,
    height:45,
    marginTop:10,
  },
  btnMail:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  IconMail: {
    width:48,
    height:45,
  },
  textMail: {
    width:38,
    height:18,
  },
  btnNext:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:305,
    height:45,
    backgroundColor:'#E3C000',
    marginTop:50,
  },
  textNext:{
    width:46,
    height:21,
    textAlign:'center',
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:18,
    lineHeight:21.09,
    alignItems:'center',
  }
});
