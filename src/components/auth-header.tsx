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
        <Heading className="to-background-900">{title}</Heading>
        <Text>{subTitle}</Text>
      </Center>
    </Box>
  )
}