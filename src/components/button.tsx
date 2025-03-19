import { Button, ButtonText } from "./ui/button";

	
export function MyButton() {
  return (
    <Button size="md" variant="solid" action="primary" >
      <ButtonText>Hello World!</ButtonText>
    </Button>
  );
}