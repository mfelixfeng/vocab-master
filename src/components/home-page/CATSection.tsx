import {
  Box,
  Text,
  useColorModeValue,
  VStack,
  Heading,
  Button,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const CATSection = () => {
  return (
    <Box bg={useColorModeValue("blue.50", "blue.900")} py={20}>
      <Container maxW="container.xl">
        <VStack spacing={8} textAlign="center">
          <Heading as="h3" size="xl">
            准备好提升你的词汇量了吗？
          </Heading>
          <Text fontSize="xl">现在注册，即可获得7天免费高级会员体验</Text>
          <Link to="/sign-up">
            <Button size="lg" colorScheme="blue" rounded="full" px={8}>
              立即开始
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default CATSection;
