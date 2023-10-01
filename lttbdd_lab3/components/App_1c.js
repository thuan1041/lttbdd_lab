import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-web';

export default function App_1c() {
  return (
    <View style={styles.container}>
        <Text style={styles.textCode} >CODE</Text>
        <Text style={styles.textVerification} >VERIFICATION</Text>
        <Text style={styles.textDescription} >Enter ontime password sent on
++849092605798</Text>
        <View style={styles.verifyWrapper}>
            <TouchableOpacity style={styles.inputVerify}>
                <TextInput style={styles.inputCode} />
                <TextInput style={styles.inputCode} />
                <TextInput style={styles.inputCode} />
                <TextInput style={styles.inputCode} />
                <TextInput style={styles.inputCode} />
                <TextInput style={styles.inputCode} />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnVerify}>
            <Text style={styles.textVerify}>Verify Code</Text>
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
  textCode: {
    height:70,
    width:154,
    marginTop:80,
    textAlign:'center',
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:60,
    lineHeight:70.31,
    alignItems:'center',
  },
  textVerification:{
    width:302,
    height:53,
    marginTop:50,
    textAlign:'center',
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:20,
    lineHeight:23.44,
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
  verifyWrapper: {
    width:300,
    height:50,
    marginTop:10,
    borderColor: '#000',
    borderStyle:'soid',
    borderWidth:1,
  },
  inputCode: {
    height:50,
    width:50,
    borderStyle:'soid',
    borderWidth:1,
  },
  inputVerify:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  btnVerify:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:305,
    height:45,
    backgroundColor:'#E3C000',
    marginTop:50,
  },
  textVerify:{
    width:111,
    height:21,
    textAlign:'center',
    fontWeight:700,
    fontFamily:'Roboto',
    fontSize:18,
    lineHeight:21.09,
    alignItems:'center',
  }
});
