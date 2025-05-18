import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LibraryTab from "../library";
import SuggestedTab from "../suggested";
import LikedTab from "../liked";
import { Colors } from "@/constants/Colors";
import { SafeAreaView, StyleSheet, useColorScheme } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const theme = useColorScheme() ?? "light";

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        style={{
          flex: 1,
        }}
        screenOptions={{
          tabBarActiveTintColor: Colors[theme].tint,
          tabBarStyle: {
            backgroundColor: Colors[theme].background,
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors[theme].tint,
          },
        }}>
        <Tab.Screen name='Suggested' component={SuggestedTab} />
        <Tab.Screen name='Liked' component={LikedTab} />
        <Tab.Screen name='Library' component={LibraryTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
