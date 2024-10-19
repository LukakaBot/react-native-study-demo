import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native - Hello React Native - Hello React Native - Hello
        React Native - Hello React Native - Hello React Native - Hello React
        Native
      </Text>
      <Button
        color={"orange"}
        title="Press Me"
        onPress={() => console.log("Button Pressed")}
      />
      <TouchableWithoutFeedback onPress={() => console.log("Image Pressed")}>
        <Image
          fadeDuration={1000}
          source={{
            width: 100,
            height: 100,
            uri: "https://picsum.photos/100/100",
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => console.log("Image Pressed")}>
        <Image
          fadeDuration={1000}
          source={{
            width: 100,
            height: 100,
            uri: "https://picsum.photos/100/100",
          }}
        />
      </TouchableOpacity>
      <TouchableHighlight onPress={() => console.log("Image Pressed")}>
        <Image
          fadeDuration={1000}
          source={{
            width: 100,
            height: 100,
            uri: "https://picsum.photos/100/100",
          }}
        />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View
          style={{ width: 100, height: 100, backgroundColor: "dodgerblue" }}
        />
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
