import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from "react-native";

function App_1e() {
    return (  
        <View style={style.container}>
            <Text style={style.textRegister}>REGISTER</Text>
            <View style={style.inputWrapper}>
                <TextInput style={style.inputItem} placeholder="Name"/>
                <TextInput style={style.inputItem} placeholder="Phone"/>
                <TextInput style={style.inputItem} placeholder="Email"/>
                <TextInput style={[style.inputItem, style.inputItemPassword]} placeholder="Password"/>
                <Image style={style.iconEye} source={require('../assets/eye.png')} />
                <TextInput style={style.inputItem} placeholder="Birthday"/>

            </View>
            <View style={style.radioWrapper}>
                <View style={style.radioBtn} ></View>
                <Text style={style.radioText}>Male</Text>
                <View style={style.radioBtn} ></View>
                <Text style={style.radioText}>Female</Text>
            </View>
            <View style={style.btnRegisterWrapper}>
                <TouchableOpacity style={style.btnRegister}>
                    <Text style={style.btnTextRegister}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textWhen}>When you agree to terms and conditions</Text>
        </View>
    );
}

export default App_1e;

const style = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#d8efde',
    },
    textRegister: {
        width:116,
        height:29,
        fontSize:25,
        fontFamily:'Roboto',
        fontWeight:700,
        lineHeight:29.3,
        textAlign:"center",
        marginTop:40,
        marginBottom:20,
    },
    inputWrapper: {
        display:"flex",
    },
    inputItem: {
        width:330,
        height:54,
        backgroundColor:'#C9E0D0',
        margin:10,
        padding:10,
        fontFamily:'Roboto',
        fontWeight:400,
        fontSize:18,
        lineHeight:21.09,
        paddingLeft:10,
    },
    inputItemPassword: {
        position:"relative",
    },
    iconEye: {
        position:"absolute",
        width:38,
        height:36,
        top:312,
        right:35,
    },
    btnRegisterWrapper: {
        display:"flex",
        justifyContent:"center",
        width:330,
        height:45,
        backgroundColor:'#E53935',
        borderStyle:"solid",
        borderRadius:2,
        marginTop:40,
    },
    btnRegister: {
        display:"flex",
        alignItems:"center",
    },
    btnTextRegister: {
        width:93,
        height:23,
        fontFamily:'Roboto',
        fontWeight:700,
        fontSize:20,
        lineHeight:23.44,
        color:'#ffffff',
    },
    radioWrapper: {
        width:330,
        display:"flex",
        flexDirection:'row',
        justifyContent: 'flex-start',
        justifyContent:'center',
        alignItems:"center",
        marginTop:10
    },
    radioBtn: {
        width:23,
        height:23,
        borderColor:'#000000',
        borderRadius:'50%',
        borderWidth:2,
        borderStyle:'solid',

    },
    radioText: {
        width:59,
        height:21,
        fontFamily:'Roboto',
        fontWeight:400,
        fontSize:18,
        lineHeight:21.09,
        textAlign:"center",
        marginLeft:10
    },
    textWhen: {
        width:260,
        height:20,
        fontFamily:'Roboto',
        fontWeight:400,
        fontSize:14,
        lineHeight:16.41,
        textAlign:"center",
        marginTop:10
    }
})