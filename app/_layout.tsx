import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFB" }}>
      <Slot />
    </SafeAreaView>
  );
}
