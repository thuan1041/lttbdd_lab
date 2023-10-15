import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Screen_02() {
    return ( 
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Image style={styles.headerImg} source={require("../assets/vs_blue.png")}></Image>   
                <Text style={styles.headerTxt}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.bodyTxt}>Chọn một màu bên dưới:</Text>
                <View style={styles.blockWrapper}>
                    <TouchableOpacity style ={[styles.block,{backgroundColor:"#C5F1FB"}]}></TouchableOpacity>
                    <TouchableOpacity style ={[styles.block,{backgroundColor:"#F30D0D"}]}></TouchableOpacity>
                    <TouchableOpacity style ={[styles.block,{backgroundColor:"#000000"}]}></TouchableOpacity>
                    <TouchableOpacity style ={[styles.block,{backgroundColor:"#234896"}]}></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnWrapper}>
                    <Text style={styles.btnTxt}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Screen_02;
const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:'#fff',
        flexDirection:'column',
        // alignItems:'center',
        width:'100%'
    },
    headerWrapper:{
        width:"100%",
        height:130,
        flexDirection:'row',
    },
    headerImg:{
        width:112,
        height:132,
    },
    headerTxt:{
        width:164,
        height:36,
        fontFamily:"Roboto",
        fontWeight:400,
        fontSize:15,
        lineHeight:17.58,
        textAlign:'left',
        marginLeft:25,
        marginTop:20,

    },
    bodyWrapper:{
        backgroundColor:'#C4C4C4',
        width:'100%',
        height:590,
        marginTop:20,
        alignItems:'center',
    },
    bodyTxt:{
        fontFamily:"Roboto",
        fontWeight:400,
        fontSize:18,
        lineHeight:21.09,
        marginLeft:-150,
        marginTop:20,
    },
    blockWrapper:{
        width:"100%",
        height:390,
        justifyContent:'center',
        alignItems:'center',
    },
    block:{
        width:85,
        height:80,
        marginTop:10,
    },
    btnWrapper:{
        width:"80%",
        height:44,
        borderRadius:10,
        borderWidth:1,
        backgroundColor:"#1952E2",
        opacity:"58%",
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        
    },
    btnTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        color:"#FFFFFF",
    }
});