import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

  
function AP_Screen_03({navigation, route}) {
    const {nameTxt} = route.params;
    return ( 
        <View style={styles.container}>
            <View style={styles.navigationWrapper} >
                <TouchableOpacity style={styles.preImg} onPress={()=>{
                    navigation.navigate('AP_Screen_02',{nameTxt})
                }} >
                    <Image style={styles.preImg} source={require("../assets/Icon Button 11.png")}></Image>
                </TouchableOpacity>
                <View style={styles.headerWrapper}>
                    <Image style={styles.imgHeader} source={require("../assets/Frame_Avt.png")}></Image>
                    <View style={{marginLeft:20}}>
                        <Text style={styles.headerTxt}>Hi {nameTxt}</Text>
                        <Text style={styles.descriptTxt}>Have agrate day a head</Text>
                    </View>
                </View>
            </View>
        </View>
     );
}

export default AP_Screen_03;  

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        alignItems:"center",
        backgroundColor:"#fff",
    },
    headerWrapper:{
        width: 70,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:16,
        marginBottom:20,
        marginRight:120
    },
    imgHeader:{
        width:50,
        height:50,
    },
    headerTxt:{
        fontFamily:"Epilogue",
        fontWeight:700,
        fontSize:16,
    },
    descriptTxt:{
        fontFamily:"Epilogue",
        fontWeight:200,
        fontSize:14,
        color:"rgba(23, 26, 31, 1)"
    },
    preImg:{
        width:30,
        height:30,
        marginTop:4,
        marginLeft:50,
        padding:10,
    },
    navigationWrapper:{
        flexDirection:"row-reverse",
        justifyContent:"flex-start",
        position:"fixed",
        left:20,
    }
})