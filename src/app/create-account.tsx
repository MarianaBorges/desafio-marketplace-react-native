import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function CreateAccountScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Text>Criar conta</Text>
      <Link href="/(tabs)">Home</Link>
    </View>
  );
}
