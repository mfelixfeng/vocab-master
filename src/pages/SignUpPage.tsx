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
  Flex,
} from "@chakra-ui/react";

const SignUpPage = () => {
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
    <Flex
      minHeight="100vh"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box maxWidth="400px" width="100%" padding={3}>
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
          <Heading>User Sign Up</Heading>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Sign Up
          </Button>
          <Text>
            Already have an account?{" "}
            <Link color="blue.500" href="/login">
              Login
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SignUpPage;
