import { Avatar, Flex, Text } from "@chakra-ui/react";
import { BsChat, BsHeart, BsBarChart } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IconTweet } from "./iconTweet";
import axios from "axios";
import { useEffect, useState } from "react";

const TweetDetail = ({ tweet, username, email }) => {
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
      <Flex flexDirection="column" fontSize="20px" w="100%">
        <Flex gap="10px">
          <Text fontWeight="bold">{username}</Text>
          <Text>{email}</Text>
        </Flex>
        <Text>{tweet}</Text>
        <Flex justify="space-between" w="80%" m="5px 0 0" fontSize="18px">
          <IconTweet icon={BsChat} color2="blue.100" color="blue" />
          <IconTweet icon={AiOutlineRetweet} />
          <IconTweet icon={BsHeart} color2="green.100" color="green" />
          <IconTweet icon={BsBarChart} color2="blue.100" color="blue" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export const ListTweet = () => {
  const [tweets, setTweets] = useState([]);
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:2000/tweets?_sort=id&_order=desc"
      );
      setTweets(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Flex flexDirection="column">
      {tweets.map((item, index) => {
        return (
          <TweetDetail
            key={index}
            tweet={item.tweet}
            username={item.username}
            email={item.email}
          />
        );
      })}
    </Flex>
  );
};
