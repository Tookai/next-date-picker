import { PopoverArrow, PopoverCloseButton, PopoverContent } from "@chakra-ui/react";
import Body from "./Body";
import Header from "./Header";

interface IProps {
  dateFor: "afterDate" | "beforeDate";
}

const Picker = ({ dateFor }: IProps) => {
  return (
    <PopoverContent width={"auto"}>
      <PopoverArrow />
      <PopoverCloseButton />
      <Header dateFor={dateFor}  />
      <Body dateFor={dateFor} />
    </PopoverContent>
  );
};

export default Picker;
