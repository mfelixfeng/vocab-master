import {
  Container,
  Stack,
  VStack,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={10}
        align="center"
      >
        <VStack spacing={5} align="center" flex={1}>
          <Heading as="h2" size="2xl">
            轻松掌握英语词汇，提升语言能力
          </Heading>
          <Text fontSize="xl" color="gray.600">
            通过AI智能学习系统，让词汇学习更高效、更有趣
          </Text>
          <Link to="/sign-up">
            <Button size="lg" colorScheme="blue" rounded="full" px={8}>
              立即开始学习之旅
            </Button>
          </Link>
        </VStack>
      </Stack>
    </Container>
  );
};

export default HeroSection;
