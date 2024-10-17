import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  FaBolt,
  FaBook,
  FaChartLine,
  FaCheckCircle,
  FaTrophy,
} from "react-icons/fa";
import Feature from "../components/Feature";

const HomePage = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Box bg={bgColor} minH="100vh">
      <Box
        as="header"
        bg={cardBg}
        boxShadow="sm"
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Container maxW="container.xl" py={4}>
          <Flex justify="space-between" align="center">
            <Heading as="h1" fontSize="2xl" color="blue.500">
              词达人
            </Heading>
            <Stack direction="row" spacing={8} align="center">
              <Button colorScheme="blue" rounded="full">
                免费试用
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" py={20}>
        <VStack spacing={10} align="stretch">
          <VStack spacing={5} textAlign="center">
            <Heading as="h2" size="2xl">
              轻松掌握英语词汇，提升语言能力
            </Heading>
            <Text fontSize="xl" color="gray.600">
              通过AI智能学习系统，让词汇学习更高效、更有趣
            </Text>
            <Button size="lg" colorScheme="blue" rounded="full" px={8}>
              开始免费体验
            </Button>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <Feature
              icon={FaBook}
              title="智能词汇学习"
              text="AI生成的情境故事，让记忆更加深刻"
            />
            <Feature
              icon={FaBolt}
              title="个性化学习路径"
              text="根据你的水平和目标，定制专属计划"
            />
            <Feature
              icon={FaChartLine}
              title="进度追踪"
              text="可视化你的学习历程，激励持续进步"
            />
            <Feature
              icon={FaTrophy}
              title="趣味挑战"
              text="通过游戏和竞赛，让学习变得有趣"
            />
          </SimpleGrid>

          <Box bg={cardBg} p={8} rounded="lg" boxShadow="md">
            <VStack spacing={6} align="stretch">
              <Heading as="h3" size="lg" textAlign="center">
                为什么选择词达人？
              </Heading>
              <List spacing={3}>
                {[
                  "基于AI的智能学习系统，提供个性化学习体验",
                  "丰富的词汇库，覆盖从基础到高级的各类词汇",
                  "科学的记忆方法，基于遗忘曲线优化复习计划",
                  "趣味性和实用性并重，让学习既高效又有趣",
                ].map((item, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    {item}
                  </ListItem>
                ))}
              </List>
            </VStack>
          </Box>

          <VStack spacing={5} textAlign="center">
            <Heading as="h3" size="lg">
              准备好提升你的词汇量了吗？
            </Heading>
            <Text>现在注册，即可获得7天免费高级会员体验</Text>
            <Button size="lg" colorScheme="blue" rounded="full" px={8}>
              立即注册
            </Button>
          </VStack>
        </VStack>
      </Container>

      <Box as="footer" bg="gray.800" color="white" py={8} textAlign="center">
        <Text>&copy; 2024 词达人. 保留所有权利.</Text>
      </Box>
    </Box>
  );
};
export default HomePage;
