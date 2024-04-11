import {View , Image , Text , StyleSheet,TouchableWithoutFeedback, SafeAreaView, FlatList, ScrollView} from 'react-native'
import Colors from '../Shared/Colors'
import { AntDesign } from '@expo/vector-icons';


export default function DetailsCoures({navigation , route}){

    const contentCourse =
    [
        {
            id:'01',
            chapter:'Introduction'
        },
        {
            id:'02',
            chapter:'Variables'
        },
        {
            id:'03',
            chapter:'Data Types'
        },
        {
            id:'04',
            chapter:'Numbers'
        },
        {
            id:'05',
            chapter:'Casting'
        },
        {
            id:'06',
            chapter:'Functions'
        },
        {
            id:'07',
            chapter:'OOP'
        },
    ]
    const handlePress = (chapter , subject , id) => {
        console.log("Clicked on item with subject:", chapter);
        navigation.navigate('chapter', { chapter: chapter , subject: subject , id:id});
    };
    return(
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.title}>
             {route.params.subject}
           </Text>
            
           <View style={styles.image2}>
                <Image
                  source={require('./../Assets/Images/couresImage.png')}
                  style={styles.image}
                />
            </View>

            <Text style={styles.title}>
                About Course
            </Text>

            
            <Text style={styles.text}>
               Python is a general-purpose, high-level programming language. Its design philosophy emphasizes code readability with its notable use of significant whitespace. 
            </Text>

            <Text style={styles.title}>
               Course Content
            </Text>

            <FlatList
               data={contentCourse}
               keyExtractor={(item, index) => item.id}
               renderItem={({ item }) => (
                   <TouchableWithoutFeedback onPress={()=> handlePress(item.chapter,route.params.subject,item.id)}>
                       <View style={styles.card}>
                          {route.params.id === item.id ? (
                               <AntDesign name="checkcircle" size={24} color="green" />
                                ) : (
                                <Text style={styles.id}>{item.id}</Text>
                            )}
                            <Text style={styles.chapter}>{item.chapter}</Text>
                            <AntDesign name="play" size={24} color={Colors.buttonColor} style={{ marginLeft: 'auto' }} />
                        </View>
                    </TouchableWithoutFeedback>
                )}
           />

            </ScrollView>
           
        </View>
    );
}

const styles = StyleSheet.create({
    image2:{
        alignItems:'center',
        justifyContent:'center',
        width:370,
        height:190,
        overflow:'hidden',
        marginHorizontal:20,
        marginVertical:14 ,
        borderRadius:20
    },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title:{
        fontSize:25 ,
        fontWeight:'bold',
        marginStart:18 ,
        marginTop:10
    },
    container:{
        backgroundColor:Colors.homeColor ,
        height:'100%'
    },
    text:{
        fontSize:15 ,
        marginStart:18 ,
        marginTop:10 
    },
    card:{
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:10,
        backgroundColor:'white',
        height:40 ,
        paddingHorizontal:20, 
        alignItems:'center'
    },
    id:{
        fontSize:20 ,
        fontWeight:'700'
    },
    chapter:{
        fontSize:15,
        marginStart:5
    }
})