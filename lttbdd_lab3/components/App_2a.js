import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from "react-native";

function App_2a() {
    return (  
        <View style={style.container}>
            <Text style={style.textLogin}>LOGIN</Text>
            <View style={style.inputWrapper}>
                <Image style={style.iconUser} source={require('../assets/avt_user.png')} />
                <TextInput style={style.inputItem} placeholder="Name"/>
                <Image style={style.iconLock} source={require('../assets/lock2.png')} />
                <TextInput style={style.inputItem} placeholder="Password"/>
                <Image style={style.iconEye} source={require('../assets/eye.png')} />
            </View>
            <View style={style.btnLoginWrapper}>
                <TouchableOpacity style={style.btnLogin}>
                    <Text style={style.btnTextLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textCreate}>CREATE ACCOUNT</Text>
        </View>
    );
}

export default App_2a;

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