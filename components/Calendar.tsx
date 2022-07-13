import { Flex } from "@chakra-ui/react";
import Date from "./Date";

interface IProps {}

const Calendar = ({}: IProps) => {
  return (
    <Flex p={5} border={"1px"} rounded={"lg"} experimental_spaceX={10}>
      <Date />
      <Date />
    </Flex>
  );
};

export default Calendar;
