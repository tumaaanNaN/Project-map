const React = require('react');
const Layout = require('./Layout');
import {TextField, Button, Container, Box, Typography } from '@mui/material';

function Login() {
  return (
    <Layout>
      <Container maxWidth='sm'>
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <form action='/login' method='POST' className='loginForm' id='logForm'>
            <Typography> Логин </Typography>
            <TextField
              fullWidth
              name='login'
              variant='outlined'
              margin='normal'
            />
            <Typography> Пароль </Typography>
            <TextField
              fullWidth
              name='password'
              type='password'
              variant='outlined'
              margin='normal'
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              size='large'
              sx={{ marginTop: 2 }}
            >
              Войти
            </Button>
          </form>
        </Box>
      </Container>
      <script defer src='js/register.js'></script>
    </Layout>
  );
}


//   return (
//     <Layout>
//       <form
//         action="/login"
//         method="POST"
//         className="login-container"
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           marginTop: '100px',
//           gap: '5px',
//         }} 
//       >
//         <label htmlFor="login" className="form-label">
//           Логин
//           <input
//             id="login"
//             className="form-control"
//             name="login"
//             type="text"
//             placeholder="Введите логин"
//             required
//           />
//         </label>
//         <label htmlFor="password" className="form-label">
//           Пароль
//           <input
//             id="password"
//             className="form-control"
//             name="password"
//             type="password"
//             placeholder="Введите пароль"
//             autoComplete="on"
//             required
//           />
//         </label>
//         <button className="btn btn-warning" type="submit">
//           Войти в систему
//         </button>
//       </form>
//     </Layout>
//   );
// }
module.exports = Login;
