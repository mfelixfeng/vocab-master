import { VStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  text: string;
  icon: IconType;
}

export default ({ title, text, icon }: Props) => {
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
