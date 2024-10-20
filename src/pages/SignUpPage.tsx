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
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEnvelope, FaRocket, FaLightbulb, FaChartLine } from "react-icons/fa";
import Footer from "../components/Footer";
import { IconType } from "react-icons";

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: IconType;
  title: string;
  description: string;
}) => {
  return (
    <VStack>
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight="bold">{title}</Text>
      <Text textAlign="center" color="gray.600">
        {description}
      </Text>
    </VStack>
  );
};

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "注册请求已收到",
      description: "我们已收到您的注册请求。请查看您的邮箱以获取后续步骤。",
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
                今天就加入词达人
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">
                通过AI驱动的学习提升您的英语词汇量。立即注册，开启您的学习之旅！
              </Text>
              <SimpleGrid
                columns={{ base: 2, sm: 2 }}
                spacing={{ base: 4, md: 6 }}
              >
                <Feature
                  icon={FaRocket}
                  title="快速开始"
                  description="注册后立即开始学习"
                />
                <Feature
                  icon={FaLightbulb}
                  title="智能学习"
                  description="AI生成的内容根据您的水平量身定制"
                />
                <Feature
                  icon={FaChartLine}
                  title="追踪进度"
                  description="可视化您的进步"
                />
                <Feature
                  icon={FaEnvelope}
                  title="邮件更新"
                  description="接收个性化的学习提醒"
                />
              </SimpleGrid>
            </VStack>
          </Box>
          <Box bg={cardBg} p={{ base: 6, md: 8 }} rounded="lg" shadow="lg">
            <VStack
              spacing={{ base: 4, md: 6 }}
              as="form"
              onSubmit={handleSubmit}
            >
              <Heading as="h2" size={{ base: "lg", md: "xl" }}>
                注册
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
                开始学习
              </Button>
              <Text fontSize={{ base: "sm", md: "md" }}>
                注册即表示您同意我们的{" "}
                <Link color="blue.500" href="/terms">
                  服务条款
                </Link>{" "}
                和{" "}
                <Link color="blue.500" href="/privacy">
                  隐私政策
                </Link>
              </Text>
              <Text fontSize={{ base: "sm", md: "md" }}>
                已有账号？{" "}
                <Link color="blue.500" href="/login">
                  登录
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

export default SignUpPage;
