import {
  TextField, Button, Container, Box, Typography,
} from '@mui/material';

const React = require('react');
const Layout = require('./Layout');
import {TextField, Button, Container, Box, Typography } from '@mui/material';

function Login() {
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
          <form action="/login" method="POST" className="loginForm" id="logForm">
            <Typography> Логин </Typography>
            <TextField
              fullWidth
              name="login"
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ marginTop: 2 }}
            >
              Войти
            </Button>
          </form>
        </Box>
      </Container>
      <script defer src="js/login.js" />
    </Layout>
  );
}

module.exports = Login;
