import { useNavigation } from '@react-navigation/native';
import { VStack, Text, Image, Center, Heading, ScrollView } from 'native-base';
import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import React from 'react';
import { Input } from '@components/Input';
import { Button } from '@components/Button';


export default function SignUp() {

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
      <VStack flex={1} bg="gray.700" px={10}>
        <Image
          source={BackgroundImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          position='absolute'
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>
        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='E-mail'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input
            placeholder='Senha'
            secureTextEntry

          />
          <Button
            title='Criar e acessar'
          />

        </Center>



        <Button
        onPress={handleGoBack}
          title='Voltar para o login'
          variant="outline"
          mt={24}
        />
      </VStack>
    </ScrollView>
  )
}