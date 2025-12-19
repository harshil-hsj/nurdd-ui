import { View, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";
import { Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function PopupMessage({ visible = true , message="", isSuccess=true }) {
  if (!visible) return null;
  return (
    <View style={[styles.overlay,{backgroundColor:isSuccess?Colors.green:Colors.red}] } >
      <Ionicons
        name={isSuccess? "checkmark-circle" : "close-circle"}
        size={24}
        color={isSuccess?Colors.green:Colors.black}
        style={{ marginRight: 8 }}
      />
      <Text>{message}</Text>
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
    zIndex:1000
  },
});
