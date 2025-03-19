import Logo from "../assets/logo.svg";

import { Box } from "./ui/box";
import { Center } from "./ui/center";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

interface AuthHeaderProps {
  title: string;
  subTitle: string;
}

export default function AuthHeader({title, subTitle}: AuthHeaderProps){
  return (
    <Box className="w-full items-center gap-8">
      <Logo width={64} height={64}/>
      <Center>
        <Heading className="font-dmSans font-bold">{title}</Heading>
        <Text className="font-poppins font-regular">{subTitle}</Text>
      </Center>
    </Box>
  )
}