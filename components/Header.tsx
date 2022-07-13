import { Button, Flex, PopoverHeader, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { dateStore } from "../store/dateStore";

interface IProps {
  dateFor: "afterDate" | "beforeDate";
}

const Header = ({ dateFor }: IProps) => {
  const [date, setDate] = useRecoilState(dateStore);

  const handlePreviousMonth = () => {
    setDate({
      ...date,
      currentDate: date.currentDate.subtract(1, "month"),
    });
  };

  const handleNextMonth = () => {
    setDate({
      ...date,
      currentDate: date.currentDate.add(1, "month"),
    });
  };

  return (
    <PopoverHeader>
      <Flex alignItems={"center"}>
        <Button variant={"unstyled"} onClick={handlePreviousMonth}>
          {"<"}
        </Button>
        <Text>{dayjs(date.currentDate).format("MMMM YYYY")}</Text>
        <Button variant={"unstyled"} onClick={handleNextMonth}>
          {">"}
        </Button>

        <Text flex={1} textAlign={"center"}>
          {dateFor === "afterDate" ? "After this date" : "Before this date"}
        </Text>
      </Flex>
    </PopoverHeader>
  );
};

export default Header;
