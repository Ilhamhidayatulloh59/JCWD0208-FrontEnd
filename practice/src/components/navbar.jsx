import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const data = useSelector((state) => state.users.value);
  return (
    <Flex
      h="80px"
      justifyContent="space-evenly"
      alignItems="center"
      bgColor="green"
      fontWeight="bold"
      color="white"
    >
      <Text as={Link} to="/users">
        Users ({data.length})
      </Text>
      <Text as={Link} to="/">
        Register
      </Text>
    </Flex>
  );
};
