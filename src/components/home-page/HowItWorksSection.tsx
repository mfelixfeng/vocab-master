import {
  Container,
  VStack,
  Heading,
  SimpleGrid,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaRocket, FaBrain, FaLightbulb, FaMobileAlt } from "react-icons/fa";

const HowItWorksSection = () => {
  return (
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
  );
};

export default HowItWorksSection;
