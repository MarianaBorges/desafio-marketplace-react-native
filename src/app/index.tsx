import { Link } from 'expo-router';
import { VStack } from '@/src/components/ui/vstack';
import AuthHeader from '../components/auth-header';
import Input from '../components/input';

export default function LoginScreen() {
  return (
    <VStack className='flex-1 justify-center items-center'>
      <AuthHeader 
        title='Acesse sua conta' 
        subTitle='Informe seu e-mail e senha para entrar' 
      />
      <Link href="/create-account">criar conta</Link>

      <Input isPassword/>
      <Button
    </VStack>
  );
}
