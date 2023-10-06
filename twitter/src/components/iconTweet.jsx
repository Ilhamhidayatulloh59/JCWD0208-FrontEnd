import { Flex, Icon } from "@chakra-ui/react";

export const IconTweet = ({ icon, color = "red", color2 = "red.100" }) => {
  return (
    <Flex
      _hover={{
        bgColor: color2,
        color: color,
        borderRadius: "50%",
      }}
      cursor="pointer"
      p="10px"
    >
      <Icon as={icon} />
    </Flex>
  );
};
