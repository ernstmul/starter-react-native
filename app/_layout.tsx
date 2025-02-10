import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

export default function HomeLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFB" }}>
      <Slot />
    </View>
  );
}
