import { Flex, Heading } from "@chakra-ui/react";
import { ListTweet } from "./listTweet";
import { TweetComp } from "./tweet";

export const BerandaComp = () => {
  return (
    <Flex flexDirection="column">
      <Flex
        h="80px"
        p="0 20px"
        align="center"
        borderBottom="1px solid"
        borderLeft="1px solid"
        borderRight="1px solid"
        borderColor="gray.100"
        position="sticky"
        top="0"
        bgColor="white"
        zIndex={1}
      >
        <Heading fontSize="30px">Beranda</Heading>
      </Flex>
      <TweetComp />
      <ListTweet />
    </Flex>
  );
};
