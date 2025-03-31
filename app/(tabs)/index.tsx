import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Suggested' component={SuggestedScreen} />
      <Tab.Screen name='Liked' component={LikedScreen} />
      <Tab.Screen name='Library' component={LibraryScreen} />
    </Tab.Navigator>
  );
}

function SuggestedScreen() {
  return (
    <View>
      <Text>This is Suggested Screen</Text>
    </View>
  );
}

function LikedScreen() {
  return (
    <View>
      <Text>This is Liked Screen</Text>
    </View>
  );
}

function LibraryScreen() {
  return (
    <View>
      <Text>This is Library Screen</Text>
    </View>
  );
}
