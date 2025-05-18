import DownloadPicture from "@/components/DownloadPicture";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Pressable,
  useColorScheme,
  StyleSheet,
  Appearance,
  SafeAreaView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native-gesture-handler";

export default function Account() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Header />
        <ThemedView style={{ flex: 1 }}>
          <LoginButtons />
          <ThemeSelector />
          <About />
        </ThemedView>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

function Footer() {
  return (
    <ThemedView style={{ paddingVertical: 12 }}>
      <ThemedText
        style={{ textAlign: "center", fontWeight: "400", fontSize: 14 }}>
        Panels © 2025
      </ThemedText>
      <ThemedText
        style={{ textAlign: "center", fontWeight: "400", fontSize: 14 }}>
        Panels Wallpaper Mobile App LLC.
      </ThemedText>
    </ThemedView>
  );
}

function About() {
  return (
    <ThemedView style={styles.margin}>
      <ThemedText style={styles.textBig}>About</ThemedText>
      <ThemedView style={{ marginTop: 10 }}>
        <Pressable>
          <ThemedText style={{ margin: 10, fontSize: 18 }}>Account</ThemedText>
        </Pressable>
        <Pressable>
          <ThemedText style={{ margin: 10, fontSize: 18 }}>
            Privacy Policy
          </ThemedText>
        </Pressable>
        <Pressable>
          <ThemedText style={{ margin: 10, fontSize: 18 }}>
            Terms of Service
          </ThemedText>
        </Pressable>
        <Pressable>
          <ThemedText style={{ margin: 10, fontSize: 18 }}>Licenses</ThemedText>
        </Pressable>
        <ThemedView
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 10,
          }}>
          <ThemedText style={{ fontSize: 18 }}>Version</ThemedText>
          <ThemedText style={{ fontSize: 14 }}>1.3.1</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

function ThemeSelector() {
  return (
    <ThemedView style={styles.margin}>
      <ThemedText style={styles.textBig}>Settings</ThemedText>
      <ThemedText>Theme</ThemedText>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}>
        <ThemeButton title={"System"} selected={false} colorScheme={null} />
        <ThemeButton title={"Light"} selected={false} colorScheme='light' />
        <ThemeButton title={"Dark"} selected={false} colorScheme='dark' />
      </ThemedView>
    </ThemedView>
  );
}

function ThemeButton({
  title,
  selected,
  colorScheme,
}: {
  selected: boolean;
  title: string;
  colorScheme: "dark" | "light" | null;
}) {
  const theme = useColorScheme();

  return (
    <Pressable
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.icon,
        borderRadius: 5,
        flex: 0.3,
      }}
      onPress={() => {
        Appearance.setColorScheme(colorScheme);
      }}>
      <ThemedText
        style={{ width: "100%", textAlign: "center", fontWeight: "600" }}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

function LoginButtons() {
  const theme = useColorScheme() ?? "light";
  return (
    <>
      <AuthButton
        label={"Sign in"}
        icon={
          <Ionicons
            name={"logo-google"}
            size={24}
            color={theme === "light" ? Colors.light.text : Colors.dark.icon}
          />
        }
      />
      <AuthButton
        label={"Sign in"}
        icon={
          <Ionicons
            name={"logo-apple"}
            size={24}
            color={theme === "light" ? Colors.light.text : Colors.dark.icon}
          />
        }
      />
    </>
  );
}

function Header() {
  return (
    <ThemedView style={styles.topbar}>
      <ThemedText style={styles.textBig}>Panels</ThemedText>
      <ThemedText style={{ fontWeight: "400" }}>
        Sign in to save your data
      </ThemedText>
    </ThemedView>
  );
}

function AuthButton({ label, icon }: { label: string; icon: any }) {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      style={{
        backgroundColor: theme,
        padding: 10,
        marginHorizontal: 40,
        marginVertical: 5,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: theme === "light" ? Colors.light.text : Colors.dark.icon,
      }}>
      {icon}
      <ThemedText
        style={{
          fontSize: 20,
          fontWeight: "700",
          marginLeft: 10,
        }}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textBig: {
    fontSize: 25,
    fontWeight: "600",
  },
  topbar: {
    padding: 20,
  },
  themeSelectorContainer: {
    flex: 1,
  },
  themeSelectorChild: {},
  margin: {
    padding: 20,
    marginTop: 20,
  },
});
