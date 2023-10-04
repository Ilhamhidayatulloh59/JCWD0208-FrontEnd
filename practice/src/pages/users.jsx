import {
  Flex,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import axios from "axios";

export const UserList = ({ reload, setReload }) => {
  const data = useSelector((state) => state.users.value);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/users/${id}`);
      setReload(!reload)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>List account</Heading>
        </Stack>
        <TableContainer>
          <Table variant="striped" colorScheme="green">
            <TableCaption>User Data</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Password</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td w="200px">{item.name}</Td>
                    <Td w="300px">{item.email}</Td>
                    <Td w="300px">{item.password}</Td>
                    <Td>
                      <DeleteIcon
                        boxSize="20px"
                        cursor="pointer"
                        color="green"
                        _hover={{ color: "red" }}
                        onClick={() => handleDelete(item.id)}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Flex>
  );
};
