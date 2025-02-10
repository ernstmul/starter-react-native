import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { IconChevronDown } from "@/assets/images/IconChevronDown";
import { IconChevronUp } from "@/assets/images/IconChevronUp";

interface LogsProps {
  toggleBottomSheet: () => void;
  isOpen: boolean;
}

export const Logs = ({ toggleBottomSheet, isOpen }: LogsProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={toggleBottomSheet}>
        <Text>Logs</Text>
        {isOpen ? <IconChevronUp /> : <IconChevronDown />}
      </TouchableOpacity>
      {isOpen && (
        <>
          <View style={styles.logTitle}>
            <Text style={styles.logTitleText}>Project</Text>
          </View>
          <View style={styles.logMeta}>
            <View style={styles.logMetaRow}>
              <View style={styles.logMetaCell}>
                <Text style={styles.label}>Endpoint</Text>
                <Text style={styles.value}>
                  {process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT}
                </Text>
              </View>
              <View style={styles.logMetaCell}>
                <Text style={styles.label}>Project ID</Text>
                <Text style={styles.value}>
                  {process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID}
                </Text>
              </View>
            </View>
            <View style={styles.logMetaRow}>
              <View style={styles.logMetaCell}>
                <Text style={styles.label}>Project name</Text>
                <Text style={styles.value}>
                  {process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME}
                </Text>
              </View>
              <View style={styles.logMetaCell}>
                <Text style={styles.label}>Version</Text>
                <Text style={styles.value}>
                  {process.env.EXPO_PUBLIC_APPWRITE_VERSION}
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  logTitle: {
    paddingInline: 16,
    paddingBlock: 8,
    backgroundColor: "#FAFAFB",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#EDEDF0",
  },
  logTitleText: {
    color: "#97979B",
    fontSize: 14,
  },
  logMeta: {
    display: "flex",
    padding: 16,
    gap: 16,
  },
  logMetaRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  logMetaCell: {
    display: "flex",
    minWidth: 200,
    gap: 8,
  },
  label: {
    color: "#97979B",
    fontSize: 12,
  },
  value: {
    color: "#56565C",
    fontSize: 12,
  },
});
