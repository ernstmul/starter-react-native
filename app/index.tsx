import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Header } from "@/components/Header";
import { useState } from "react";
import { Card } from "@/components/Card";
import { fontStyles } from "@/styles/font";
import { IconArrowSmRight } from "@/assets/images/IconArrowSmRight";
import { Code } from "@/components/Code";

export default function HomeScreen() {
  const [connectionState, setConnectionState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const doPing = () => {
    setConnectionState("loading");

    //todo this is debug
    setTimeout(() => setConnectionState("idle"), 2000);
  };

  return (
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
            <Code variant={"secondary"}>your app and many more to come</Code>
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
  );
}

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    paddingInline: 20,
    display: "flex",
    gap: 16,
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
