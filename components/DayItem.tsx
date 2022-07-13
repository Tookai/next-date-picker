import { Box, Text, useColorMode } from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";
import { useRecoilState } from "recoil";
import { dateStore } from "../store/dateStore";

interface IProps {
  day: Dayjs;
  dateFor: "afterDate" | "beforeDate";
}

const DayItem = ({ day, dateFor }: IProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [date, setDate] = useRecoilState(dateStore);

  const handleBackgroundColor = (day: Dayjs) => {
    if (date.beforeDate && date.beforeDate.isSame(dayjs(day))) {
      return colorMode === "light" ? "purple.200" : "purple.800";
    }

    if (date.afterDate && date.afterDate.isSame(dayjs(day))) {
      return colorMode === "light" ? "red.200" : "red.800";
    }

    if (date.beforeDate && date.afterDate) {
      if (dayjs(day) < date.beforeDate && dayjs(day) > date.afterDate) {
        return colorMode === "light" ? "green.200" : "green.800";
      }
    }

    if (dayjs(day).month() < dayjs(date.currentDate).month()) {
      return colorMode === "light" ? "gray.100" : "gray.700";
    }
    if (dayjs(day).month() > dayjs(date.currentDate).month()) {
      return colorMode === "light" ? "gray.100" : "gray.700";
    }

    return colorMode === "light" ? "gray.300" : "gray.800";
  };

  const handleClick = () => {
    if (dateFor === "beforeDate") {
      if (date.afterDate) {
        if (day > date.afterDate) {
          setDate({
            ...date,
            beforeDate: day,
          });
        }
      } else {
        setDate({
          ...date,
          beforeDate: day,
        });
      }
    }

    if (dateFor === "afterDate") {
      if (date.beforeDate) {
        if (day < date.beforeDate) {
          setDate({
            ...date,
            afterDate: day,
          });
        }
      } else {
        setDate({
          ...date,
          afterDate: day,
        });
      }
    }
  };

  return (
    <Box
      p={2}
      m={1}
      cursor={"pointer"}
      rounded={"md"}
      bg={handleBackgroundColor(day)}
      onClick={handleClick}
    >
      <Text textAlign={"center"}>{dayjs(day).format("DD")}</Text>
    </Box>
  );
};

export default DayItem;
