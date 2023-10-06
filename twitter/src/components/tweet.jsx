import { useState } from "react";
import {
  Avatar,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";

export const TweetComp = () => {
  const [text, setText] = useState("");
  const { username, email } = useSelector((state) => state.user.value);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  const handleTweet = async () => {
    try {
      const data = {
        username,
        email,
        tweet: text,
      };
      axios.post("http://localhost:2000/tweets", data);
      setText("");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const characterCount = text.length;
  return (
    <Flex
      p="20px"
      gap="20px"
      borderBottom="1px solid"
      borderLeft="1px solid"
      borderRight="1px solid"
      borderColor="gray.100"
    >
      <Avatar name={username} />
      <Flex flexDirection="column" gap="15px" w="100%">
        <Textarea
          placeholder="Apa yang sedang hangat dibicarakan?"
          value={text}
          onChange={handleTextChange}
          fontSize="20px"
        />
        <Divider />
        <Flex align="center" justify="space-between">
          <Flex align="center" gap="10px">
            <Text fontWeight="bold">{characterCount} / 50</Text>
            <CircularProgress
              size="30px"
              color={characterCount > 50 ? "red" : "blue"}
              value={characterCount * 2}
            >
              <CircularProgressLabel fontWeight="bold">
                {characterCount * 2}%
              </CircularProgressLabel>
            </CircularProgress>
          </Flex>
          <Button
            borderRadius="30px"
            w="100px"
            colorScheme="blue"
            isDisabled={characterCount === 0 || characterCount > 50}
            onClick={handleTweet}
          >
            Posting
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
