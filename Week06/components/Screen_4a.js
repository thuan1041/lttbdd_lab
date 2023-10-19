import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const DATA = [
    {
        id:'01',
        linkImg:require('../assets/ca_nau_lau.png'),
        productName:"Ca nấu lẩu, nấu mì mini",
        shopName:"Shop Devang",
    },
    {
      id:'02',
      linkImg:require('../assets/ga_bo_toi.png'),
      productName:"1 KG KHÔ GÀ BƠ TỎI",
      shopName:"LTD Food",
    },
    {
      id:'03',
      linkImg:require('../assets/xa_can_cau.png'),
      productName:"Xe cần cẩu đa năng",
      shopName:"Shop Thế giới đồ chơi",
    },
    {
      id:'04',
      linkImg:require('../assets/do_choi_dang_mo_hinh.png'),
      productName:"Đồ chơi dạng mô hình",
      shopName:"Shop Thế giới đồ chơi",
    },
    {
      id:'05',
      linkImg:require('../assets/lanh_dao_gian_don.png'),
      productName:"Lãnh đạo giản đơn",
      shopName:"Shop Minh long Book",
    },
    {
      id:'06',
      linkImg:require('../assets/hieu_long_con_tre.png'),
      productName:"Hiểu lòng con trẻ",
      shopName:"Shop Minh long Book",
    },
    {
      id:'07',
      linkImg:require('../assets/trump 1.png'),
      productName:"Đồ chơi dạng mô hình",
      shopName:"Shop Thế giới đồ chơi",
    },
    
]

function Screen_4a() {
    const renderItem = ({item})=>(
        <View style={styles.productWrapper}>
            <Image style={styles.productImg} source={item.linkImg}></Image>
            <View style={styles.datailWrapper}>
                <Text style={styles.detailTxt}>{item.productName}</Text>
                <Text style={styles.shopTxt}>{item.shopName}</Text>
            </View>
              <TouchableOpacity style={styles.btnWrapper}>
                <Text style={styles.btnChat}>Chat</Text>
              </TouchableOpacity>
        </View>
    )
  return (
    <View style={styles.container}>
        <View style={styles.headerWrapper}>
            <Image style={styles.ImgHeader} source={require('../assets/ant-design_arrow-left-outlined.png')} />
            <Text style={styles.TxtHeader} >Chat</Text>
            <Image style={styles.ImgHeader} source={require('../assets/bi_cart-check.png')} />
        </View>
        <View style={styles.bodyWrapper}>
            <Text style={styles.bodyTxt}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
            <FlatList
            data={DATA} 
            renderItem={renderItem}>
            </FlatList>
        </View>
        <TouchableOpacity style={styles.footerWrapper}>
          <Image style={styles.imgFooter} source={require('../assets/Group 10.png')} />
          <Image style={styles.imgFooter} source={require('../assets/Vector (Stroke).png')} />
          <Image style={styles.imgFooter} source={require('../assets/Vector 1 (Stroke).png')} />
        </TouchableOpacity>
    </View>
  );
}
export default Screen_4a;

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flexDirection:"column",
    backgroundColor: '#fff',
    alignItems: 'center',
    flex:1
  },
  headerWrapper:{
    display:"flex",
    flexDirection:"row",
    alignItems: 'center',
    justifyContent:"space-between",
    width:"100%",
    height:42,
    backgroundColor:"#1BA9FF",
    position:"fixed",
    top:0,
    zIndex:1,
  },
  ImgHeader:{
    width:24,
    height:24, 
    margin:10, 
  },
  TxtHeader:{
    color:"#fff"
    
  },
  bodyWrapper:{
    width:"100%",
    // alignItems: 'stretch',
    marginTop:50,
    marginBottom:50
  },
  bodyTxt:{
    fontWeight:100,
    padding:20,
    color:"#000000",
    fontWeight:500,
  },
  productWrapper:{
    width:"96%",
    height:80,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  productImg:{
    width:74,
    height:74
  },
  datailWrapper:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  },
  detailTxt:{
    fontWeight:100,

  },
  shopTxt:{
    fontWeight:100,
    color:"#E83030"
  },
  btnWrapper:{
    width:88,
    height:"50%",
    backgroundColor:"#F31111",
    display:"flex",
    flexDirection:"column",
    justifyContent:'center',
    alignItems:"center",
  },
  btnChat:{
    fontWeight:100,
    color:"#fff",
    textAlign:"center"
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
