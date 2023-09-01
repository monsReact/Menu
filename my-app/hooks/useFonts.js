import * as Font from 'expo-font';
import {
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
  } from '@expo-google-fonts/dancing-script';
  import {
    Gluten_100Thin,
    Gluten_200ExtraLight,
    Gluten_300Light,
    Gluten_400Regular,
    Gluten_500Medium,
    Gluten_600SemiBold,
    Gluten_700Bold,
    Gluten_800ExtraBold,
    Gluten_900Black,
  } from '@expo-google-fonts/gluten';
const useFonts = async () => {
  await Font.loadAsync({
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    Gluten_100Thin,
    Gluten_200ExtraLight,
    Gluten_300Light,
    Gluten_400Regular,
    Gluten_500Medium,
    Gluten_600SemiBold,
    Gluten_700Bold,
    Gluten_800ExtraBold,
  });
};

export default useFonts;