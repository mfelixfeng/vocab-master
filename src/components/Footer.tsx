import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={8} textAlign="center">
      <Text>
        &copy; {new Date().getFullYear()} 词达人. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
