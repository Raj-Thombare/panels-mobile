import React, { useCallback, useRef } from "react";
import {
  StyleSheet,
  Image,
  Button,
  useColorScheme,
  View,
  Pressable,
  Text,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

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
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
      enablePanDownToClose>
      <BottomSheetView style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={{
            uri: wallpaper.url,
          }}
        />
        <View style={styles.topbar}>
          <View
            style={{
              borderRadius: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: 4,
            }}>
            <Ionicons
              name='close'
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          </View>

          <View style={styles.innerTopbar}>
            <Ionicons
              name='heart'
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
            <Ionicons
              name='share'
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              style={{ paddingLeft: 4 }}
            />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <ThemedText style={styles.title}>{wallpaper.name}</ThemedText>
        </View>
        <DownloadButton />
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton() {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      style={{
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 40,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
      }}>
      <Ionicons
        name='download'
        size={24}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        style={{ paddingRight: 4 }}
      />
      <Text
        style={{
          color: "white",
          fontWeight: "600",
          fontSize: 18,
        }}>
        Download
      </Text>
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
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  innerTopbar: {
    display: "flex",
    flexDirection: "row",
  },
  titleContainer: {
    width: "100%",
    margin: 4,
  },
  title: {
    paddingTop: 20,
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
  },
});

export default DownloadPicture;
