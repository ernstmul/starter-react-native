import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LoadingLine } from "@/components/status-lines/LoadingLine";
import { SuccessLine } from "@/components/status-lines/SuccessLine";

interface HeaderProps {
  state?: "idle" | "loading" | "success" | "error";
}

export const Header = ({ state = "success" }: HeaderProps) => {
  const getStateLine = () => {
    switch (state) {
      case "success":
        return <SuccessLine />;
      case "loading":
        return <LoadingLine />;
      default:
        return <></>;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/grid.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        <Image
          source={require("../assets/images/rn.png")}
          style={styles.icon}
        />
        <View style={styles.line}>{getStateLine()}</View>
        <Image
          source={require("../assets/images/appwrite.png")}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 100,
    height: 100,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: 450,
  },
  line: {
    flexGrow: 1,
    width: 100,
  },
  content: {
    height: 450,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingInline: 32,
    maxWidth: 350,
  },
});
