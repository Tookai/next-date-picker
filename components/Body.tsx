import { Box, PopoverBody, SimpleGrid, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getDaysInMonth } from "../utils/calendar";

interface IProps {}

const Body = ({}: IProps) => {
  const shortDaysArray = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const daysArray = Array.from(Array(31).keys()).map((i) => i + 1);

  const [days, setDays] = useState<Date[] | null>(null);

  useEffect(() => {
    const days = getDaysInMonth(new Date());
    setDays(days);
  }, []);

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
        {days &&
          days.map((day, index) => (
            <Box key={index} p={2} bg={"gray.900"} m={1} rounded={"md"}>
              <Text textAlign={"center"}>{dayjs(day).format("DD")}</Text>
            </Box>
          ))}
      </SimpleGrid>
    </PopoverBody>
  );
};

export default Body;
