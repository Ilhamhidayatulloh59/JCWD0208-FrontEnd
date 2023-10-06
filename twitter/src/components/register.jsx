import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .min(4, "Minimum 4 character")
    .required("Password is required"),
});

export const Register = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (data) => {
    try {
      await axios.post("http://localhost:2000/users", data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Buat Akun</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            // console.log(values);
            handleSubmit(values);
            action.resetForm();
          }}
        >
          {() => {
            return (
              <Form>
                <ModalContent>
                  <ModalHeader>Buat Akun</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Stack spacing="4">
                      <FormControl>
                        <label>Username</label>
                        <Input
                          as={Field}
                          name="username"
                          type="text"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                      <FormControl>
                        <label>Email</label>
                        <Input
                          as={Field}
                          name="email"
                          type="email"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                      <FormControl>
                        <label>Password</label>
                        <Input
                          as={Field}
                          name="password"
                          type="password"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                    </Stack>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" type="submit">
                      Daftar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
