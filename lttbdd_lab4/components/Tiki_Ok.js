import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from "react-native";

function Tiki_Ok() {
    const [quantity, setQuantity] = useState(1);
    const productPrice = 141800;
    const [totalPrice, setTotalPrice] = useState(productPrice);
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
      setTotalPrice(productPrice * (quantity + 1));
    };
  
    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        setTotalPrice(productPrice * (quantity - 1));
      }
    };
    const handlePlaceOrder = () => {
        alert("Đặt hàng thành công");
      };
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
                            <TouchableOpacity style={styles.btnQuantityWrapper} onPress={decreaseQuantity}>
                                <Text style={styles.btnQuantityTxt}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnQuantityTxt}>
                                <Text style={styles.quantityTxt} >{quantity}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnQuantityWrapper} onPress={increaseQuantity}>
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
                <Text style={[styles.discountSaveTxt,{marginRight:146},{color:"#134FEC"}]}>Xem tại đây</Text>
            </View>
            <View style={styles.discountWrapper}>
                <TouchableOpacity style={styles.discountInputWrapper}>
                    <TextInput style={styles.discountInput}></TextInput>
                    <Text style={styles.discountTxt}>Mã giảm giá</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.discountBtnWrapper}>
                    <Text style={styles.discountBtnTxt}>Áp dụng</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bgWrapper} ></View>
            <View style={styles.bodyWrapper}>
                <View style={styles.couponWrapper}>
                    <Text style={styles.coupontxt}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <Text style={[styles.coupontxt,{color:"#134FEC"}]}>Nhập tại đây?</Text>
                </View>
                <View style={[styles.bgWrapper,{height:100}]} ></View>
            </View>
            <View style={styles.tempTotalWrapper}>
                <Text style={styles.tempTotalTxt}>Tạm tính</Text>
                <Text style={[styles.tempTotalTxt,{color:"#EE0D0D"}]}>{totalPrice} đ</Text>
            </View>
            <View style={[styles.bgWrapper,{height:100}]} ></View>
            <View style={styles.totalWrapper}>
                <Text style={styles.totalTxt}>Thành tiền</Text>
                <Text style={[styles.totalTxt,{color:"#EE0D0D"}]}>{totalPrice} đ</Text>
            </View>
            <View style={styles.footerWrapper}>
                    <TouchableOpacity style={styles.totalBtnWrapper} onPress={handlePlaceOrder}>
                        <Text style={styles.totalBtnTxt} >Tiến hành đặt hàng</Text>
                    </TouchableOpacity>
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
        justifyContent:"center",
        width:"100%",
        // backgroundColor:"#C4C4C4",
    },
    headerWrapper:{
        // flex:1,
        display:"flex",
        width:"100%",
        // height:283,
        height:400,
        flexDirection:"row",
        backgroundColor:"#ffffff",
        
    },
    productWrapper:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
        height:"147px",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    bodyWrapper:{
        // flex:1,
        width:"100%",
        height:283,
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
        marginTop:16,
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
        marginTop:-240
    },
    discountSaveTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:14,
        lineHeight:16.41,
        textAlign:"left",
        marginLeft:16,
    },
    discountWrapper:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        marginTop:30,
        marginBottom:30,
    },
    discountInputWrapper:{
        width:240,
        height:45,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        borderColor:"#808080",
        borderRadius:4,
        borderStyle:"solid",
        borderWidth:1,
        marginLeft:16,
    },
    discountInput:{
        width:32,
        height:16,
        backgroundColor:"#F2DD1B",
        marginLeft:16,
    },
    discountTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        textAlign:"left",
        marginLeft:16,

    },
    discountBtnWrapper:{
        width:99,
        height:45,
        backgroundColor:"#0A5EB7",
        display:"flex",
        justifyContent:"center",
        marginLeft:16,
        borderRadius:4,

    },
    discountBtnTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:20,
        lineHeight:23.44,
        textAlign:"center",
        color:"#FFFFFF",
    },
    couponWrapper:{
        display:"flex",
        flexDirection:"row",
        width:360,
        height:51,
        marginTop:16,
    },
    coupontxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:12,
        lineHeight:14.06,
        textAlign:"left",
        marginLeft:16,
    },
    bgWrapper:{
        width:"100%",
        height:16,
        backgroundColor:"#C4C4C4",
    },
    tempTotalWrapper:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:16,
        marginBottom:16,
        backgroundColor:"#ffffff",
        height:51,
        alignItems:"center",
        marginBottom:0,
        marginTop:-81,
    },
    tempTotalTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        textAlign:"left",
        marginLeft:16,
        marginRight:16,
    },
    bodyWrapper:{
        // flex:1,
        width:"100%",
        height:165,
        backgroundColor:"#ffffff",

    },
    totalWrapper:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:16,
        backgroundColor:"#ffffff",
        height:51,
        alignItems:"center",
        width:"100%",

    },
    totalTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        textAlign:"left",
        marginLeft:16,
        marginRight:16,
    },
    footerWrapper:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginRight:16,
        marginLeft:16,
    },
    totalBtnWrapper:{
        width:"100%",
        height:51,
        backgroundColor:"#E53935",
        display:"flex",
        justifyContent:"center",
        borderRadius:4,
    },
    totalBtnTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:20,
        lineHeight:23.44,
        textAlign:"center",
        color:"#FFFFFF",
    },
    
})