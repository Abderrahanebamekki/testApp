import { useState } from 'react';
import {View , Image , Text , StyleSheet , TextInput , TouchableWithoutFeedback, FlatList, ScrollView} from 'react-native'
import Colors from '../Shared/Colors'
import { AntDesign } from '@expo/vector-icons';



export default function Home({navigation}){
    const [text , setText] = useState('')
    const handlerInputText = (inputText)=>{
        setText(inputText)
    }
    const couresData = [
        {
            title:'Video Course',
            course:[
                {
                    image: require('./../Assets/Images/coures1.1.png'),
                    subject:'Python Basics',
                    description:'Introdication to Python Basics'
                },
                {
                    image:require('./../Assets/Images/coures1.2.png'),
                    subject:'Python Basics',
                    description:'Introdication to Python Basics'
                }
            ],
        },
        {
            title:'Basic Popular Course',
            course:[
                {
                    image:require('./../Assets/Images/coures1.1.png'),
                    subject:'Python Basics',
                    description:'Introdication to Python Basics'
                },
                {
                    image:('./../Assets/Images/coures1.2.png'),
                    subject:'Python Basics',
                    description:'Introdication to Python Basics'
                }
            ],
        },
        {
            title:'Advance  Courses',
            course:[
                {
                    image:require('./../Assets/Images/coures1.1.png'),
                    subject:'Python Basics',
                    description:'Introdication to Python Basics'
                },
                {
                    image:require('./../Assets/Images/coures1.2.png'),
                    subject:'Python Basics',
                    description:'Introdication to Python Basics'
                }
            ],
        }
    ]


    const handlePress = (subject , id) => {
        console.log("Clicked on item with subject:", subject);
        navigation.navigate('details', { subject: subject , id:id });
    };
    
  

    return(
        <View style={styles.container}>
          <View style={styles.profile}>
            <View style={styles.username}>
                <Text style={styles.text1}>
                  hello
                </Text>
                <Text style={styles.text}>
                  Ahmed Bmk
                </Text>
            </View>
            <View style={styles.imageContainer}>
            <Image
            source={require('./../Assets/Images/profile.png')}
            />
            </View>
            </View>
           <ScrollView>
           <View style={styles.search}>
               <AntDesign name="search1" size={24} color="black" style={{marginStart:-260}} />  
               <TextInput
                 placeholder='search'
                 onChangeText={handlerInputText}
                 value={text}
                 style={{fontSize:20 , marginStart:2}}
               />
            </View>

            <View style={styles.image2}>
                <Image
                  source={require('./../Assets/Images/search.png')}
                  style={styles.image}
                />
            </View>
            <FlatList
        data={couresData}
        renderItem={({ item }) => (
          <View style={styles.hirozantalCard}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <FlatList
              horizontal
              data={item.course}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
               <TouchableWithoutFeedback onPress={()=> handlePress(item.subject , 0)} activeOpacity={3}>
                <View style={styles.card}>
                  <Image source={item.image} style={styles.cardimage} />
                  <Text style={styles.subject}>{item.subject}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
                </TouchableWithoutFeedback>
              )}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
           </ScrollView>
           
           
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.homeColor,
        paddingTop: 10,
        height:'100%',
        width:'100%'
    },
    profile:{
       flexDirection:'row',
       marginTop:10,
       marginStart:20
    },
    username:{
       flexDirection:'column' ,
    },
    text1:{
       fontSize:20 ,
    },
    text:{
        fontSize:20 ,
        fontWeight:'bold'
     },
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imageContainer:{
       alignItems:'center',
       justifyContent:'center',
       width:70,
       height:70,
       borderRadius:50,
       overflow:'hidden',
       marginStart:187 
    },
    search:{
       paddingHorizontal:20,
       marginHorizontal:20,
       marginVertical:15,
       borderColor:'black',
       borderWidth:1,
       borderRadius:10,
       height:60,
       justifyContent:'center',
       backgroundColor:'white' ,
       flexDirection:'row',
       alignItems:'center'
    },
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
    card:{
        width:300,
        height:280,
        overflow:'hidden',
        marginVertical:14 ,
        marginStart:10,
    },
    cardimage:{
        width: '100%',
        height: '70%',
        resizeMode: 'contain', 
    },
    hirozantalCard:{
        marginHorizontal:20
    },
    subject:{
        fontSize:20 ,
        fontWeight:'bold'
    },
    sectionTitle:{
        fontSize:20 ,
        fontWeight:'bold'
    }
});