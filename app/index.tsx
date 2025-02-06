import { Text } from "react-native";
import { Header } from "@/components/Header";
import { useState } from "react";
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
    <>
      <Header pingFunction={doPing} state={connectionState} />
    </>
  );
}
