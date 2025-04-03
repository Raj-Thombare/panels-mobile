import DownloadPicture from "@/components/DownloadPicture";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, View, StyleSheet, useColorScheme } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  const theme = useColorScheme() ?? "light";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={styles.headerImage}
            source={{
              uri: "https://i.cdn.newsbytesapp.com/images/l10620241012103206.png",
            }}
          />
        }>
        <View style={styles.container}>
          <FlatList
            data={wallpapers}
            numColumns={2}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.cardWrapper}>
                <ImageCard
                  onPress={() => setSelectedWallpaper(item)}
                  wallpaper={item}
                />
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        </View>
      </ParallaxScrollView>

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
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  headerImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  cardWrapper: {
    flex: 1,
    margin: 5,
  },
});
