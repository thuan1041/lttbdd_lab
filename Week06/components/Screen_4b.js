import {StyleSheet, View, Text, Image, TextInput, SafeAreaView, FlatList,TouchableOpacity } from "react-native";

const DATA =[
    {
        id:"01",
        linkImg:require("../assets/giacchuyen 1.png"),
        productName:"Cáp chuyển từ Cổng USB sang PS2...",
        rate:"4",
        price:"69.9000 đ",
        discount:"-39%",
    },
    {
        id:"02",
        linkImg:require("../assets/daynguon 1.png"),
        productName:"Cáp chuyển từ Cổng USB sang PS2...",
        rate:"4",
        price:"69.9000 đ",
        discount:"-39%",
    },
    {
        id:"03",
        linkImg:require("../assets/dauchuyendoipsps2 1.png"),
        productName:"Cáp chuyển từ Cổng USB sang PS2...",
        rate:"4",
        price:"69.9000 đ",
        discount:"-39%",
    },
    {
        id:"04",
        linkImg:require("../assets/dauchuyendoi 1.png"),
        productName:"Cáp chuyển từ Cổng USB sang PS2...",
        rate:"4",
        price:"69.9000 đ",
        discount:"-39%",
    },
    {
        id:"05",
        linkImg:require("../assets/carbusbtops2 1.png"),
        productName:"Cáp chuyển từ Cổng USB sang PS2...",
        rate:"4",
        price:"69.9000 đ",
        discount:"-39%",
    },
    {
        id:"06",
        linkImg:require("../assets/daucam 1.png"),
        productName:"Cáp chuyển từ Cổng USB sang PS2...",
        rate:"4",
        price:"69.9000 đ",
        discount:"-39%",
    },

]

const renderItem = ({item}) =>(
    <View style={styles.productDetailWrapper}>
        <Image style={styles.productImg} source={item.linkImg}></Image>
        <Text style={styles.productName}>{item.productName}</Text>
        <Image style={styles.ratingImg} source={require("../assets/Group 4.png")}></Image>
        <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
        </View>
    </View>
);

function Screen_4b() {
    return ( 
        <View style={styles.container}>
            <View style={styles.headerWrapper} >
                <Image style={styles.imgHeader} source={require("../assets/ant-design_arrow-left-outlined.png")}></Image>
                <View style={styles.searchWrapper}>
                    <Image style={[styles.imgHeader,{marginLeft:15}]} source={require("../assets/whh_magnifier.png")}></Image>
                    <TextInput style={styles.inputSearch} placeholder="Dây cáp usb"></TextInput>
                </View>
                <Image style={styles.imgHeader} source={require("../assets/bi_cart-check.png")}></Image>
                <Image style={styles.imgHeader1} source={require("../assets/Group 2.png")}></Image>
            </View>
            <View style={styles.bodyWrapper} >
                <SafeAreaView>
                    <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    numColumns={2}
                    ></FlatList>
                </SafeAreaView>
            </View>
            <TouchableOpacity style={styles.footerWrapper}>
                <Image style={styles.imgFooter} source={require('../assets/Group 10.png')} />
                <Image style={styles.imgFooter} source={require('../assets/Vector (Stroke).png')} />
                <Image style={styles.imgFooter} source={require('../assets/Vector 1 (Stroke).png')} />
            </TouchableOpacity>
        </View>
    );
}

export default Screen_4b;

const styles = StyleSheet.create({
    container:{
        flex:1,
        with:"100%",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
    },
    headerWrapper:{
        width:"100%",
        height:42,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#1BA9FF",
        marginLeft:10,
        marginRight:10,
        position:"fixed",
        top:0,
        zIndex:1,
    },
    imgHeader:{
        width:24,
        height:24
    },
    imgHeader1:{
        width:5,
        height:5,
        paddingRight:22,
        marginRight:10
    },
    searchWrapper:{
        backgroundColor:"#fff",
        width:"50%",
        height:30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    inputSearch:{
        fontFamily:"Roboto",
        fontSize:13,
        color:"#7D5B5B",
        lineHeight:15.23,
    },
    bodyWrapper:{
        marginTop:-35,
    },
    productDetailWrapper:{
        justifyContent:"center",
        alignItems:"center",
        margin:20
    },
    productName:{
        width:155,
        fontFamily:"Roboto",
        fontSize:17,
        fontWeight:400,
        color:"#000000",
        lineHeight:14.06,
        textAlign:"left",
    },
    productImg:{
        width:155,
        height:90,

    },
    ratingImg:{
        width:106,
        height:13,
    },
    priceWrapper:{
        flexDirection:"row",
        justifyContent:"sapce-between",
    },
    price:{

    },
    discount:{

    },
    footerWrapper:{
        width:"100%",
        height:49,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#1BA9FF",
        position:"fixed",
        bottom:0,
      },
      imgFooter:{
        width:24,
        height:24,
        color:"#000000",
        margin:10
      }
});
