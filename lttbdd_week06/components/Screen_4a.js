import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

function Screen_4a() {
  return (
    <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image style={styles.imgHeader} source={require("../assets/ant-design_arrow-left-outlined.png")}></Image>
          <Text style={styles.headerTxt}>Chat</Text>
          <Image style={styles.imgHeader}></Image>
        </View>
        <View style={styles.bodyWrapper}></View>
        <View style={styles.footerWrapper}></View>
    </View>
  );  
}   
export default Screen_4a;
const styles = StyleSheet.create({
  container: {
    flex:1,
    display:"flex",
    flexDirection:'column',
    width:"100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrapper:{

  },
  imgHeader:{
    width:24,
    height:24
  },
  bodyWrapper:{

  },
  footerWrapper:{

  },
});
