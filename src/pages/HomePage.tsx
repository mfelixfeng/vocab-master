import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  FaBook,
  FaBrain,
  FaChartLine,
  FaCheckCircle,
  FaLightbulb,
  FaMobileAlt,
  FaQuestion,
  FaRocket,
  FaUser,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { IconType } from "react-icons";
import { Link, useNavigate } from "react-router-dom";

const Feature = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: IconType;
}) => {
  return (
    <VStack>
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>
      <Text color="gray.600" textAlign="center">
        {text}
      </Text>
    </VStack>
  );
};

const HomePage = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const navigate = useNavigate();
  return (
    <Box bg={bgColor} minH="100vh">
      {/* Header */}
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
            <Flex>
              <Button colorScheme="blue" rounded="full" mr={4}>
                登录
              </Button>
              <Link to="/register">
                <Button colorScheme="green" rounded="full">
                  注册
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Container maxW="container.xl" py={20}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={10}
          align="center"
        >
          <VStack spacing={5} align="flex-start" flex={1}>
            <Heading as="h2" size="2xl">
              轻松掌握英语词汇，提升语言能力
            </Heading>
            <Text fontSize="xl" color="gray.600">
              通过AI智能学习系统，让词汇学习更高效、更有趣
            </Text>
            <Button size="lg" colorScheme="blue" rounded="full" px={8}>
              立即开始学习之旅
            </Button>
          </VStack>
        </Stack>
      </Container>

      {/* Features Section */}
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
                text="AI生成的情境故事，让记忆更加深刻"
              />
              <Feature
                icon={FaBook}
                title="个性化学习路径"
                text="根据你的水平和目标，定制专属计划"
              />
              <Feature
                icon={FaChartLine}
                title="进度追踪"
                text="可视化你的学习历程，激励持续进步"
              />
              <Feature
                icon={FaCheckCircle}
                title="趣味挑战"
                text="通过游戏和竞赛，让学习变得有趣"
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={10}>
          <Heading as="h3" size="xl" textAlign="center">
            如何使用词达人
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {[
              {
                icon: FaRocket,
                title: "注册账号",
                text: "快速创建你的个人账户",
              },
              {
                icon: FaBrain,
                title: "评估水平",
                text: "进行词汇测试，确定你的起点",
              },
              {
                icon: FaLightbulb,
                title: "定制计划",
                text: "获得AI生成的个性化学习计划",
              },
              {
                icon: FaMobileAlt,
                title: "随时学习",
                text: "在手机或电脑上灵活学习",
              },
            ].map((item, index) => (
              <VStack key={index} align="center" spacing={4}>
                <Icon as={item.icon} w={10} h={10} color="blue.500" />
                <Text fontWeight="bold" fontSize="lg">
                  {item.title}
                </Text>
                <Text textAlign="center">{item.text}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Learning Methods Section */}
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
                <Box key={index} bg={cardBg} p={6} rounded="lg" shadow="md">
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

      {/* FAQ Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={10}>
          <Heading as="h3" size="xl" textAlign="center">
            常见问题
          </Heading>
          <Accordion allowMultiple width="100%">
            {[
              {
                question: "词达人适合哪些人群使用？",
                answer:
                  "词达人适合各个年龄段和水平的英语学习者，从初学者到高级水平的学习者都能受益。",
              },
              {
                question: "使用词达人需要多少时间？",
                answer:
                  "每天15-30分钟的学习就能看到明显效果。你可以根据个人时间灵活安排学习计划。",
              },
              {
                question: "词达人的词汇来源是什么？",
                answer:
                  "我们的词汇库包括常用词、学术词汇、商务英语等多个领域，并且持续更新。",
              },
              {
                question: "可以在多个设备上使用吗？",
                answer:
                  "是的，词达人支持多设备同步，你可以在手机、平板或电脑上无缝切换学习。",
              },
            ].map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <HStack>
                        <Icon as={FaQuestion} color="blue.500" />
                        <Text fontWeight="bold">{item.question}</Text>
                      </HStack>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>

      {/* CTA Section */}
      <Box bg={useColorModeValue("blue.50", "blue.900")} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Heading as="h3" size="xl">
              准备好提升你的词汇量了吗？
            </Heading>
            <Text fontSize="xl">现在注册，即可获得7天免费高级会员体验</Text>
            <Button size="lg" colorScheme="blue" rounded="full" px={8}>
              立即开始
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomePage;
