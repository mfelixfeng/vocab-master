import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaQuestion } from "react-icons/fa";

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;
