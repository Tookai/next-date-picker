import {
  Box,
  Flex,
  Heading,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import Calendar from "../components/Calendar";
import { dateStore } from "../store/dateStore";

const Home: NextPage = () => {
  const [date, setDate] = useRecoilState(dateStore);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex width={"100vw"} height={"100vh"} flexDir={"column"}>
      <Heading textAlign={"center"} width={"full"} py={2}>
        Hello world
      </Heading>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width={"full"}
        py={2}
      >
        <Switch
          mx={"auto"}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </Flex>

      <Flex
        flex={2}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
      >
        <Text textAlign={"center"}>
          {date.afterDate && dayjs(date.afterDate).format("dddd DD MMMM YYYY")}
        </Text>
        <Text textAlign={"center"}>
          {date.beforeDate &&
            dayjs(date.beforeDate).format("dddd DD MMMM YYYY")}
        </Text>
        {date.beforeDate && date.afterDate && (
          <Box mt={10}>
            <Text textAlign={"center"}>
              You would be loaning the item for{" "}
              {dayjs(date.beforeDate).diff(dayjs(date.afterDate), "day")}{" "}
              day(s).
            </Text>

            <Text textAlign={"center"}>
              At a rate of 3$ per day, you would pay{" "}
              {dayjs(date.beforeDate).diff(dayjs(date.afterDate), "day") * 3}$.
            </Text>
          </Box>
        )}
      </Flex>

      <Flex justifyContent={"center"} alignItems={"center"} flex={10}>
        <Calendar />
      </Flex>
    </Flex>
  );
};

export default Home;
