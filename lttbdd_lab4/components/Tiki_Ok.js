import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from "react-native";

function Tiki_Ok() {
    return (  
        <View style = {styles.container}>
            <View style={styles.headerWrapper}>
                <View style={styles.productWrapper}>
                    <Image  style={styles.imgTxt} source={require('../assets/book.png')}></Image>
                    <View style={styles.productDetailWrapper}>
                        <Text style={styles.productTxt}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={styles.productTxt}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.priceTxt}>141.800 đ</Text>
                        <Text style={styles.priceSaleTxt}>141.800 đ</Text>
                        
                        <View style={styles.quantityWrapper}>
                            <TouchableOpacity style={styles.btnQuantityWrapper}>
                                <Text style={styles.btnQuantityTxt}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnQuantityTxt}>
                                <Text style={styles.quantityTxt} >1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnQuantityWrapper}>
                                <Text style={styles.btnQuantityTxt}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnQuantityMuaSau}>
                                <Text style={styles.muaSauTxt}>Mua sau</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.discountSaveWrapper}>
                <Text style={styles.discountSaveTxt}>Mã giảm giá đã lưu</Text>
                <Text style={styles.discountSaveTxt}>Xem tại đây</Text>
            </View>
            <View style={styles.bodyWrapper}>

            </View>
        </View>
    );
}

export default Tiki_Ok;

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"100%",
    },
    headerWrapper:{
        flex:1,
        display:"flex",
        width:"100%",
        height:283,
        // backgroundColor:"red",
        flexDirection:"row",
        
    },
    productWrapper:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        height:"60%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    bodyWrapper:{
        flex:1,
        width:"100%",
        height:283,
        backgroundColor:"yellow",
    },
    imgTxt:{
        width:104,
        height:127,
        marginTop:16,
        marginLeft:16
    },
    productDetailWrapper:{
        display:"flex",
        justifyContent:"space-evenly",
        marginRight:16,
    },
    productTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:12,
        lineHeight:14.06,
        textAlign:"left",
        marginBottom:8,
    },
    priceTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        textAlign:"left",
        marginBottom:8,
        color:"#EE0D0D",
    },
    priceSaleTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:14,
        lineHeight:21.09,
        textAlign:"left",
        marginBottom:8,
        color:"#808080",
        fontStyle:"italic",
        textDecorationLine:"line-through",
    },
    quantityWrapper:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    btnQuantityWrapper:{
        width:16,
        height:16,
        backgroundColor:"#C4C4C4",
        display:"flex",
        alignItems:"center",
    },
    btnQuantityTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:14,
        lineHeight:16.41,
        textAlign:"center",
        color:"#FFFFFF",
    },
    quantityTxt:{
        paddingLeft:10,
        paddingRight:10,
        TextAlign:"center",
    },
    btnQuantityMuaSau:{
        marginLeft:100

    },
    muaSauTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:12,
        lineHeight:16.41,
        textAlign:"center",
        color:"#134FEC",
    },
    discountSaveWrapper:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    discountSaveTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:14,
        lineHeight:16.41,
        textAlign:"left",
    }
})