import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import Logo from '../assets/logo.svg'

export default function LoginScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Logo width={40} height={40} />
      <Text>login</Text>
      <Link href="/create-account">criar conta</Link>
    </View>
  );
}
