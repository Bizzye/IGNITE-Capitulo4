
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import Link from "next/link";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório").min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], "As senhas precisam ser iguais")
});

export default function CreateUser() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(CreateUserFormSchema)
    })

    const handleCreateUser:SubmitHandler<CreateUserFormData> = (values) => {

    }

    return(
        <Box>
            <Header />

            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6","8"]} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                      <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                          <Input name="name" label="Nome Completo" {...register("name")} />
                          <Input name="email" type="email" label="E-mail" {...register("email")} />
                      </SimpleGrid>

                      <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                          <Input name="password" type="password" label="Senha" {...register("password")} />
                          <Input name="password_confirmation" type="password" label="Confirmação da senha" {...register("password_confirmation")} />
                      </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                      <HStack spacing="4">
                        <Link href="/users" passHref>
                            <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                        <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>
                      </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}