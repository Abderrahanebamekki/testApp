import {View , Image , Text , StyleSheet,TouchableWithoutFeedback, SafeAreaView, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import Colors from '../Shared/Colors'
import { AntDesign } from '@expo/vector-icons';



export default function ChapterDetails({navigation , route}){
    const handlePress = (subject , id) => {
        console.log("Clicked on item with subject: jljlijljmlml");
        navigation.navigate('details', { subject: subject , id : id});
    };
    return(
        <View style={{paddingTop:30}}>
            <Text style={styles.title}>{route.params.chapter}</Text> 
            <Text style={styles.parg}>Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace. </Text>
            <Text style={styles.text}>Input</Text>
            <View style={styles.blackBox}>
               <Text style={styles.inOutPut}>x = 5</Text>
               <Text style={styles.inOutPut}>y = "John"</Text>
               <Text style={styles.inOutPut}>print(type(x))</Text>
               <Text style={styles.inOutPut}>print(type(y))</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.button}>
                <AntDesign name="play" size={24} color="white" style={{marginRight:'auto'}}/>
                <Text style={{fontSize:18 , marginEnd:17}}>
                   Run
                </Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>Output</Text>
            <View style={styles.blackBox}>
               <Text style={styles.inOutPut}>{"<class 'int'>"}</Text>
               <Text style={styles.inOutPut}>{"<class 'str'>"}</Text>
            </View>
            <TouchableOpacity onPress={() => handlePress(route.params.subject , route.params.id)}>
                <View style={styles.buttonF}>
                <Text style={{fontSize:18 , marginEnd:17}}>
                   finshed
                </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    blackBox:{
        backgroundColor:'black',
        paddingVertical:20,
        paddingHorizontal:30,
        marginHorizontal:30,
        opacity:0.75,
        borderRadius:20
    },
    inOutPut:{
        color:'white',
        fontSize:15,
        fontWeight:'700'
    },
    text:{
        marginHorizontal:30 ,
        marginTop:25 ,
        marginBottom:3 ,
        fontSize:26,
        fontWeight:'bold'
    },
    title:{
        marginHorizontal:30,
        fontSize:26,
        fontWeight:'bold'
    },
    parg:{
        marginHorizontal:30,
        fontSize:20
    },
    button:{
        width:100,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row",
        backgroundColor:Colors.buttonColor,
        borderRadius:10,
        marginStart:300,
        marginTop:30,
        paddingStart:20
    },
    buttonF:{
        marginHorizontal:30,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:"row",
        backgroundColor:Colors.buttonColor,
        borderRadius:10,
        marginTop:30,
        paddingStart:20
    }
})

