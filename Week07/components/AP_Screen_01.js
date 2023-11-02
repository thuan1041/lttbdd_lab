import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import AP_Screen_02 from "./AP_Screen_02";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

  
function AP_Screen_01({navigation}) {
    const [name, setName] = useState('Thuan');
    return ( 
        <View style={styles.container}>
            <Image style={styles.imgHeader} source={require("../assets/Image 95.png")}></Image>
            <Text style={styles.headerTxt}>MANAGE YOUR <br></br>TASK</Text>
            <TouchableOpacity style={styles.inputWrapper}>
                <Image style={styles.imgInput} source={require("../assets/Frame.png")}></Image>
                {/* <TextInput style={styles.inputTxt} placeholder="Enter your name" onChangeText={name =>{
                    setName(name)
                }}></TextInput> */}
                <TextInput style={styles.inputTxt} placeholder="Enter your name" onChangeText={(name)=>{setName(name)}}></TextInput>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnWrapper}
                onPress ={()=>{
                    navigation.navigate('AP_Screen_02', {nameTxt:name})
                }}>
                <Text style={styles.btnTxt}>Get Started </Text>
            </TouchableOpacity>
        </View>
     );
}

export default AP_Screen_01;  

const styles = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"#fff",
    },
    imgHeader:{
        width: 271,
        height: 271,
        marginTop:30

    },
    headerTxt:{
        fontFamily:"Epilogue",
        fontWeight:700,
        fontSize:24,
        lineHeight:36,
        textAlign:"center",
        color:"rgba(131, 83, 226, 1)"
    },
    inputWrapper:{
        width:"90%",
        height: 43,
        flexDirection:"row",
        justifyContent:'flex-start',
        alignItems:"center",
        borderRadius:10,
        borderWidth:1,
        marginTop:60
    },
    imgInput:{
        width:24,
        height:24,
        marginLeft:10,
    },
    inputTxt:{
        marginLeft:20,
        width:"100%",
        height:43,
    },
    btnWrapper:{
        width:"90%",
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
        textTransform:'uppercase'
    }
})