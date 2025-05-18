import React, { useCallback, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  useColorScheme,
  Pressable,
  Text,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { FontAwesome } from "@expo/vector-icons";

const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? "light";

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["100%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}>
      <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{ flex: 1 }}>
          <Image style={styles.image} source={{ uri: wallpaper.url }} />
          <View style={styles.topbar}>
            <FontAwesome
              onPress={onClose}
              name={"close"}
              size={28}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
            <View style={styles.topbarInner}>
              <FontAwesome
                size={24}
                name='heart'
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
              <FontAwesome
                size={24}
                name='share'
                style={{ marginLeft: 20 }}
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              />
            </View>
          </View>
          <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
          </ThemedView>
          <DownloadButton url={wallpaper.url} />
        </ThemedView>
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton({ url }: { url: string }) {
  const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      onPress={async () => {
        let date = new Date().getTime();
        let fileUri = FileSystem.documentDirectory + `${date}.jpg`;

        try {
          await FileSystem.downloadAsync(url, fileUri);
          const response = await MediaLibrary.requestPermissionsAsync(true);
          if (response.granted) {
            MediaLibrary.createAssetAsync(fileUri);
            alert("Image saved");
          } else {
            console.error("permission not granted");
          }
        } catch (err) {
          console.log("FS Err: ", err);
        }
      }}
      style={{
        backgroundColor: "black",
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 20,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.text,
      }}>
      <FontAwesome
        name={"picture-o"}
        size={24}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        style={{ marginRight: 10 }}
      />
      <ThemedText
        style={{
          fontSize: 20,
          color: "white",
          fontWeight: "500",
        }}>
        Get Wallpaper
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "75%",
    borderRadius: 10,
  },
  topbar: {
    position: "absolute",
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  topbarInner: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    width: "100%",
    paddingVertical: 10,
  },
  text: {
    paddingTop: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
  },
});

export default DownloadPicture;
