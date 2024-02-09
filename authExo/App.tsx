import {Text, View, TextInput, Button} from 'react-native';
import Meteo from './Meteo';
import Conn from './Conn';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Conn" component={Conn} />
        <Tab.Screen name="Meteo" component={Meteo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
