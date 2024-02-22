import {Text, View, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import AuthentificationScreen from './src/screens/Authentification/AuthentificationScreen';
import SingInScreen from './src/screens/Authentification/Components/SingIn';
import SingUpScreen from './src/screens/Authentification/Components/SingUp';
import HomeScreen from './src/screens/Home/HomeScreen';
import Adder from './src/screens/Adder/Adder';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="AuthentificationScreen"
            component={AuthentificationScreen}
          />
          <Tab.Screen name="SingUpScreen" component={SingUpScreen} />
          <Tab.Screen name="SingInScreen" component={SingInScreen} />
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="Adder" component={Adder} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
