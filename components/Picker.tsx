import { PopoverCloseButton, PopoverContent } from "@chakra-ui/react";
import Body from "./Body";
import Header from "./Header";

interface IProps {}

const Picker = ({}: IProps) => {
  return (
    <PopoverContent width={"auto"}>
      <PopoverCloseButton />
      <Header />
      <Body />
    </PopoverContent>
  );
};

export default Picker;
