import { Flex } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { dateStore } from "../store/dateStore";
import Date from "./Date";

interface IProps {}

const Calendar = ({}: IProps) => {
  const [date, setDate] = useRecoilState(dateStore);

  return (
    <Flex
      p={5}
      border={"1px"}
      rounded={"lg"}
      experimental_spaceX={10}
      width={"60%"}
      justifyContent={"space-evenly"}
    >
      <Date date={date.afterDate} dateFor={"afterDate"} />
      <Date date={date.beforeDate} dateFor={"beforeDate"} />
    </Flex>
  );
};

export default Calendar;
