import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Screen_01() {
    return ( 
        <View style = { styles.container } >
            <TouchableOpacity style={styles.ImgWrapper} >
                <Image style={styles.ImgTxt} source={require("../assets/vs_blue.png")}></Image>
            </TouchableOpacity>
            <Text style={styles.titleTxt}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={styles.ratingWrapper}>
                <Image style={styles.ratingImg} source={require("../assets/star.png")}></Image>
                <Image style={styles.ratingImg} source={require("../assets/star.png")}></Image>
                <Image style={styles.ratingImg} source={require("../assets/star.png")}></Image>
                <Image style={styles.ratingImg} source={require("../assets/star.png")}></Image>
                <Image style={styles.ratingImg} source={require("../assets/star.png")}></Image>
                <Text style={styles.ratingTxt}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={styles.priceWrapper}>
                <Text style={styles.priceTxt}>1.790.000 đ</Text>
                <Text style={styles.priceSaleTxt}>1.790.000 đ</Text>
            </View>
            <View style={styles.refundWrapper}>
                <Text style={styles.refundTxt}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <View style={styles.circleWrapper}>
                    <Text style={styles.refundIcon}>?</Text>
                </View>
            </View>
            <View style={styles.slectColorWrapper}>
                <Text style={styles.slectColorTxt}>4 MÀU-CHỌN MÀU</Text>
                <Text style={styles.slectColorICom}></Text>
            </View>
        </View>
    );
}
export default Screen_01;
const styles = StyleSheet.create({
    container: {
        display:'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        width:"100%"
    },
    ImgWrapper:{
        display:'flex',
        justifyContent:"center",
        alignItems: 'center', 
        width:301,
        height:361,
    },
    ImgTxt:{
        width:"90%",
        height:"90%",
    },
    titleTxt:{
        fontFamily:"Roboto",
        fontWeight:400,
        fontSize:15,
        lineHeight:17.58,
        color:"#000000",
        // marginTop:-20
    },
    ratingWrapper:{
        width:301,
        height:25,
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:'flex-end',
        marginTop:16
    },
    ratingImg:{
        width:24,
        height:24,
        paddingLeft:20
    },
    ratingTxt:{
        fontFamily:"Roboto",
        fontWeight:400,
        fontSize:15,
        lineHeight:17.58,
        color:"#000000",
    },
    priceWrapper:{
        width:301,
        height:21,
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:10,
        marginLeft:30,     

    },
    priceTxt:{
        width:99,   
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        color:"#000000"
    },
    priceSaleTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:15,
        lineHeight:17.58,
        color:"#000000",
        opacity:"58%",
        fontStyle:"italic",
        textDecorationLine:"line-through",
    },
    refundWrapper:{
        width:301,
        display:'flex',
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:10,
        marginLeft:30,     
    },
    refundTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:12,
        lineHeight:14.06,
        color:"#FA0000",
    },
    circleWrapper:{
        width:20,
        height:20,
        borderColor:"#000000",
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        marginLeft:10
    },
    refundIcon:{
        color:"#000000"
    },

});