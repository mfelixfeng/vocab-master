import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box bg={bgColor} minH="100vh">
      <Header bg={cardBg} />
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">
            隐私政策
          </Heading>
          <Text>
            词达人（"我们"、"我们的"或"本公司"）重视您的隐私。本隐私政策说明了我们如何收集、使用、披露和保护您的个人信息。
          </Text>
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="lg">
              1. 信息收集
            </Heading>
            <Text>
              我们可能收集以下类型的信息： -
              个人识别信息（如姓名、电子邮件地址） -
              使用数据（如学习进度、测试结果） - 设备和日志信息
            </Text>

            <Heading as="h2" size="lg">
              2. 信息使用
            </Heading>
            <Text>
              我们使用收集的信息来： - 提供、维护和改进我们的服务 -
              个性化您的学习体验 - 与您沟通（如发送通知和更新）
            </Text>

            <Heading as="h2" size="lg">
              3. 信息共享
            </Heading>
            <Text>
              我们不会出售您的个人信息。我们可能在以下情况下共享信息： -
              经您同意 - 遵守法律要求 - 与服务提供商合作（他们帮助我们运营服务）
            </Text>

            <Heading as="h2" size="lg">
              4. 数据安全
            </Heading>
            <Text>
              我们采取合理的措施来保护您的个人信息免受未经授权的访问、使用或披露。
            </Text>

            <Heading as="h2" size="lg">
              5. 您的权利
            </Heading>
            <Text>
              您有权访问、更正或删除您的个人信息。您也可以选择退出某些数据收集或使用。
            </Text>

            <Heading as="h2" size="lg">
              6. 儿童隐私
            </Heading>
            <Text>
              我们的服务不面向13岁以下的儿童。如果您认为我们可能收集了儿童的信息，请联系我们。
            </Text>

            <Heading as="h2" size="lg">
              7. 政策变更
            </Heading>
            <Text>
              我们可能会不时更新本隐私政策。我们会在本页面上发布任何更改。
            </Text>

            <Heading as="h2" size="lg">
              8. 联系我们
            </Heading>
            <Text>
              如果您对本隐私政策有任何问题，请联系我们：mfelixfeng@gmail.com
            </Text>
          </VStack>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default PrivacyPolicyPage;
