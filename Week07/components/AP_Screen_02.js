import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import { Image, StyleSheet, View, Text } from "react-native";

  
function AP_Screen_02({navigation, route}) {
    const {nameTxt} = route.params;
    var [data, setData] = useState([]);
    var [isLoading, setLoading] = useState(true);

    useEffect(() =>{
            console.log("useEffect++");
            getListTodos();
            return ()=>{
            };
        },[]
    )

    var getListTodos = () =>{
        console.log("getListTodos++");
        const api = "https://6540b01945bedb25bfc25993.mockapi.io/todos/todos";
        fetch(api)
        .then(res => res.json())
        .then(resJson =>{
            setData(resJson)
        }).catch(err =>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
    }

    const renderItem = ({item})=>(

            <View style={styles.WrapperItem}>
                <TouchableOpacity>
                    <Image style={styles.imgItem} source={require("../assets/Frame2.png")}></Image> 
                </TouchableOpacity>
                <Text style={styles.todoTxt} >{item.todo}</Text>
                <TouchableOpacity>
                    <Image style={styles.imgItem} source={require("../assets/Frame (1).png")}></Image>
                </TouchableOpacity>
            </View>
        )
    
    
    return ( 
        <View style={styles.container}>
            <Text>Hi {nameTxt}</Text> 
            <SafeAreaView>
                {isLoading ? <ActivityIndicator></ActivityIndicator> : (
                    <FlatList                         
                    data={data}
                    renderItem={renderItem}>
                    </FlatList>)
                }
            </SafeAreaView>
        </View>
     );
}

export default AP_Screen_02;  

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        alignItems:"center"
    },
    imgItem:{
        width:24,
        height:24,
    },
    WrapperItem:{
        width:"100%",
        height:48,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:24,
        paddingHorizontal:20,
        backgroundColor:"rgba(23, 26, 31, 0.15)",
        marginTop:20
    },
    todoTxt:{
        textAlign:"left",
    }
})