import { StyleSheet, Text, View } from "react-native";

export default function DenemeScreen() {
  return (
    <View style={styles.container}>
      <Text>Deneme Pagess</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});