import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsBookmark, BsPerson } from "react-icons/bs";
import { RiTwitterXFill, RiMoreFill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SideBarComp = ({ icon, desc, id }) => {
  return (
    <Flex
      h="60px"
      p="30px"
      align="center"
      w="300px"
      gap="20px"
      borderRadius="30px"
      _hover={{ bgColor: "gray.100" }}
      cursor="pointer"
      key={id}
    >
      <Icon w="7" h="7" as={icon} />
      <Text fontSize="20px" fontWeight="bold">
        {desc}
      </Text>
    </Flex>
  );
};

export const Sidebar = () => {
  const user = useSelector((state) => state.user.value);
  const handleLogout = () => {
    localStorage.removeItem("id");
    window.location.reload();
  };

  const SideItem = [
    { icon: AiOutlineHome, desc: "Beranda" },
    { icon: AiOutlineMessage, desc: "Pesan" },
    { icon: BsBookmark, desc: "Markah" },
    { icon: BsPerson, desc: "Profile" },
  ];

  return (
    <Flex h="100vh" flexDirection="column">
      <Flex
        flexDirection="column"
        gap="10px"
        m="100px 0 0 20%"
        position="sticky"
        top="100px"
      >
        <Flex
          h="60px"
          p="30px"
          align="center"
          w="90px"
          gap="20px"
          borderRadius="30px"
          _hover={{ bgColor: "gray.100" }}
          cursor="pointer"
        >
          <Icon w="7" h="7" as={RiTwitterXFill} />
        </Flex>
        {SideItem.map((item, index) => {
          return <SideBarComp icon={item.icon} desc={item.desc} id={index} />;
        })}
        <Flex
          h="60px"
          p="30px"
          align="center"
          justify="center"
          w="300px"
          gap="20px"
          borderRadius="30px"
          _hover={{ bgColor: "blue.400" }}
          cursor="pointer"
          color="white"
          bgColor="blue.300"
        >
          <Text fontSize="20px" fontWeight="bold">
            Posting
          </Text>
        </Flex>
        <Flex
          h="70px"
          align="center"
          justify="space-between"
          w="300px"
          p="15px"
          gap="20px"
          borderRadius="40px"
          _hover={{ bgColor: "gray.100" }}
          cursor="pointer"
          position="fixed"
          bottom="20px"
          onClick={handleLogout}
        >
          <Flex gap="15px">
            <Avatar name={user.username} />
            <Box>
              <Text fontWeight="bold">{user.username}</Text>
              <Text>{user.email}</Text>
            </Box>
          </Flex>
          <Icon w="7" h="7" as={RiMoreFill} />
        </Flex>
      </Flex>
    </Flex>
  );
};
