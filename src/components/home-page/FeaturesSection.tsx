import {
  Box,
  useColorModeValue,
  Container,
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaUser, FaBook, FaChartLine, FaCheckCircle } from "react-icons/fa";
import Feature from "../Feature";

const FeaturesSection = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} py={20}>
      <Container maxW="container.xl">
        <VStack spacing={10}>
          <Heading as="h3" size="xl" textAlign="center">
            为什么选择词达人？
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <Feature
              icon={FaUser}
              title="智能词汇学习"
              description="AI生成的情境故事，让记忆更加深刻"
            />
            <Feature
              icon={FaBook}
              title="个性化学习路径"
              description="根据你的水平和目标，定制专属计划"
            />
            <Feature
              icon={FaChartLine}
              title="进度追踪"
              description="可视化你的学习历程，激励持续进步"
            />
            <Feature
              icon={FaCheckCircle}
              title="趣味挑战"
              description="通过游戏和竞赛，让学习变得有趣"
            />
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
