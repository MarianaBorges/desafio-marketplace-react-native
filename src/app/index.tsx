import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import Logo from '../assets/logo.svg'
import { VStack } from '@/src/components/ui/vstack';
import AuthHeader from '../components/auth-header';

export default function LoginScreen() {
  return (
    <VStack className='flex-1 justify-center items-center'>
      <AuthHeader 
        title='Acesse sua conta' 
        subTitle='Informe seu e-mail e senha para entrar' 
      />
      <Link href="/create-account">criar conta</Link>
    </VStack>
  );
}
