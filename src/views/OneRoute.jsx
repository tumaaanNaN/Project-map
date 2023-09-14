const React = require("react");
const Layout = require("./Layout");
const { Itinerary } = require('../../db/models');

import { Button, CardActionArea, Typography, Box, Link, Grid, Card, CardContent, CardMedia,  TextField } from '@mui/material';

module.exports = function Home({ oneRoute, author }) {
  return (
    <Layout>
      <Grid item xs={12}>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'stretch', marginTop: '1cm' }}>
          <Card sx={{ maxWidth: 600, margin: '1cm' }}>
            <CardActionArea>
              <div id="map" style={{ width: '600px', height: '370px' }} data-from={oneRoute.point1} data-to={oneRoute.point2}></div>
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Название: {oneRoute.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Длина: {oneRoute.length} км
              </Typography>
              <Typography variant="h5" color="text.secondary">
                Оценка: {oneRoute.rating}/5
              </Typography>
              {author.map((el) => (
                <Typography key={el.id} variant="body2" color="text.secondary">
                  Автор: {el.login}
                </Typography>
              ))}
              <Typography>
                Оцените маршрут
              <TextField
                variant="outlined"
                fullWidth
                type="number"
                inputProps={{ min: 1, max: 5 }} 
              />
              </Typography>
              <Typography>
              Оставьте отзыв
              </Typography>
<TextField sx={{width: 560}} id="outlined-basic" variant="outlined" rows={20} />
              <Link>
              <Button variant="contained" color="primary">
                Оценить маршрут
              </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Grid>

    <script src="https://api-maps.yandex.ru/2.1/?apikey=454e7c2a-3167-48eb-bcbe-fd1c343cac62&lang=ru_RU"></script>
    <script async src="js/route.js"></script>
    </Layout>
  );
};
//добавить на link href