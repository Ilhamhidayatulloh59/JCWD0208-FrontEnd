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
import { useDispatch } from "react-redux";
import { setData } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .min(4, "Minimum 4 character")
    .required("Password is required"),
});

export const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:2000/users?email=${data.email}&password=${data.password}`
      );
      
      if (response.data[0]?.id) {
        dispatch(setData(response.data[0]));
        localStorage.setItem("id", response.data[0]?.id);
        navigate("/beranda");
        window.location.reload();
      } else {
        alert("Account not found")
      }

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Masuk
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
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
                  <ModalHeader>Masuk Ke X</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Stack spacing="4">
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
                      Masuk
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
