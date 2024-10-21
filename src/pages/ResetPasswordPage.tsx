import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the password reset logic
    toast({
      title: "重置密码请求已发送",
      description: "请查看您的邮箱以获取重置密码的说明。",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Flex minHeight="100vh" width="100%" flexDirection="column" bg={bgColor}>
      <Flex
        flex="1"
        alignItems="center"
        justifyContent="center"
        py={{ base: 5, md: 10 }}
        px={{ base: 4, md: 0 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, lg: 10 }}
          maxW="1200px"
          width="100%"
        >
          <Box>
            <VStack spacing={{ base: 5, md: 8 }} align="flex-start">
              <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
                重置您的密码
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">
                请输入您的电子邮箱地址，我们将向您发送重置密码的说明。
              </Text>
            </VStack>
          </Box>
          <Box bg={cardBg} p={{ base: 6, md: 8 }} rounded="lg" shadow="lg">
            <VStack
              spacing={{ base: 4, md: 6 }}
              as="form"
              onSubmit={handleSubmit}
            >
              <Heading as="h2" size={{ base: "lg", md: "xl" }}>
                重置密码
              </Heading>
              <FormControl isRequired>
                <FormLabel>电子邮箱</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="输入您的电子邮箱"
                  size="lg"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" size="lg" width="full">
                发送重置链接
              </Button>
              <Text fontSize={{ base: "sm", md: "md" }}>
                记起密码了？{" "}
                <Text
                  as="span"
                  color="blue.500"
                  cursor="pointer"
                  onClick={() => navigate("/sign-in")}
                >
                  返回登录
                </Text>
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default ResetPasswordPage;
