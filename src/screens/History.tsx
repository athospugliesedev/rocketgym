import { useState } from 'react'
import HistoryCard from "@components/HistoryCard";
import ScreenHeader from "@components/ScreenHeader";
import { Center, Heading, Text, VStack, SectionList } from "native-base";

export function History(){
  const [exercises, setExercises] = useState([
    {
      title: "26.08.2022",
      data: ["Puxada Frontal", "Remada", "Risotto"]
    },
    {
      title: "27.08.2022",
      data: ["Tríceps Polia", "Rosca Martelo"]
    },
  ])

  return(
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
      sections={exercises}
      keyExtractor={item => item}
      renderItem={({item}) =>
    (
      <HistoryCard />
    )
    }
    renderSectionHeader={({ section }) => (
      <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
        {section.title}
      </Heading>
    )}
    px={8}
    contentContainerStyle={[].length === 0 && {flex: 1, justifyContent: "center"}}
    ListEmptyComponent={() =>
  (
    <Text color="gray.100" textAlign="center"> Não há exercícios registrados ainda. {'\n'}
      Vamos fazer exercícios hoje?
    </Text>
  )}
  showsVerticalScrollIndicator={false}
         />

    </VStack>
  )
}