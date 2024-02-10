import {Text, View, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import ConnexionScreen from './src/screens/ConnexionScreen';
import HomeScreen from './src/screens/HomeScreen';
import Conn from './src/screens/Conn';


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="ConnexionScreen" component={Conn} />
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;


