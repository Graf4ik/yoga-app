import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { sendContactForm } from 'lib/api';
import { IFormContact } from 'constants/interfaces';

const initValues: IFormContact = {
  name: '',
  email: '',
  tel: '',
  message: '',
  isLoading: false,
  error: '',
};

const initState = { values: initValues };

const FeedbackForm: FC = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({
    email: undefined,
    message: undefined,
    tel: undefined,
    name: undefined,
  });
  // @ts-ignore
  const { values, isLoading, error } = state;

  const onSubmit = async (data: any) => {
    try {
      await sendContactForm(values);
      setTouched({
        email: undefined, message: undefined, tel: undefined, name: undefined,
      });
      setState(initState);
      toast({
        title: 'Ваш вопрос успешно отправлен.',
        status: 'success',
        duration: 2000,
        position: 'top',
      });
    } catch (err) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        // @ts-ignore
        error: err.message,
      }));
    }
    console.log(data);
  };

  const handleChange = ({ target }) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }));

  const onBlur = ({ target }) => setTouched((prev) => ({ ...prev, [target.name]: true }));

  return (
    <Box>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <FormControl isRequired mb={5} isInvalid={touched.name && !values.name}>
        <FormLabel>ФИО</FormLabel>
        <Input
          borderColor="grey"
          variant="flushed"
          type="text"
          name="name"
          placeholder="Введите ваше ФИО"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>
          Это поле обязательно для заполнения
        </FormErrorMessage>
      </FormControl>

      <FormControl isRequired mb={5} isInvalid={touched.email && !values.email}>
        <FormLabel>Email</FormLabel>
        <Input
          borderColor="grey"
          variant="flushed"
          type="email"
          name="email"
          placeholder="Введите ваш email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>
          Это поле обязательно для заполнения
        </FormErrorMessage>
      </FormControl>

      <FormControl isRequired mb={5} isInvalid={touched.tel && !values.tel}>
        <FormLabel>Телефон</FormLabel>
        <Input
          borderColor="grey"
          variant="flushed"
          type="tel"
          name="tel"
          placeholder="Введите ваш телефон"
          value={values.tel}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>
          Это поле обязательно для заполнения
        </FormErrorMessage>
      </FormControl>

      <FormControl isRequired mb={5} isInvalid={touched.message && !values.message}>
        <FormLabel>Вопрос</FormLabel>
        <Textarea
          borderColor="grey"
          variant="flushed"
          name="message"
          placeholder="Введите ваш вопрос"
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
    </Box>
  );
};

export default FeedbackForm;
