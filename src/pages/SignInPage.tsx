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
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaLock, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";
import Feature from "../components/Feature";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the sign-in logic
    toast({
      title: "登录尝试",
      description: "我们正在处理您的登录请求。",
      status: "info",
      duration: 3000,
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
                欢迎回到词达人
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">
                登录您的账户，继续您的英语词汇学习之旅！
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
                登录
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
              <FormControl isRequired>
                <FormLabel>密码</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="输入您的密码"
                  size="lg"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" size="lg" width="full">
                登录
              </Button>
              <Text fontSize={{ base: "sm", md: "md" }}>
                忘记密码？{" "}
                <Link color="blue.500" href="/reset-password">
                  重置密码
                </Link>
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                还没有账号？{" "}
                <Link color="blue.500" href="/signup">
                  注册
                </Link>
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default SignInPage;
