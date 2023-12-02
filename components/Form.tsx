import React, {FC, useState} from "react";
import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Text,
    Textarea,
    useToast
} from "@chakra-ui/react";
import {sendContactForm} from "../lib/api";
import {IFormContact} from "../constants/types";

const initValues: IFormContact = {
    name: "",
    email: "",
    tel: "",
    message: "",
}

const initState = {values: initValues}

const Form: FC = () => {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const { values, isLoading, error } = state;

    const onSubmit = async (data: IFormContact) => {
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Ваш вопрос успешно отправлен.",
                status: "success",
                duration: 2000,
                position: "top",
            })
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message
            }))
        }
        console.log(data)
    };

    const handleChange = ({ target }) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }));

    const onBlur = ({ target }) => setTouched((prev) => ({...prev, [target.name]: true }))

    return (
        <>
            <Container maxW="450px" mt={12}>
                {error && (
                    <Text color="red.300" my={4} fontSize="xl">
                        {error}
                    </Text>
                )}
               <FormControl isRequired mb={5} isInvalid={touched.name && !values.name}>
                   <FormLabel>ФИО</FormLabel>
                   <Input
                    borderColor='grey'
                    variant='flushed'
                    type="text"
                    name="name"
                    placeholder='Введите ваше ФИО'
                    errorBorderColor="red.300"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                   />
                   <FormErrorMessage>
                       Это поле обязательно для заполнения
                   </FormErrorMessage>
               </FormControl>

                <FormControl isRequired mb={5}  isInvalid={touched.email && !values.email}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        borderColor='grey'
                        variant='flushed'
                        type="email"
                        name="email"
                        placeholder='Введите ваш email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage>
                        Это поле обязательно для заполнения
                    </FormErrorMessage>
                </FormControl>

                <FormControl isRequired mb={5}  isInvalid={touched.tel && !values.tel}>
                    <FormLabel>Телефон</FormLabel>
                    <Input
                        borderColor='grey'
                        variant='flushed'
                        type="tel"
                        name="tel"
                        placeholder='Введите ваш телефон'
                        value={values.tel}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage>
                        Это поле обязательно для заполнения
                    </FormErrorMessage>
                </FormControl>

                <FormControl isRequired mb={5}  isInvalid={touched.message && !values.message}>
                    <FormLabel>Вопрос</FormLabel>
                    <Textarea
                        borderColor='grey'
                        variant='flushed'
                        name="message"
                        placeholder='Введите ваш вопрос'
                        rows={4}
                        errorBorderColor="red.300"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage>
                        Это поле обязательно для заполнения
                    </FormErrorMessage>
                </FormControl>

                <Button
                    variant="outline"
                    colorScheme="blue"
                    isLoading={isLoading}
                    onClick={onSubmit}
                    disabled={!values.name || !values.email || !values.tel}
                >
                    Отправить
                </Button>
            </Container>
        </>
    )
}

export default Form;
