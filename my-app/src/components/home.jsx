import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onDone, onAdd, onDelete } from "../redux/todo";

export const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.value);
  const itemRef = useRef();
  const toast = useToast();

  const handleAdd = () => {
    let task = itemRef.current.value;
    if (task === "") {
      toast({
        title: "Error",
        description: "Invalid Task",
        status: "error",
        duration: 1000,
        position: "top-left",
        isClosable: true,
      });
    } else if (list.findIndex((v) => v.task === task) !== -1) {
      toast({
        title: "Error",
        description: "Duplicate Task",
        status: "error",
        duration: 1000,
        position: "top-left",
        isClosable: true,
      });
    } else {
      dispatch(onAdd([...list, { task: task, isDone: false }]));
    }
    itemRef.current.value = "";
  };

  const handleDelete = (index) => {
    dispatch(onDelete(index))
  };

  const handleDone = (index) => {
    dispatch(onDone(index))
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
        <Button colorScheme="teal" onClick={handleAdd}>
          <AddIcon />
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
                isChecked={value?.isDone}
                onChange={() => handleDone(index)}
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
                onClick={() => handleDelete(index)}
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
};
