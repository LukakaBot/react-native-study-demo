import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Button, Alert } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color={"orange"}
        title="Press Me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            {
              text: "Yes",
              onPress: () => {
                console.log("Yes");
              },
            },
            {
              text: "No",
              onPress: () => {
                console.log("No");
              },
            },
          ])
        }
      />
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
