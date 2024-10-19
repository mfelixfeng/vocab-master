import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="400px" padding={3} mt={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading>User Register</Heading>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Register
        </Button>
        <Text>
          Already have an account?{" "}
          <Link color="blue.500" href="/login">
            Login
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default RegisterPage;
