
import { Fontisto, MaterialIcons } from '@expo/vector-icons';
import { Input, InputField, InputIcon, InputSlot } from './ui/input';

interface InputProps {
  isPassword?: boolean;
}

export default ({ isPassword }: InputProps) =>{ 
  return(
    <Input>
      <InputSlot>
        <InputIcon>
          <Fontisto name="email" size={24} color="black" />
        </InputIcon>
      </InputSlot>
      <InputField placeholder={isPassword ? 'Senha' :'E-mail'} type={isPassword ? 'password' :'text'} />
    </Input>
  )
};