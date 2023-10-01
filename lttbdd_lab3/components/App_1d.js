import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from "react-native";

function App_1d() {
    return (  
        <View style={style.container}>
            <Text style={style.textLogin}>LOGIN</Text>
            <View style={style.inputWrapper}>
                <TextInput style={style.inputItem} placeholder="Email"/>
                <TextInput style={style.inputItem} placeholder="Password"/>
                <Image style={style.iconEye} source={require('../assets/eye.png')} />
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
    },
    inputWrapper: {
        display:"flex",
    },
    inputItem: {
        width:330,
        height:54,
        backgroundColor:'#C9E0D0',
        borderStyle:'solid',
        borderWidth:1,
    },
    iconEye: {

    },
})