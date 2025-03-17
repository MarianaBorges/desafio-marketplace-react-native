import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Text>Home</Text>
          <Link href="/(tabs)/product/1">produto</Link>
    </View>
  );
}

