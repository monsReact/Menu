import { TouchableOpacity, View, Text ,StyleSheet,Image, ImageBackground} from 'react-native';
import { useState } from 'react';
import data from "../../public/Menu.json"
import AppLoading from 'expo-app-loading';
import useFonts from '../../hooks/useFonts';
//npm install@expo-google-fonts/name 

/////////////////////////////////////////////////////////


function Home({ navigation }) {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFontsAndRestoreToken = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFontsAndRestoreToken}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <ImageBackground source={{uri :'https://i.pinimg.com/564x/14/01/4e/14014ea363f6efdd24916e196c12dfbc.jpg'}} resizeMode='stretch' style={styles.Home}>
    <View >
        <Text style={styles.Logo}>{data.restaurant_name}</Text>
        <TouchableOpacity style={styles.button} title="Go to Menu" onPress={() => navigation.navigate('Menu',{MenuName:data.menu_sections})}>
          <Text style={styles.HomeText}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} title="Go to About"  onPress={() => navigation.navigate('About')}>
          <Text style={styles.HomeText}>About</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
 
  );
}


//////////////////////////////////////////////

const styles=StyleSheet.create({
Home:{
    // backgroundColor:"green",
    flex:1,
}
,
Logo:{
    color:"white",
    fontFamily:"DancingScript_700Bold",
    fontSize:65,
    textAlign:"center",
    marginTop:20,
    marginBottom:7,
    paddingVertical:30,
},
button:{
    marginHorizontal:60,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:50,
    backgroundColor:"white",
    marginBottom:15,
},
HomeText:{
    fontSize:35,
    textAlign:"center",
    color:"black",
    fontWeight:"500",
    fontFamily:"DancingScript_700Bold",

}
})
export default Home