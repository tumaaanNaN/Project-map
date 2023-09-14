const React = require('react');
const Layout = require('./Layout');
const { Typography, Grid, TextField, Container  } = require('@mui/material');

module.exports = function Profile({ user }) {
  return (
    <Layout user={user}>
      <Grid
  container
  direction="column"
  alignItems="center"
  justify="center"
  marginTop='8px'
  marginBottom="8px"
  id="form" 
  className="play"
>
      <Typography variant='h5' >
      Профиль {user.login}
      </Typography>
      </Grid>
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}>
      <div id="map" style={{ width: '700px', height: '500px' }} />
      <Typography>
        Введите название маршрута
      </Typography>
      <TextField 
      variant="outlined" 
    id="coordinates" 
    type="text" 
    name="coordinates" 
    placeholder="Название маршрута"
    margin="normal">
      </TextField>
      <Typography>
        Введите населенный пункт
      </Typography>
      <TextField 
      variant="outlined" 
    id="city" 
    type="text" 
    name="cityName" 
    placeholder="Название маршрута"
    margin="normal">
      </TextField>
      {/* <input id="feedback" type="text" name="feedback" placeholder="Ваш отзыв" /> */}
      <script src="https://api-maps.yandex.ru/2.1/?apikey=454e7c2a-3167-48eb-bcbe-fd1c343cac62&lang=ru_RU" type="text/javascript" />
      <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript" />
      <script src="js/coordinates.js" />
      </Grid>
    </Layout>
  );
};
