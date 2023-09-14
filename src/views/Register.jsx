const React = require('react');
const Layout = require('./Layout');

import {TextField, Button, Container, Box, Typography } from '@mui/material';

module.exports = function Register() {
return (
  <Layout>
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form
        action="/register"
        method="POST"
        className="registerForm">
          <Typography> Логин </Typography>
          <TextField
            fullWidth
            name="login"
            variant="outlined"
            margin="normal"
          />
      <Typography> Имя </Typography>
          <TextField
            fullWidth
            name="name"
            variant="outlined"
            margin="normal"
          />
          <Typography> Пароль </Typography>
          <TextField
            fullWidth
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          {/* <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ marginTop: 2 }}
          >
            Войти
          </Button> */}
          <button type="submit" className="btn btn-primary">
        Зарегистрироваться
      </button>
        </form>
      </Box>
    </Container>
    <script defer src="js/login.js" />
  </Layout>
);
}