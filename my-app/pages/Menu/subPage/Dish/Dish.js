import { View,Text,TouchableOpacity,ScrollView ,ImageBackground,StyleSheet} from "react-native"
import Dish from "./SubDish/SubDish"
function Dishes({navigation,route})
{
    const {Data}=route.params
return(
    <ImageBackground source={{uri:'https://i.pinimg.com/564x/ea/a3/45/eaa34582ea7f0551d593437efb014cf4.jpg'}} resizeMode="cover" style={DishMenu.DishesContainer}>
      <View style={DishMenu.DishCover}>
       <Text style={DishMenu.Header}>{Data.section_name} Menu</Text>
       <View>
        <ScrollView>
            { 
            Data.dishes.map((item)=>{return(
                <TouchableOpacity key={item.dish_name} onPress={()=>navigation.navigate('Dish',{subData:item})} style={DishMenu.TextContainer}>
                    <Text style={DishMenu.DishText}>{item.dish_name} </Text>
                    <Text style={DishMenu.DishText}>{item.price}</Text>
                </TouchableOpacity>
        )})}
        </ScrollView>
        </View>
        </View>
    </ImageBackground>
)
}//item mean one object
const DishMenu=StyleSheet.create({
    DishesContainer:{
        flex:1,
    },
    DishCover:{
        marginVertical:170,
    },
    Header:{
        color:"white",
        fontSize:27,
        textAlign:"center",
        fontFamily:"Gluten_400Regular",
        marginBottom:30,
    },
    TextContainer:{
        flexDirection:"row",
        justifyContent:"space-around" ,
        alignItems:"center",
        paddingHorizontal:10,
        paddingVertical:10,
        marginHorizontal:50,
        backgroundColor:"white",
        borderRadius:20,
        marginBottom:10,
      },
    DishText:{
        fontFamily:"DancingScript_700Bold",
        fontSize:22,
        color:"black"
    }
})
export default Dishes