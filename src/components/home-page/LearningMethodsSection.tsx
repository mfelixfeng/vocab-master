import {
  Box,
  Text,
  useColorModeValue,
  Container,
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

interface Props {
  bg: string;
}

const LearningMethodsSection = ({ bg }: Props) => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} py={20}>
      <Container maxW="container.xl">
        <VStack spacing={10}>
          <Heading as="h3" size="xl" textAlign="center">
            多样化的学习方法
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {[
              {
                title: "情境故事学习",
                description: "通过AI生成的有趣故事，在上下文中学习新词汇",
              },
              {
                title: "智能闪卡",
                description: "使用间隔重复算法，优化你的记忆曲线",
              },
              {
                title: "互动游戏",
                description: "通过有趣的游戏巩固所学词汇",
              },
              {
                title: "真实材料阅读",
                description: "阅读新闻文章、博客等真实材料，提高词汇应用能力",
              },
            ].map((method, index) => (
              <Box key={index} bg={bg} p={6} rounded="lg" shadow="md">
                <Heading as="h4" size="md" mb={4}>
                  {method.title}
                </Heading>
                <Text>{method.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default LearningMethodsSection;
