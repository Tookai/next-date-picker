import { Box, PopoverBody, SimpleGrid, Text } from "@chakra-ui/react";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { dateStore } from "../store/dateStore";
import DayItem from "./DayItem";

interface IProps {
  dateFor: "beforeDate" | "afterDate";
}

const Body = ({ dateFor }: IProps) => {
  const shortDaysArray = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."];

  // useRecoilState
  const [date, setDate] = useRecoilState(dateStore);

  const [days, setDays] = useState<Dayjs[] | null>(null);
  const [beforeDays, setBeforeDays] = useState<Dayjs[] | null>(null);
  const [afterDays, setAfterDays] = useState<Dayjs[] | null>(null);

  useEffect(() => {
    setAfterDays(null);
    setBeforeDays(null);
    setDays(null);

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
      const startDay = start.day() === 0 ? 7 : start.day();

      const beforeDays = [];
      let day = start;
      for (let index = 1; index < startDay; index++) {
        day = day.subtract(1, "day");
        beforeDays.push(day);
      }

      // reverse array to get correct order
      beforeDays.reverse();

      setBeforeDays(beforeDays);
    }

    // if last day of month is not sunday add days until sunday
    if (end.day() !== 0) {
      const endDay = 7 - end.day();

      const afterDays = [];
      let day = end;
      for (let index = 0; index < endDay; index++) {
        day = day.add(1, "day");
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
            <Text textAlign={"center"}>{day}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <SimpleGrid columns={7}>
        {beforeDays &&
          beforeDays.map((day, index) => (
            <DayItem key={index} day={day} dateFor={dateFor} />
          ))}

        {days &&
          days.map((day, index) => (
            <DayItem key={index} day={day} dateFor={dateFor} />
          ))}

        {afterDays &&
          afterDays.map((day, index) => (
            <DayItem key={index} day={day} dateFor={dateFor} />
          ))}
      </SimpleGrid>
    </PopoverBody>
  );
};

export default Body;
