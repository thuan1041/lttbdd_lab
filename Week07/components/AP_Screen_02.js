import { useEffect, useState } from "react";
import { ActivityIndicator, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import { Image, StyleSheet, View, Text } from "react-native";

  
function AP_Screen_02({navigation, route}) {
    const {nameTxt} = route.params;
    var [data, setData] = useState([]);
    var [isLoading, setLoading] = useState(true);
    var [data2, setData2] = useState([]);
    var [textNotifi, setNotifi] = useState("")
    console.log(textNotifi)

    var getListTodos = () =>{
        const api = "https://6540b01945bedb25bfc25993.mockapi.io/todos/todo";
        fetch(api)
        .then(res => res.json())
        .then(resJson =>{
            setData(resJson)
            getOneTodo()
        }).catch(err =>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
            // getOneTodo()
        })
    }
var isCheck = false 
    var getOneTodo = () =>{
        data.forEach(item => {
            if(nameTxt==item.name){
            var todos = item.mytodo;
            setData2(todos);
            isCheck = true
            // console.log(data2)
        }
    });
    }
    // const getOneTodo = () => {
    //     // Find the todo with the matching nameTxt
    //     const todo = data.find((item) => item.name === nameTxt);
    
    //     if (todo) {
    //       setData2(todo.mytodo);
    //     }
    //   };
    useEffect(() => {
        if (data.length > 0 && data2!=null) {
            getOneTodo();
            setNotifi("")
            // console.log(textNotifi)
        }
        if (isCheck==false){
            notifi()
        }
        return () => {
            isCheck = false
        }

    }, [{data}]);

    useEffect(() =>{
        getListTodos();
        return ()=>{
        };
    },[]
    )
    const notifi = () =>{
        setNotifi("Khong co du lieu")
    }
    var renderItem = ({item})=>(

            <View style={styles.itemWrapper}>
                <TouchableOpacity style={styles.imgWrapper}>
                    {(item.complete)?(
                        <Image style={styles.imgItem} source={require("../assets/Frame2.png")}></Image>):
                        (<Image style={styles.imgItem} source={require("../assets/Flat_cross_icon.svg.png")}></Image>)
                    }
                </TouchableOpacity>
                <View style={styles.todoWrapper} >
                    <Text style={styles.todoTxt}>{item.nameTodo}</Text>
                </View>
                <TouchableOpacity style={styles.imgWrapper}>
                    <Image style={styles.imgItem} source={require("../assets/Frame (1).png")}></Image>
                </TouchableOpacity>
            </View>
        )
    
    
    return ( 
        <View style={styles.container}>
            <View style={styles.navigationWrapper} >
                <TouchableOpacity style={styles.preImg} onPress={()=>{
                    navigation.navigate('AP_Screen_01')
                }} >
                    <Image style={styles.preImg} source={require("../assets/Icon Button 11.png")}></Image>
                </TouchableOpacity>
                <View style={styles.headerWrapper}>
                <Image style={styles.imgHeader} source={require("../assets/Frame_Avt.png")}></Image>
                <View style={{marginLeft:20}}>
                    <Text style={styles.headerTxt}>Hi {nameTxt}</Text>
                    <Text style={styles.descriptTxt}>Have agrate day a head</Text>
                </View>
            </View>
            </View>
            <TouchableOpacity style={styles.inputWrapper}>
                <Image style={styles.imgInput} source={require("../assets/Framesearch.png")}></Image>
                <TextInput style={styles.searchTxt} placeholder="Search"></TextInput>
            </TouchableOpacity>
            {/* <Text style={{display : textNotifi===""? "none" : "flex"}} onChangeText={(textNotifi)=> {setNotifi(textNotifi) 
            }}>{textNotifi}</Text> */}
            <Text style={{display : textNotifi==""? "none" : "flex"}} >{textNotifi}</Text>
            {/* {
                textNotifi!=""?<Text>Rong</Text>:<Text>Test</Text>
            } */}
            {/* <TextInput style={{ display: textNotifi === "" ? 'none' : 'flex' }} onChangeText={(textNotifi)=> setNotifi(textNotifi)}>{textNotifi}</TextInput> */}
            <SafeAreaView>
                {isLoading ? <ActivityIndicator></ActivityIndicator> : (
                    <FlatList                         
                    data={data2}
                    renderItem={renderItem}>
                        {/* ({item})=><Item id={item.id} title={item.title}/> */}
                    </FlatList>)
                }
            </SafeAreaView>
            <TouchableOpacity style={styles.plusWrapper}>
                <Text style={styles.plusTxt} onPress={()=>{
                    navigation.navigate('AP_Screen_03', {nameTxt})
                }}>+</Text>
            </TouchableOpacity>
        </View>
     );
}

export default AP_Screen_02;  

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        alignItems:"center",
        backgroundColor:"#fff",
        position:"relative",
    },
    imgItem:{
        width:24,
        height:24,
    },
    itemWrapper:{
        width:335,
        height:48,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:24,
        paddingHorizontal:20,
        backgroundColor:"rgba(23, 26, 31, 0.15)",
        marginTop:16
    },
    imgWrapper:{
        width:20
    },
    todoWrapper:{
        width:"80%",
        textAlign:"left",
    },
    todoTxt:{
        fontFamily:"Inter",
        fontWeight:700,
        fontSize:16,
    },
    imgInput:{
        width:24,
        height:24,
        marginLeft:10,
    },
    inputWrapper:{
        flexDirection:"row",
        justifyContent:"flex-start",
        width:335,
        height:44,
        borderWidth:1,
        borderColor:"rgba(144, 149, 160, 1)",
        alignItems:"center",
        borderRadius:10,
        marginTop:100,
        marginBottom:30
    },
    searchTxt:{
        marginLeft:20,
        width:"100%",
        height:43,
    },
    plusWrapper:{
        width:69,
        height:69,
        backgroundColor:"rgba(0, 189, 214, 1)",
        borderRadius:"50%",
        justifyContent:"center",
        alignItems:"center",    
        marginTop:20
    },
    plusTxt:{
        color:"#fff",
        fontSize:40,
    },
    headerWrapper:{
        width: 70,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:16,
        marginBottom:20,
        marginRight:120
    },
    imgHeader:{
        width:50,
        height:50,
    },
    headerTxt:{
        fontFamily:"Epilogue",
        fontWeight:700,
        fontSize:16,
    },
    descriptTxt:{
        fontFamily:"Epilogue",
        fontWeight:200,
        fontSize:14,
        color:"rgba(23, 26, 31, 1)"
    },
    preImg:{
        width:30,
        height:30,
        marginTop:4,
        marginRight:100,
        padding:10,
    },
    navigationWrapper:{
        flexDirection:"row",
        justifyContent:"flex-start",
        position:"fixed",
        left:20,
    },
    textNotifi:{
        display:"none"
    }
})