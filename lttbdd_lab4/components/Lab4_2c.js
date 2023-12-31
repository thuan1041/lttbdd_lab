import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, CheckBox} from "react-native";


function Lab4_2c() {
    const [password, setPassword] = useState("");
    const [pwLength, setPwLength] = useState(8);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialSymbols, setIncludeSpecialSymbols] = useState(true);

    const generatePassword = () => {
        let characters = "";
        if(includeLowercase){
            characters += "abcdefghijklmnopqrstuvwxyz";
        }
        if(includeUppercase){
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(includeNumbers){
            characters += "0123456789";
        }
        if(includeSpecialSymbols){
            characters += "!@#$%^&*()_+-={}[];':,./<>?";
        }
        let generatedPassword = "";
        for (let i = 0; i < pwLength; i++) {
            const index = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[index];
        }
        setPassword(generatedPassword);
    }
    return (  
        <View style={styles.container}>
            <View style={styles.bgWrapper}>
                <View>
                    <Text style={styles.textHeader}>PASSWORD<br/>GENERATOR</Text>
                </View>
                <TextInput style={styles.passwordTxt} value={password}></TextInput>
                <View style={styles.statusWrapper}>
                    <Text style={styles.statusTxt}>Password length</Text>
                    <TextInput style={styles.pwLengthTxt}
                        value={pwLength.toString()}
                        onChangeText={(text) => setPwLength(parseInt(text) || 0)}>
                    </TextInput>
                </View>
                <View style={styles.statusWrapper}>
                    <Text style={styles.statusTxt}>Include lower case letters</Text>
                    <CheckBox style={styles.checkboxTxt} value={includeLowercase}
                        onValueChange={(newValue) => setIncludeLowercase(newValue)}>
                    </CheckBox>
                </View>
                <View style={styles.statusWrapper}>
                    <Text style={styles.statusTxt}>Include upcase letters</Text>
                    <CheckBox style={styles.checkboxTxt} value={includeUppercase}
                        onValueChange={(newValue) => setIncludeUppercase(newValue)}>
                    </CheckBox>
                </View>
                <View style={styles.statusWrapper}>
                    <Text style={styles.statusTxt}>Include number</Text>
                    <CheckBox style={styles.checkboxTxt} value={includeNumbers}
                        onValueChange={(newValue) => setIncludeNumbers(newValue)}>
                    </CheckBox>
                </View>
                <View style={styles.statusWrapper}>
                    <Text style={styles.statusTxt}>Include special symbol</Text>
                    <CheckBox style={styles.checkboxTxt}
                        value={includeSpecialSymbols}
                        onValueChange={(newValue) => setIncludeSpecialSymbols(newValue)}>
                    </CheckBox>
                </View>
                <View style={styles.btnWrapper}>
                    <TouchableOpacity style={styles.btnGenerate} onPress={generatePassword}>
                        <Text style={styles.btnGenerateTxt}>GENERATE PASSWORD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Lab4_2c;

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        backgroundImage: 'radial-gradient(circle, rgba(196,196,196,1) 0%, rgba(59,59,152,1) 100%)',     
    },
    bgWrapper:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:322,
        height:605,
        backgroundColor:"#23235B",
        borderRadius:15,
    },
    textHeader:{
        width:181,
        height:64,
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:25,
        fontWeight:700,
        lineHeight:29.3,
        textAlign:"center",
        marginTop:39,
        color:"#FFFFFF",
    },
    passwordTxt:{
        width:297,
        height:55,
        backgroundColor:"#151537",
        marginTop:30,
        marginBottom:30,
        color:"#ffffff"
    },
    statusWrapper:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:297,
        height:55,
        marginBottom:8,
    },
    statusTxt:{
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 23.44,
        textAlign: "left",
        color:"#ffffff",
    },
    checkboxTxt:{
        width:25,
        height:25,
    },
    pwLengthTxt:{
        width:118,
        height:33,
        backgroundColor:'#ffffff',
    },
    btnWrapper:{
        width:269,
        height:55,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#3B3B98",

    },
    btnGenerate:{
    },
    btnGenerateTxt:{
        fontFamily:"Roboto",
        fontWeight:700,
        fontSize:18,
        lineHeight:21.09,
        textAlign:"center",
        color:"#FFFFFF",
    }

})