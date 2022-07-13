import { Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Calendar from "../components/Calendar";

const Home: NextPage = () => {
  return (
    <Flex width={"100vw"} height={"100vh"} flexDir={"column"}>
      <Heading textAlign={"center"} width={"full"} py={2}>
        Hello world
      </Heading>

      <Flex justifyContent={"center"} alignItems={"center"} flex={1}>
        <Calendar />
      </Flex>
    </Flex>
  );
};

export default Home;
