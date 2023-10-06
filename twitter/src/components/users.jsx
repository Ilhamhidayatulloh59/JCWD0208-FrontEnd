import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const id = localStorage.getItem("id");
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:2000/users?id_ne=${id}`
      );
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);
  return (
    <Flex
      flexDirection="column"
      bgColor="gray.100"
      p="10px 10px 10px 30px"
      m="10px"
      w="80%"
      borderRadius="10px"
      position="sticky"
      top="10px"
    >
      <Heading fontSize="24px" m="10px 0">
        Untuk diikuti
      </Heading>
      {users.map((item) => {
        return (
          <Flex
            h="70px"
            align="center"
            justify="space-between"
            p="15px"
            gap="20px"
            borderRadius="40px"
            key={item.id}
          >
            <Flex gap="15px">
              <Avatar name={item.username} />
              <Box>
                <Text fontWeight="bold">{item.username}</Text>
                <Text>{item.email}</Text>
              </Box>
            </Flex>
            <Button
              bgColor="black"
              color="white"
              _hover={{ bgColor: "blackAlpha.500" }}
              borderRadius="30px"
              w="100px"
            >
              Ikuti
            </Button>
          </Flex>
        );
      })}
    </Flex>
  );
};
