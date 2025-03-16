import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Product() {
  const { id } = useLocalSearchParams()

  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Text>Product: {id}</Text>
    </View>
  )
}
