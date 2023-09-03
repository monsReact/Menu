import Hyperlink from "react-native-hyperlink";
import useFonts from '../../hooks/useFonts';
import { StyleSheet, Text, View,Image,ScrollView} from 'react-native';

function About()
{
return(
    
     <View>
        <ScrollView>
        <Text style={styles.about}>About us</Text>
        {/* <Image source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.nisantasi.com.eg%2F&psig=AOvVaw28kdFwS28I0qjyli2U2wlq&ust=1693650563189000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjPuKKaiYEDFQAAAAAdAAAAABAE'}} resizeMode='stretch'>
        </Image> */}
        <Text style={styles.subab}> Steak For C++ a Turkish cuisine destination in Cairo, is owned by the International Food Academy The restaurant is run by a team of travel enthusiasts who have spent years searching for the secrets of the gastronomy of Turkey and the world. </Text>
        
        <Image style={styles.imageRight} source={require('../../assets/interior-design.jpg')}/>
       
        <Text style={styles.subab}>The name Steak For C++ originally refers to an area in Sisli on the European side of Istanbul, which is considered one of the cities full of different cultures, where food cultures from all over Turkey have gathered and the concept of food has developed and the principle that it is just food has been transcended.</Text>
        <Image style={styles.imageLeft}source={require('../../assets/turk-mutfaginin-benzersiz.jpg')}/>
       <Text style={styles.subab}> From here,Steak For C++ menu was launched, which is full of history and different cooking techniques, and displays a variety of dishes of Turkish cuisine rich in its distinctive flavors and varieties, where various Turkish baked goods and delicious fresh meats are carefully selected.So each dish on our menu is made distinct differently from the other.</Text>
       <Image style={styles.imageRight} source={require('../../assets/nisantasi-baskose.jpg')}/>
       <Text style={styles.subab}>The menu has been carefully and meticulously designed to satisfy all tastes, and this is what our team of Turkish chefs who have experience, passion and love of gastronomy has done so that we can provide authentic Turkish food and taste.</Text>
       <Image style={styles.imageLeft}source={require('../../assets/sushico-nisantasi.jpg')}/>
       <Hyperlink style={styles.subabd} linkDefault={true}><Text>If you want to visit us there is our address: </Text>https://www.google.com/maps/place/Ni%C5%9Fanta%C5%9Fi+Citystars/data=!4m7!3m6!1s0x14583fd74e95ad95:0x4f2b75008595324a!8m2!3d30.0730583!4d31.3454929!16s%2Fg%2F11h3b2kjkl!19sChIJla2VTtc_WBQRSjKVhQB1K08?authuser=0&hl=en&rclk=1</Hyperlink>
       <Hyperlink style={styles.subabd} linkDefault={true}><Text>Another address: </Text>https://www.google.com/maps/place/Ni%C5%9Fanta%C5%9Fi+Cairo+Festival+City+Mall/data=!4m7!3m6!1s0x14583d6203259987:0x17c3f6a70d2e4c2e!8m2!3d30.0283965!4d31.4090701!16s%2Fg%2F11lgg4_d4m!19sChIJh5klA2I9WBQRLkwuDaf2wxc?authuser=0&hl=en&rclk=1</Hyperlink>

      </ScrollView>
        
    </View>
)
}
export default About
const styles=StyleSheet.create({
    about:{
        color:"black",
        backgroundColor:"gray",
        fontFamily:"DancingScript_700Bold",
        fontSize:65,
        textAlign:"center",
        // marginTop:20,
        marginBottom:7,
        paddingVertical:30,
    },
    subab:{
        fontSize:25,
        // textAlign:"left",
        fontFamily:"CaveatBrush_400Regular",
        marginTop:20,
        marginBottom:20,
        textAlign:"center"
        // paddingVertical:30,
    },
    subabd:{
        fontFamily:"DancingScript_700Bold",
        // marginTop:20,
        marginLeft:10,
        marginBottom:20,
    },
    imageRight:{
        marginHorizontal:20,
        marginLeft:60,
        borderRadius:10,
        marginBottom:40,
        width:"80%"
    },
    imageLeft:{
        marginHorizontal:20,
        borderRadius:10,
        marginBottom:40,
        width:"80%"

    },
});
