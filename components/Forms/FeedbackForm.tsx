import React, { FC, useState } from 'react';
import { sendContactForm } from 'lib/api';
import {
  Box, Button, FormControl, SnackbarOrigin, TextField,
} from '@mui/material';
import { IFormContact } from 'shared/interfaces/interfaces';

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
  const [state, setState] = React.useState<any>(initState);
  const [snackbar, setSnackbar] = React.useState<any>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const {
    values, isLoading, error,
  } = state;

  const { vertical, horizontal, open } = snackbar;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setSnackbar({ ...newState, open: true });
  };

  const handleClose = () => {
    setSnackbar({ ...state, open: false });
  };

  const [touched, setTouched] = useState({
    email: undefined,
    message: undefined,
    tel: undefined,
    name: undefined,
  });

  const onSubmit = async (data: any) => {
    try {
      // await sendContactForm(values);
      setTouched({
        email: undefined, message: undefined, tel: undefined, name: undefined,
      });
      setState(initState);
      handleClick({ vertical: 'top', horizontal: 'center' });
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
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* {error && ( */}
      {/*   <Typography color="red.300" my={4} fontSize="xl"> */}
      {/*     {error} */}
      {/*   </Typography> */}
      {/* )} */}
      <form>
        <FormControl size="medium">
          <TextField
            type="text"
            label="ФИО"
            variant="outlined"
            name="name"
            placeholder="Введите ваше ФИО"
            value={values?.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <Box>
            Это поле обязательно для заполнения
          </Box>
        </FormControl>

        <FormControl size="medium">
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            placeholder="Введите ваш email"
            value={values?.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <Box>
            Это поле обязательно для заполнения
          </Box>
        </FormControl>

        <FormControl size="medium">
          <TextField
            type="tel"
            name="tel"
            label="Телефон"
            variant="outlined"
            placeholder="Введите ваш телефон"
            value={values?.tel}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <Box>
            Это поле обязательно для заполнения
          </Box>
        </FormControl>

        <FormControl size="medium">
          <TextField
            label="Вопрос"
            name="message"
            placeholder="Введите ваш вопрос"
            multiline
            fullWidth
            rows={6}
            sx={{
              border: 'none',
              borderRadius: '8px',
              width: '100%',
            }}
            value={values?.message}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <Box>
            Это поле обязательно для заполнения
          </Box>
        </FormControl>

        <Box>
          <Button
            variant="contained"
            size="large"
            onClick={onSubmit}
          >
            Отправить
          </Button>
        </Box>
      </form>

      <Box sx={{ width: 500 }}>
        {/* <Snackbar */}
        {/*   // anchorOrigin={{ vertical, horizontal }} */}
        {/*   open={open} */}
        {/*   // variant="filled" */}
        {/*   // onClose={handleClose} */}
        {/*   message="I love snacks" */}
        {/*   // key={vertical + horizontal} */}
        {/*   // sx={{ */}
        {/*   //   color: '#000', */}
        {/*   // }} */}
        {/* > */}
        {/*   <Alert onClose={handleClose} severity="success" sx={{ width: '100%', color: '#000' }}> */}
        {/*     This is a success message! */}
        {/*   </Alert> */}
        {/*   <Alert severity="error">Произошла ошибка запроса</Alert> */}
        {/* </Snackbar> */}
      </Box>
    </Box>
  );
};

export default FeedbackForm;
