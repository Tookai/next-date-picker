import {
  Box,
  Flex,
  Heading,
  Link,
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
    <Flex
      width={"100vw"}
      height={"100vh"}
      flexDir={"column"}
      experimental_spaceY={16}
    >
      <Heading textAlign={"center"} width={"full"} py={2}>
        Hello world
      </Heading>

      <Flex justifyContent={"center"} alignItems={"center"} width={"full"}>
        <Switch
          mx={"auto"}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
      </Flex>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        width={"full"}
        flexDir={"column"}
      >
        <Text fontSize={"2xl"}>Github repository:</Text>
        <Link
          fontSize={"lg"}
          href={"https://github.com/Tookai/next-date-picker"}
          textDecoration={"underline"}
          target={"_blank"}
        >
          Next.JS Date Picker
        </Link>

        <Text fontSize={"xs"} opacity={"0.5"}>
          With TypeScript, Chakra.UI & DayJS
        </Text>
      </Flex>

      <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
        {date.beforeDate && date.afterDate && (
          <Box>
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

      <Flex justifyContent={"center"} alignItems={"center"}>
        <Calendar />
      </Flex>
    </Flex>
  );
};

export default Home;
