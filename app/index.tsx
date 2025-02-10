import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Header } from "@/components/Header";
import { useRef, useState } from "react";
import { Card } from "@/components/Card";
import { fontStyles } from "@/styles/font";
import { IconArrowSmRight } from "@/assets/images/IconArrowSmRight";
import { Code } from "@/components/Code";
import { Logs } from "@/components/Logs";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import bottomSheet from "@gorhom/bottom-sheet/src";

export default function HomeScreen() {
  const [connectionState, setConnectionState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [currentSnapIndex, setCurrentSnapIndex] = useState<number>(0);
  const doPing = () => {
    setConnectionState("loading");

    //todo this is debug
    setTimeout(() => setConnectionState("idle"), 2000);
  };

  const toggleBottomSheet = () => {
    if (bottomSheetRef.current) {
      const newIndex = currentSnapIndex === 1 ? 0 : 1;
      setCurrentSnapIndex(newIndex);
      bottomSheetRef.current.snapToIndex(newIndex);
    }
  };

  const handleSnapChange = (index: number) => {
    setCurrentSnapIndex(index);
  };

  return (
    <View style={{ flex: 1 }}>
      <GestureHandlerRootView>
        <ScrollView>
          <Header pingFunction={doPing} state={connectionState} />
          <View style={styles.cardContainer}>
            <Card>
              <View style={styles.cardHeader}>
                <Text style={fontStyles.titleM}>Edit your app</Text>
              </View>
              <Text>
                <Code variant={"secondary"}>Edit </Code>
                <Code variant={"primary"}>app/index.tsx</Code>
                <Code variant={"secondary"}> to get started with building</Code>
                <Code variant={"secondary"}>
                  your app and many more to come
                </Code>
              </Text>
            </Card>
            <Card href={"https://cloud.appwrite.io"}>
              <View style={styles.cardHeader}>
                <Text style={fontStyles.titleM}>Go to console</Text>
                <IconArrowSmRight />
              </View>
              <Text style={fontStyles.bodyM}>
                Navigate to the console to control and oversee the Appwrite
                services.
              </Text>
            </Card>
            <Card href={"https://appwrite.io/docs"}>
              <View style={styles.cardHeader}>
                <Text style={fontStyles.titleM}>Explore docs</Text>
                <IconArrowSmRight />
              </View>
              <Text style={fontStyles.bodyM}>
                Discover the full power of Appwrite by diving into our
                documentation.
              </Text>
            </Card>
          </View>
        </ScrollView>
        <BottomSheet
          index={0}
          snapPoints={["50%", "90%"]}
          enablePanDownToClose={false}
          handleComponent={null}
          ref={bottomSheetRef}
          onChange={handleSnapChange}
        >
          <BottomSheetView style={styles.bottomSheet}>
            <Logs
              toggleBottomSheet={toggleBottomSheet}
              isOpen={currentSnapIndex > 0}
            />
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    borderTopWidth: 1,
    minHeight: 70,
    flex: 1,
    borderColor: "#EDEDF0",
  },
  cardContainer: {
    paddingInline: 20,
    display: "flex",
    gap: 16,
  },
  scrollview: {
    height: 200,
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  editDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
