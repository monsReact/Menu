import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Dishes from './pages/Menu/subPage/Dish/Dish';
import Dish from './pages/Menu/subPage/Dish/SubDish/SubDish';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Dishes" component={Dishes} options={{title:"The Meal Dishes"}}/>
        <Stack.Screen name="Dish" component={Dish} options={{title:"The Meal Dish"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

