import {View , Image , Text , StyleSheet,TouchableWithoutFeedback, SafeAreaView} from 'react-native'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';



export default function Login({navigation}){
    return(
        <SafeAreaView>
            <View style={{flex:1 , height:'100%' , marginTop:-50}}>
            <Image
            source={require('./../Assets/Images/Login.png')}
            style={styles.image}
            />
            <View style={styles.container}>
               <Text style={styles.text}>
                Welcome to Education App
               </Text>
               <Text style={{
                textAlign:'center',
                marginTop:40 ,
                fontSize:20
               }}>
                 Login/Singup
               </Text>

               
                <TouchableWithoutFeedback onPress={()=>navigation.navigate('home')} activeOpacity={3}>
                  <View style={styles.button}>
                    <Ionicons name="logo-google" size={26} color="white" style={{marginRight:10}} />
                    <Text style={{textAlign:'center' , fontSize:14 , color:'white'}}>
                         Sing In with Google
                    </Text>
                  </View>  
                </TouchableWithoutFeedback>
            </View>

        </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
       paddingTop:10 ,
       marginTop:-60,
       backgroundColor:'#fff',
       borderTopRightRadius:40,
       borderTopLeftRadius:40,
       height:800
    },
    image:{
        width: '100%', // Adjust width as needed
        height:300, // Adjust height as needed
        resizeMode: 'contain', // Ensure the image fits within its container , 
        marginTop:21
    },
    text:{
        fontSize: 35,
        color:'black',
        textAlign:'center',
        fontWeight:'bold'
    },
    button:{
       backgroundColor:Colors.primary ,
       padding:10,
       marginHorizontal:60 , 
       marginVertical:30 , 
       display: 'flex' ,
       flexDirection:'row' ,
       justifyContent :'center' ,
       alignContent:'center' ,
       borderRadius:15
    }
})
