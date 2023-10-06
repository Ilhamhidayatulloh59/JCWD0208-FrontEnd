import {
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Register } from "../components/register";
import { Login } from "../components/login";

export const Welcome = () => {
  return (
    <Flex>
      <Flex
        flex="1"
        h="100vh"
        justify="center"
        align="center"
        fontWeight="bold"
        fontSize="500px"
      >
        <RiTwitterXFill />
      </Flex>
      <Flex
        flex="1"
        flexDirection="column"
        h="100vh"
        justify="center"
        gap="10px"
      >
        <Heading fontSize="75px">Sedang Tren Saat Ini</Heading>
        <Heading>Bergabunglah Sekarang</Heading>
        <Stack spacing={5} maxW={"md"} w={"full"}>
          <Button w={"full"} colorScheme={"facebook"} leftIcon={<FaFacebook />}>
            <Center>
              <Text>Continue with Facebook</Text>
            </Center>
          </Button>
          <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>
          <Divider />
          <Register />
          <Stack>
            <Heading fontSize="18px">Sudah punya akun ?</Heading>
            <Login />
          </Stack>
        </Stack>
      </Flex>
    </Flex>
  );
};
