import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen({ navigation }) {
  // console.log(`fsdasff ${JSON.stringify(props.route.params.myData)}`);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* {this.props.navigation.dangerouslyGetParent().getParam("myData")} */}
      <Text>Home!</Text>
      <Button
        title="Profile"
        onPress={() =>
          navigation.navigate("Profile", {
            myData:
              "J'ai été créé depuis le bouton de la page Home grâce à l'intellect surdimensionné de mon seigneur et maître, Christian",
          })
        }
      />
    </View>
  );
}

function ProfileScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{props.route.params.myData}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{
            myData: "vide",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
