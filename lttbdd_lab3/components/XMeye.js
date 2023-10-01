import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from "react-native";

function XMeye() {
    return (  
        <View style={style.container}>
            <Image style={style.imgEye} source={require('../assets/eyeball-3097971.png')} />
            <View style={style.inputWrapper}>
                <Image style={[style.inputImage,style.imgUser]} source={require('../assets/Group3.png')}/>
                <TextInput style={style.inputText} placeholder="Please input user name" />
                <Image style={[style.inputImage, style.imgPassword]} source={require('../assets/Group5.png')}/>
                <TextInput style={style.inputText} placeholder="Please input password" />
            </View>
            <View style={style.btnLoginWrapper}>
                <TouchableOpacity style={style.btnLogin}>
                    <Text style={style.btnTextLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={style.choiceWrapper}>
                <Text style={style.choiceTxt}>Register</Text>
                <Text style={[style.choiceTxt,{width:'137px'}]}>Forgot Password</Text>
            </View>
            <View style={style.otherWrapper}>
                <View style={style.otherBorder} ></View>
                <Text style={style.otherTxt}>Other Login Method</Text>
                <View style={style.otherBorder} ></View>
            </View>

            <View style={style.socialWrapper}>
                <Image style={style.socialImg} source={require('../assets/Group8.png')} />
                <Image style={style.socialImg} source={require('../assets/Group9.png')} />
                <Image style={[style.socialImg, style.imgFb]} />
                <Image style={style.iconFacebook} source={require('../assets/brandico_facebook.png')} />
            </View>

        </View>
    );
}

export default XMeye;

const style = StyleSheet.create({
    container: {
        display:'flex',
        // flexDirection: 'column',
        alignItems:'center',
        width:'100%',

    },
    inputWrapper: {
        position: 'relative',
    },
    imgEye:{
        width:140,
        height: 140,
        marginTop: 40,
        marginBottom:25,
    },
    inputImage:{
        position:"absolute",
        width:30,
        height:30
    },
    imgUser:{
        top:6,
        let:10,
    },
    imgPassword:{
        top:72,
        let:10,
    },
    inputText:{
        width:300,
        height:45,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 3,
        paddingLeft:-55,
        marginBottom:25,
        fontWeight:400,
        fontFamily:'Roboto',
        fontSize:18,
        lineHeight:21.09,
        textAlign:'center',
        color:'#C4C4C4',
    },
    btnLoginWrapper: {
        display:"flex",
        justifyContent:"center",
        width:330,
        height:45,
        backgroundColor:'#386FFC',
        borderStyle:"solid",
        borderRadius:10,
        marginTop:40,
    },
    btnLogin: {
        display:"flex",
        alignItems:"center",
    },
    btnTextLogin: {
        width:52,
        height:21,
        fontFamily:'Roboto',
        fontWeight:400,
        fontSize:18,
        lineHeight:21.09,
        color:'#ffffff',
        textAlign:"center"
    },
    choiceWrapper:{
        width: 330,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    choiceTxt:{
        width:66,
        height:21,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
    },
    otherWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    otherBorder: {
        width: 80,
        height: 1,
        backgroundColor:'#0E18F5',
    },
    otherTxt: {
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        padding:10,
    },
    socialWrapper: {
        width: 330,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    socialImg: {
        width: 74,
        height: 74,
    },
    imgFb:{
        position:"relative",
        backgroundColor:'#3A579C',
        width: 74,
        height: 74,
    },
    iconFacebook: {
        position: 'absolute',
        width: 32,
        height: 45,
        right: 20,
        top: 12,
    }
})