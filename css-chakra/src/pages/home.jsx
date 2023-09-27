import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";

function Home() {
  const [list, setList] = useState([]);
  const itemRef = useRef();
  const toast = useToast();

  const onAdd = () => {
    let task = itemRef.current.value;
    if (task === "") {
      toast({
        title: "Error",
        description: "Invalid Task",
        status: "error",
        duration: 1000,
        position: 'top-left',
      });
    } else {
      setList([...list, { task: task, isDone: false }]);
    }
    itemRef.current.value = "";
  };

  const onDelete = (index) => {
    let newList = [...list]
    newList.splice(index, 1)
    setList([...newList])
  };

  const onDone = (index) => {
    let newList = [...list]
    newList[index].isDone = !newList[index].isDone
    setList([...newList])
  };

  return (
    <Box>
      <Flex
        justifyContent="center"
        h="100px"
        alignItems="center"
        fontSize="6xl"
        fontWeight="bold"
      >
        <Text color="teal.500">To Do List App</Text>
      </Flex>
      <Flex justifyContent="center" gap="10px" alignItems="center">
        <Input
          w="500px"
          h="50px"
          placeholder="add your task here"
          border="3px solid teal"
          ref={itemRef}
        />
        <Button colorScheme="teal" onClick={onAdd}>
          add
        </Button>
      </Flex>
      <Flex
        margin="20px 0"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        color="teal"
        fontSize="22px"
        fontWeight="bold"
      >
        <Text>Task : {list.length}</Text>
        <Text>Done : {list.filter((item) => item.isDone === true).length}</Text>
      </Flex>
      <Flex flexDir="column" alignItems="center" gap="10px" margin="20px 0">
        {list.map((value, index) => {
          return (
            <Flex gap="10px" key={index}>
              <Checkbox
                colorScheme="teal"
                size="lg"
                onChange={() => onDone(index)}
              />
              <Flex
                w="600px"
                h="60px"
                border="2px solid teal"
                justifyContent="center"
                alignItems="center"
                borderRadius="10px"
                color="teal"
                fontSize="24px"
                fontWeight="bold"
              >
                {value.task}
              </Flex>
              <Button
                onClick={() => onDelete(index)}
                w="60px"
                fontSize="24px"
                colorScheme="teal"
                h="60px"
              >
                <DeleteIcon />
              </Button>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Home;
