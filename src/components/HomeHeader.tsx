import { HStack, VStack, Text, Heading, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons"

import { UserPhoto } from "./UserPhoto";
import { TouchableOpacity } from "react-native";

export default function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/athospugliesedev.png' }}
        size={16}
        alt="logo"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">Olá, </Text>
        <Heading color="gray.100" fontSize="md">Athos</Heading>
      </VStack>
      <TouchableOpacity>
        <Icon as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  );
}