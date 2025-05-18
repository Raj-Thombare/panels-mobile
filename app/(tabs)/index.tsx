import ParallaxScrollView from "@/components/ParallaxScrollView";
import { WallpaperList } from "@/components/WallpaperList";
import { useWallpapers } from "@/hooks/useWallpapers";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Wallpaper } from "@/hooks/useWallpapers";
import DownloadPicture from "@/components/DownloadPicture";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
const data = [...new Array(6).keys()];

export default function Index() {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  const width = Dimensions.get("window").width;
  const progress = useSharedValue<number>(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={styles.headerImage}
            source={{
              uri: "https://i.cdn.newsbytesapp.com/images/l10620241012103206.png",
            }}
          />
        }>
        <SearchBar />
        <WallpaperList
          wallpapers={wallpapers}
          onSelectWallpaper={setSelectedWallpaper}
        />
      </ParallaxScrollView> */}
      <View style={{ flex: 1 }}>
        <Carousel
          width={width}
          height={300}
          data={data}
          onProgressChange={progress}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
              }}>
              <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
            </View>
          )}
        />
        {/* <SearchBar /> */}
        <WallpaperList
          wallpapers={wallpapers}
          onSelectWallpaper={setSelectedWallpaper}
        />
      </View>

      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderEndStartRadius: 20,
  },
});

function SearchBar() {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      style={{
        flex: 0.1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // paddingVertical: 10,
      }}>
      <FontAwesome
        name={"search"}
        size={20}
        color={theme === "light" ? Colors.light.text : Colors.dark.icon}
      />
      <ThemedText style={{ fontSize: 18, fontWeight: "400", marginLeft: 6 }}>
        Search
      </ThemedText>
    </Pressable>
  );
}
