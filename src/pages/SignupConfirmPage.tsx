import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  useToast,
  Flex,
  SimpleGrid,
  useColorModeValue,
  PinInput,
  PinInputField,
  HStack,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const SignUpConfirmPage = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(0);
  const toast = useToast();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const navigate = useNavigate();

  const handleSubmitVerificationCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationCode.length === 6) {
      setStep(1);
    } else {
      toast({
        title: "验证码错误",
        description: "请输入正确的6位验证码。",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSubmitPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      toast({
        title: "注册成功",
        description: "您的账户已成功创建。",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/sign-in");
    } else {
      toast({
        title: "密码不匹配",
        description: "请确保两次输入的密码相同。",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex minHeight="100vh" width="100%" flexDirection="column" bg={bgColor}>
      <Flex
        flex="1"
        alignItems="center"
        justifyContent="center"
        py={{ base: 5, md: 10 }}
        px={{ base: 4, md: 0 }}
      >
        <Box
          bg={cardBg}
          p={{ base: 6, md: 8 }}
          rounded="lg"
          shadow="lg"
          width="100%"
          maxW="400px"
        >
          <VStack
            spacing={{ base: 4, md: 6 }}
            as="form"
            onSubmit={
              step === 0 ? handleSubmitVerificationCode : handleSubmitPassword
            }
          >
            <Heading as="h2" size={{ base: "lg", md: "xl" }}>
              {step === 0 ? "验证您的邮箱" : "设置密码"}
            </Heading>
            {step === 0 && (
              <FormControl isRequired>
                <FormLabel>验证码</FormLabel>
                <HStack>
                  <PinInput
                    otp
                    size="lg"
                    value={verificationCode}
                    onChange={setVerificationCode}
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </FormControl>
            )}
            {step === 1 && (
              <>
                <FormControl isRequired>
                  <FormLabel>密码</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="设置您的密码"
                    size="lg"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>确认密码</FormLabel>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="再次输入您的密码"
                    size="lg"
                  />
                </FormControl>
              </>
            )}
            <Button type="submit" colorScheme="blue" size="lg" width="full">
              {step === 0 ? "验证" : "完成注册"}
            </Button>
          </VStack>
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default SignUpConfirmPage;
