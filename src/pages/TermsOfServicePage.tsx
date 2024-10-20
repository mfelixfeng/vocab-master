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

const TermsOfServicePage = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box bg={bgColor} minH="100vh">
      <Header bg={cardBg} />
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">
            服务条款
          </Heading>
          <Text>
            欢迎使用词达人（"服务"）。本服务由词达人公司（"我们"、"我们的"或"本公司"）提供。请仔细阅读以下条款和条件。
          </Text>
          <VStack spacing={4} align="stretch">
            <Heading as="h2" size="lg">
              1. 接受条款
            </Heading>
            <Text>
              使用我们的服务即表示您同意这些条款。如果您不同意这些条款，请不要使用我们的服务。
            </Text>

            <Heading as="h2" size="lg">
              2. 服务描述
            </Heading>
            <Text>
              词达人是一个基于AI的英语词汇学习平台，旨在帮助用户提高英语词汇量和语言能力。
            </Text>

            <Heading as="h2" size="lg">
              3. 用户账户
            </Heading>
            <Text>
              您可能需要创建一个账户才能使用某些服务功能。您有责任维护您的账户安全性。
            </Text>

            <Heading as="h2" size="lg">
              4. 用户行为
            </Heading>
            <Text>
              您同意不会使用我们的服务进行任何非法或未经授权的目的。您不得干扰或破坏服务的安全性。
            </Text>

            <Heading as="h2" size="lg">
              5. 知识产权
            </Heading>
            <Text>
              服务内容，包括但不限于文本、图形、徽标、图像以及软件，受版权、商标和其他法律保护。
            </Text>

            <Heading as="h2" size="lg">
              6. 免责声明
            </Heading>
            <Text>我们的服务按"原样"提供，不提供任何明示或暗示的保证。</Text>

            <Heading as="h2" size="lg">
              7. 责任限制
            </Heading>
            <Text>
              在法律允许的最大范围内，词达人公司不对任何直接、间接、附带、特殊、后果性或惩罚性损害负责。
            </Text>

            <Heading as="h2" size="lg">
              8. 条款修改
            </Heading>
            <Text>
              我们保留随时修改这些条款的权利。修改后的条款将在本页面上发布。
            </Text>

            <Heading as="h2" size="lg">
              9. 联系我们
            </Heading>
            <Text>
              如果您对这些条款有任何问题，请联系我们：mfelixfeng@gmail.com
            </Text>
          </VStack>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default TermsOfServicePage;
