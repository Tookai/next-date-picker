import { Button, Popover, PopoverTrigger } from "@chakra-ui/react";
import Picker from "./Picker";

interface IProps {}

const Date = ({}: IProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant={"unstyled"}>Jeu. 21 Août</Button>
      </PopoverTrigger>
      <Picker />
    </Popover>
  );
};

export default Date;
