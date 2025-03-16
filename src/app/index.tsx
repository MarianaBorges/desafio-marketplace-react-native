import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Text>login</Text>
      <Link href="/create-account">criar conta</Link>
    </View>
  );
}
