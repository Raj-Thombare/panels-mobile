import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  return (
    <SafeAreaView>
      <Text>Explore page</Text>
      <Link href={"/accountinfo"}>
        <Text>Account Information</Text>
      </Link>
    </SafeAreaView>
  );
}
