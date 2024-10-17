import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={8} textAlign="center">
      <Text>&copy; 2024 词达人. 保留所有权利.</Text>
    </Box>
  );
};

export default Footer;
