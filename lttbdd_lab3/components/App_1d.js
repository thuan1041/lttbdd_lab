import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from "react-native";

function App_1d() {
    return (  
        <View style={style.container}>
            <Text style={style.textLogin}>LOGIN</Text>
            <View style={style.inputWrapper}>
                <TextInput style={style.inputItem} placeholder="Email"/>
                <TextInput style={[style.inputItem, style.inputItemPassword]} placeholder="Password"/>
                <Image style={style.iconEye} source={require('../assets/eye.png')} />
            </View>
            <View style={style.btnLoginWrapper}>
                <TouchableOpacity style={style.btnLogin}>
                    <Text style={style.btnTextLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={style.helpWrapper}>
                <Text style={style.helpText}>When you agree to terms and conditions</Text>
                <Text style={[style.helpText,style.forgotTxt]} >For got your password?</Text>
                <Text style={style.helpText} >Or login with</Text>
            </View>
            <View style={style.socialWrapper}>
                <TouchableOpacity style={[style.btnSocial,, {backgroundColor:'#25479B'}]}>
                    <Image style={style.imgFb} source={require('../assets/imgFb.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={[style.btnSocial, {backgroundColor:'#0F8EE0'}]}>
                    <Image style={[style.imgZalo] } source={require('../assets/imgZalo.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.btnSocial}>
                    <Image style={style.imgGoogle} source={require('../assets/imgGoogle.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default App_1d;

const style = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#d8efde',
    },
    textLogin: {
        width:72,
        height:29,
        fontSize:25,
        fontFamily:'Roboto',
        fontWeight:700,
        lineHeight:29.3,
        textAlign:"center",
        marginTop:40,
        marginBottom:40,
    },
    inputWrapper: {
        display:"flex",
    },
    inputItem: {
        width:330,
        height:54,
        backgroundColor:'#C9E0D0',
        margin:20,
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
        bottom:30,
        right:35,
    },
    btnLoginWrapper: {
        display:"flex",
        justifyContent:"center",
        width:330,
        height:45,
        backgroundColor:'#E53935',
        borderStyle:"solid",
        borderRadius:2,
        marginTop:40,
    },
    btnLogin: {
        display:"flex",
        alignItems:"center",
    },
    btnTextLogin: {
        width:58,
        height:23,
        fontFamily:'Roboto',
        fontWeight:700,
        fontSize:20,
        lineHeight:23.44,
        color:'#ffffff',
    },
    helpWrapper: {
        marginTop:30
    },
    helpText: {
        width:260,
        height:20,
        fontFamily:'Roboto',
        fontWeight:400,
        fontSize:14,
        lineHeight:16.44,
        color:'#000000',
        textAlign:"center",
        margin:8,
    },
    forgotTxt: {
        color:'#5D25FA',
    },
    socialWrapper: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        width:328,
        height:45,
        marginTop:30
    },
    btnSocial: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:110,
        height:45,
        borderStyle:"solid",
        borderWidth:2,
        borderColor:'#0680F1',
        borderRadius:2
    },
    imgFb: {
        width:30,
        height:30,
    },
    imgZalo: {
        width:30,
        height:30,
        
    },
    imgGoogle: {
        width:35,
        height:35,
    }
})