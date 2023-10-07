import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert} from "react-native";

const data =[
    {
        id:1,
        name:"abc",
        password:"12345678"
    },
    {
        id:2,
        name:"def",
        password:"12345678"
    },
]
function Lab4_2a() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const loginFunction = () => {
        let check = false;
        data.forEach((item) => {
            if(item.name === name && item.password === password){
                check = true;
            }
        })
        if(check){
            alert("Login success \n"+ `Username ${name}\n password: ${password} `)   
        }
        else{
            alert("Login fail")   
        }
    }
    return (  
        <View style={style.container}>
            <Text style={style.textLogin}>LOGIN</Text>
            <View style={style.inputWrapper}>
                <Image style={style.iconUser} source={require('../assets/avt_user.png')} />
                <TextInput style={style.inputItem} placeholder="Name" onChangeText={setName} value={name} />
                <Image style={style.iconLock} source={require('../assets/lock2.png')} />
                <TextInput style={style.inputItem} placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={!showPassword}/>
                <TouchableOpacity onPress={
                        () => setShowPassword(!showPassword)
                    }>
                    <Image style={style.iconEye} source={require('../assets/eye.png')}/>
                </TouchableOpacity>

            </View>
            <View style={style.btnLoginWrapper}>
                <TouchableOpacity style={style.btnLogin} onPress={loginFunction}>
                    <Text style={style.btnTextLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textCreate}>Forgot your password?</Text>
        </View>
    );
}

export default Lab4_2a;

const style = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        width:'100%',
        backgroundImage:'linear-gradient(#FBCB00 50%, #BF9A00 100%)',
    },
    textLogin: {
        width:87,
        height:35,
        fontSize:30,
        fontFamily:'Roboto',
        fontWeight:700,
        lineHeight:35.16,
        textAlign:"center",
        left:-110,
        marginTop:100,
        marginBottom:50,
    },
    inputWrapper: {
        display:"flex",
        position: 'relative',
    },
    inputItem: {
        width:330,
        height:54,
        margin:10,
        padding:10,
        fontFamily:'Roboto',
        fontWeight:400,
        fontSize:18,
        lineHeight:21.09,
        paddingLeft:10,
        backgroundColor:'#F2F2F2',
        color:'#000000',
        opacity:0.3,
        marginLeft:10,
        paddingLeft: 60,
    },
    iconUser:{
        position:"absolute",
        width:32,
        height:32,
        top: 16,
        left:10,
    },
    iconLock: {
        position:"absolute",
        width:32,
        height:32,
        top: 92,
        left:12,
    },
    iconEye: {
        position:"absolute",
        width:38,
        height:36,
        bottom:20,
        right:35,
    },
    btnLoginWrapper: {
        display:"flex",
        justifyContent:"center",
        width:330,
        height:45,
        backgroundColor:'#060000',
        borderStyle:"solid",
        borderRadius:2,
        marginTop:60,
    },
    btnLogin: {
        display:"flex",
        alignItems:"center",
    },
    btnTextLogin: {
        width:147,
        height:27,
        fontFamily:'Roboto',
        fontWeight:700,
        fontSize:20,
        lineHeight:23.44,
        color:'#ffffff',
        textAlign:"center"
    },
    textCreate:{
        width:239,
        height:27,
        fontFamily:'Roboto',
        fontWeight:700,
        fontSize:20,
        lineHeight:23.44,
        color:'#000000',
        textAlign:"center",
        marginTop:40
    }
})