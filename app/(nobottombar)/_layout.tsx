import { Text, View } from "react-native";
import { Link, Slot } from "expo-router";

export default function RootLayout() {
  return (
    <View>
      <View style={{ backgroundColor: "black" }}>
        <Link href='/'>
          <Text style={{ color: "white" }}>Go Back</Text>
        </Link>
      </View>
      <Slot />
    </View>
  );
}
