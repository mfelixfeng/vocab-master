import { Box, Container, Flex, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface Props {
  bg: string;
}
const Header = ({ bg }: Props) => {
  return (
    <Box
      as="header"
      bg={bg}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Heading as="h1" fontSize="2xl" color="blue.500">
              词达人
            </Heading>
          </Link>
          <Flex>
            <Link to="/sign-in">
              <Button colorScheme="blue" rounded="full" mr={4}>
                登录
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button colorScheme="green" rounded="full">
                注册
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
