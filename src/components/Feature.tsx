import { Icon, VStack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  title: string;
  icon: IconType;
  description: string;
}

const Feature = ({ title, icon, description }: Props) => {
  return (
    <VStack>
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>
      <Text color="gray.600" textAlign="center">
        {description}
      </Text>
    </VStack>
  );
};

export default Feature;
