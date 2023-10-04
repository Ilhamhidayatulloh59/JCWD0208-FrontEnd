import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

export const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (data) => {
    try {
      await axios.post("http://localhost:2000/users", data);
      toast({
        title: "Success",
        description: "Register success",
        duration: 2000,
        status: "success",
      });
      navigate("/users");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign up your account</Heading>
        </Stack>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            handleSubmit(values);
            action.resetForm();
          }}
        >
          {(props) => {
            return (
              <Form>
                <Box rounded={"lg"} boxShadow={"lg"} p={8} w="500px">
                  <Stack spacing={4}>
                    <FormControl id="name">
                      <FormLabel>Name</FormLabel>
                      <Input as={Field} name="name" type="text" />
                      <ErrorMessage
                        component="div"
                        style={{ color: "green" }}
                        name="name"
                      />
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Email address</FormLabel>
                      <Input as={Field} name="email" type="email" />
                      <ErrorMessage
                        component="div"
                        style={{ color: "green" }}
                        name="email"
                      />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          as={Field}
                          name="password"
                          type={show ? "text" : "password"}
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() => setShow((show) => !show)}
                          >
                            {show ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <ErrorMessage
                        component="div"
                        style={{ color: "green" }}
                        name="password"
                      />
                    </FormControl>
                    <Stack spacing={10}>
                      <Button
                        bg={"green.400"}
                        color={"white"}
                        _hover={{
                          bg: "green.500",
                        }}
                        type="submit"
                      >
                        Register
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Stack>
    </Flex>
  );
};
