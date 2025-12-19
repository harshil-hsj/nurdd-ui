import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Text } from 'react-native';

export default function Loading({ visible = true }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={Colors.white} />
      <Text>{"Authenticating"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
   marginVertical: 80,
   height:'50%',
   width:'50%',
    alignItems: "center",
    justifyContent: "center",
    position:'absolute',
    backgroundColor:Colors.green,
    zIndex:1000
  },
});
