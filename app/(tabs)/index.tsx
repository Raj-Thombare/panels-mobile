import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LibraryTab from "../library";
import SuggestedTab from "../suggested";
import LikedTab from "../liked";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Suggested' component={SuggestedTab} />
      <Tab.Screen name='Liked' component={LikedTab} />
      <Tab.Screen name='Library' component={LibraryTab} />
    </Tab.Navigator>
  );
}

