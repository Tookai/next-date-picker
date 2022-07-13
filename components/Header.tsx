import { Button, Flex, PopoverHeader, Text } from "@chakra-ui/react";

interface IProps {}

const Header = ({}: IProps) => {
  return (
    <PopoverHeader>
      <Flex alignItems={"center"}>
        <Button variant={"unstyled"}> {"<"} </Button>
        <Text>Août</Text>
        <Button variant={"unstyled"}> {">"} </Button>
      </Flex>
    </PopoverHeader>
  );
};

export default Header;
