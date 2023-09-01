import { StyleSheet, Text, View,ImageBackground,ScrollView,TouchableOpacity } from 'react-native';
import Dishes from './subPage/Dish/Dish';
function Menu({ navigation,route})
{
    const {MenuName} = route.params;
   return(
        <ImageBackground source={{uri:'https://i.pinimg.com/564x/ea/a3/45/eaa34582ea7f0551d593437efb014cf4.jpg'}} resizeMode='cover' style={Mainmenu.main}>
            <View style={Mainmenu.MenuContainer}>
                <ScrollView>
                    {MenuName.map((item)=>{
                        return(
                            <TouchableOpacity key={item.section_name} onPress={()=>navigation.navigate('Dishes',{Data:item})} style={Mainmenu.MenuTextContainer}>
                                <Text style={Mainmenu.MenuHeader}>
                                    {item.section_name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </ImageBackground>
   )
}//item mean array of main dish
const Mainmenu =StyleSheet.create({
   main:{
        flex:1,
     },
    button:{
        marginHorizontal:100,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:40,
        backgroundColor:"white",
        marginBottom:18,
    },
    MenuContainer:{
        marginTop:230,
        marginHorizontal:60,

    },
    MenuHeader:{
        color:"black",
        fontSize:34,
        textAlign:"center",
        fontFamily:"DancingScript_700Bold"
    },
    MenuTextContainer:{
        paddingHorizontal:10,
        backgroundColor:"white",
        marginBottom:25,
        paddingBottom:7,
        paddingTop:2,
        borderRadius:20,
    }
})
export default Menu