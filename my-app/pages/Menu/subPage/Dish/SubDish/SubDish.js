import { View,Text,TouchableOpacity,ScrollView,ImageBackground,StyleSheet } from "react-native"
function Dish({route})
{
    const {subData}=route.params
    const image=subData.image_url
    return(
        <ImageBackground source={{uri:image}} resizeMode='contain' style={sub.contaoner}>
            <Text style={sub.DishName}>{subData.dish_name}</Text>
            <Text style={sub.rating}> rating : {subData.rating}</Text>
            <Text style={sub.description}>{subData.description}</Text>
        </ImageBackground>
    )
   
}
const sub=StyleSheet.create({
    contaoner:{
        flex:1,
        marginBottom:-250,
        paddingTop:10,
    },
    description:{
        fontSize:16,
        paddingHorizontal:2,
        fontSize:25,
        fontFamily:"Gluten_300Light",
        textAlign:'center',
        marginTop:10,
    },DishName:{
        fontFamily:"DancingScript_700Bold",
        fontSize:27,
        color:"navy",
        textAlign:"center"
    },
    rating:{
        fontFamily:"DancingScript_700Bold",
        fontSize:20,
        color:"navy",
        textAlign:"center"
    }

})
export default Dish