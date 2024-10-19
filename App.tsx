import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  Text,
  useWindowDimensions,
} from "react-native";

export default function App() {
  const window = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ width: "50%", height: 70, backgroundColor: "dodgerblue" }}
      ></View>
      <Text>{`Window Dimensions: height - ${window.height}, width - ${window.width}`}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
