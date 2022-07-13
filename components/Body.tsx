import { Box, PopoverBody, SimpleGrid, Text } from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { dateStore } from "../store/dateStore";

interface IProps {
  dateFor: "beforeDate" | "afterDate";
}

const Body = ({ dateFor }: IProps) => {
  const shortDaysArray = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  // useRecoilState
  const [date, setDate] = useRecoilState(dateStore);

  const [days, setDays] = useState<Dayjs[] | null>(null);
  const [beforeDays, setBeforeDays] = useState<Dayjs[] | null>(null);
  const [afterDays, setAfterDays] = useState<Dayjs[] | null>(null);

  const handleClick = (day: Dayjs) => {
    if (dateFor === "beforeDate") {
      setDate({
        ...date,
        beforeDate: day,
      });
    }

    if (dateFor === "afterDate") {
      setDate({
        ...date,
        afterDate: day,
      });
    }
  };

  const handleBackgroundColor = (day: Dayjs) => {
    if (date.beforeDate && date.beforeDate.isSame(dayjs(day))) {
      return "purple.800";
    }

    if (date.afterDate && date.afterDate.isSame(dayjs(day))) {
      return "red.800";
    }

    if (date.beforeDate && date.afterDate) {
      if (dayjs(day) < date.beforeDate && dayjs(day) > date.afterDate) {
        return "green.800";
      }
    }

    if (dayjs(day).month() < dayjs(date.currentDate).month()) {
      return "gray.500";
    }
    if (dayjs(day).month() > dayjs(date.currentDate).month()) {
      return "gray.500";
    }

    return "gray.900";
  };

  useEffect(() => {
    const start = dayjs(date.currentDate).startOf("month");
    const end = dayjs(date.currentDate).endOf("month");

    let days = [];
    let day = start;
    while (day <= end) {
      days.push(day);
      day = day.add(1, "day");
    }

    setDays(days);

    // if first day of month is not monday add days until monday
    if (start.day() !== 1) {
      const startDay = start.day();

      console.log(startDay);

      const beforeDays = [];
      for (let index = 1; index < startDay; index++) {
        let day = start;
        day = day.subtract(index, "day");
        beforeDays.push(day);
      }

      console.log(beforeDays);

      // reverse array to get correct order
      beforeDays.reverse();

      setBeforeDays(beforeDays);
    }

    // if last day of month is not sunday add days until sunday
    if (end.day() !== 0) {
      const endDay = 7 - end.day();

      console.log(endDay);

      const afterDays = [];
      for (let index = 0; index < endDay; index++) {
        let day = end;
        day = day.add(index + 1, "day");
        afterDays.push(day);
      }

      setAfterDays(afterDays);
    }
  }, [date.currentDate]);

  return (
    <PopoverBody>
      <SimpleGrid columns={7}>
        {shortDaysArray.map((day, index) => (
          <Box key={index} p={2} m={1}>
            <Text>{day}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <SimpleGrid columns={7}>
        {beforeDays &&
          beforeDays.map((day, index) => (
            <Box
              key={index}
              p={2}
              m={1}
              cursor={"pointer"}
              rounded={"md"}
              bg={handleBackgroundColor(day)}
              onClick={() => handleClick(day)}
            >
              <Text>{dayjs(day).format("ddd DD")}</Text>
            </Box>
          ))}

        {days &&
          days.map((day, index) => (
            <Box
              key={index}
              p={2}
              bg={handleBackgroundColor(day)}
              m={1}
              cursor={"pointer"}
              rounded={"md"}
              onClick={() => handleClick(day)}
            >
              <Text textAlign={"center"}>{dayjs(day).format("ddd DD")}</Text>
            </Box>
          ))}

        {afterDays &&
          afterDays.map((day, index) => (
            <Box
              key={index}
              p={2}
              m={1}
              cursor={"pointer"}
              rounded={"md"}
              bg={handleBackgroundColor(day)}
              onClick={() => handleClick(day)}
            >
              <Text>{dayjs(day).format("ddd DD")}</Text>
            </Box>
          ))}
      </SimpleGrid>
    </PopoverBody>
  );
};

export default Body;
