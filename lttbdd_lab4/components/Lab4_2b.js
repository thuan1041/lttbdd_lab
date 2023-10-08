import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from "react-native";
function Lab4_2b() {
    const [shareTxt, setShareTxt] = useState("");
    return (  
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Image style={styles.imgUsb} source={require("../assets/usb.png")}/>
                <Text style={styles.usbTxt}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.starTxt}>Cực kỳ hài lòng</Text>
                <View style={styles.starImgWrapper}>
                   <Image style={styles.starImg} source={require("../assets/Star.png")}/>
                   <Image style={styles.starImg} source={require("../assets/Star.png")}/>
                   <Image style={styles.starImg} source={require("../assets/Star.png")}/>
                   <Image style={styles.starImg} source={require("../assets/Star.png")}/>
                   <Image style={styles.starImg} source={require("../assets/Star.png")}/>
                </View>
                <TouchableOpacity style={styles.addImgWrapper}>
                    <Image style={styles.addImg} source={require("../assets/camera.png")}/>
                    <Text style={styles.addImgTxt}>Thêm hình ảnh</Text>
                </TouchableOpacity>
                    <TextInput style={styles.shareTxt} placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm" multiline={true} numberOfLines={10} onChangeText={setShareTxt} value={shareTxt}></TextInput>
                <TouchableOpacity style={styles.shareWrapper} onPress={()=>{
                    console.log(`Ý kiến: ${shareTxt}`);
                }} >
                    <Text style={styles.btnGui}>Gửi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Lab4_2b;
const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
    },
    headerWrapper:{
        display:"flex",
        flexDirection:"row",
        // alignItems:"stretch",
        justifyContent:"space-evenly",
        width:360,
        height:105,
        top:13
    },
    imgUsb:{
        width:70,
        height:70
    },
    usbTxt:{
        width:259,
        height:21,
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:16,
        lineHeight:18.75,
    },
    bodyWrapper:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:360,
        height:527,
        top:3,
    },
    starTxt:{
        width:259,
        height:21,
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        textAlign:"center",
    },
    starImgWrapper:{
        display:"flex",
        flexDirection:"row"
    },
    starImg:{
        width:39,
        height:39,
        margin:8,
        top:10
    },
    addImgWrapper:{
        display:"flex",
        flexDirection:"row",
        borderRadius:10,
        borderStyle:"solid",
        borderColor:"#1511EB",
        alignItems:"center",
        borderWidth:1,
        width:293,
        height:68,
        top:30,
    },
    addImg:{
        width:39,
        height:32,
        marginLeft:30
    },
    addImgTxt:{
        width:259,
        height:21,
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        textAlign:"center",
        marginLeft:-20,
    },
    shareTxt:{
        width:293,
        height:222,
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        textAlign:"center",
        borderColor:"#C4C4C4",
        borderRadius:10,
        borderStyle:"solid",
        borderWidth:1,
        marginTop:60,
        textAlign:"left",
        padding:10,
        opacity:0.5
    },
    shareWrapper:{
        width:289,
        height:41,
        backgroundColor:'#0D5DB6',
        marginTop:30,
        borderRadius:4,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }, 
    btnGui:{
        width:222,
        height:31,
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:20,
        lineHeight:23.44,
        textAlign:"center",
        color:"#ffffff"
    }
})