import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ImageCard } from "./ImageCard";
import { Wallpaper } from "@/hooks/useWallpapers";

export function WallpaperList({
  wallpapers,
  onSelectWallpaper,
}: {
  wallpapers: Wallpaper[];
  onSelectWallpaper: (wallpaper: Wallpaper) => void;
}) {
  const paddedWallpapers =
    wallpapers.length % 2 === 1 ? [...wallpapers, null] : wallpapers;

  return (
    <View style={styles.container}>
      <FlatList
        data={paddedWallpapers}
        numColumns={2}
        scrollEnabled={true}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            {item ? (
              <ImageCard
                onPress={() => onSelectWallpaper(item)}
                wallpaper={item}
              />
            ) : (
              <View style={{ flex: 1 }} />
            )}
          </View>
        )}
        keyExtractor={(item, index) => item?.name ?? `placeholder-${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 2,
  },
  cardWrapper: {
    flex: 1,
    margin: 5,
  },
});
