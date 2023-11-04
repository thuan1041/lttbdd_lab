import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-web";

  
function AP_Screen_03({navigation, route}) {
    const {nameTxt, idAPI, todosAPI} = route.params;
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
            <Text style={styles.titleBody}>ADD YOUR JOB</Text>
            <TouchableOpacity style={styles.bodyWrapper}>
                <Image source={require("../assets/Framenote.png")} style={styles.imgTxt}></Image>
                <TextInput style={styles.inputTxt} placeholder="input your job"></TextInput>    
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnWrapper}>
                <Text style={styles.btnTxt} onPress={
                    ()=>{
                        navigation.navigate('AP_Screen_02',{nameTxt})
                    }
                
                }>Finish</Text>
            </TouchableOpacity>
            <Image style={styles.footerImg} source={require("../assets/Image 95.png")}></Image>
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
    },
    
    titleBody:{
        fontFamily:"Epilogue",
        fontWeight:700,
        fontSize:32,
        lineHeight:48,
        color:"rgba(23, 26, 31, 1)",
        marginTop:100,
    },
    bodyWrapper:{
        width:"90%",
        height: 43,
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:"center",
        borderRadius:10,
        borderWidth:1,
        marginTop:40,
        borderColor:"rgba(144, 149, 160, 1)"
    },
    imgTxt:{
        width:24,
        height:24,
        marginRight:10,
        marginLeft:10,
    },
    inputTxt:{
        fontFamily:"inter",
        fontWeight:400,
        fontSize:14,
        height:43,
        width:"100%",
    },
    btnWrapper:{
        width:190,
        height:44,
        backgroundColor:"rgba(0, 189, 214, 1)",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginTop:60

    },
    btnTxt:{
        fontFamily:"Inter",
        fontWeight:400,
        fontSize:16,
        color:'#fff',
    },
    footerImg:{
        width:190,
        height:170,
        marginTop:60,   
    }
})