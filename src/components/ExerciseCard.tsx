import { HStack, VStack,Image, Heading, Text, Icon} from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {

};

export function ExerciseCard({...rest}: Props){
  return (
    <TouchableOpacity
    {...rest}
    >
      <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <Image
        source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg'}}
        alt="Remada unilateral"
        w={16}
        h={16}
        rounded="md"
        mr={4}
        resizeMode="center"
        />
        <VStack flex={1}>
          <Heading fontSize="lg" color="white" numberOfLines={2}>
            Remada unilateral
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>

    </TouchableOpacity>
  )
}