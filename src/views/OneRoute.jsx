const React = require("react");
const Layout = require("./Layout");

import {
  Button,
  CardActionArea,
  Typography,
  Box,
  Link,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";

module.exports = function Home({ oneRoute, user, rating }) {
  return (
    <Layout user={user}>
      <Grid item xs={12}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "stretch",
            marginTop: "1cm",
          }}
        >
          <Card sx={{ maxWidth: 600, margin: "1cm" }}>
            <CardActionArea>
              <div
                id="map"
                style={{ width: "600px", height: "370px" }}
                data-from={oneRoute.point1}
                data-to={oneRoute.point2}
              ></div>
            </CardActionArea>
            {!user ? (
              <>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Название: {oneRoute.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Длина: {oneRoute.length} км
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    Оценка: {rating}/5
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Автор: {oneRoute["User.login"]}
                  </Typography>
                  {/* !!!!!!!добавить сюда комментарии из бд */}
                </CardContent>
              </>
            ) : (
              <>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Название: {oneRoute.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Длина: {oneRoute.length} км
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    Оценка: {rating}/5
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Автор: {oneRoute["User.login"]}
                  </Typography>
                  {/* !!!!!!!добавить сюда комментарии из бд */}
                </CardContent>
                <form className='form-comment'>
                    <Typography>
                    Оцените маршрут. Введите от 1 до 5
                    <input
                      className='number'
                      variant="outlined"
                      fullWidth
                      type="number"
                      inputProps={{ min: 1, max: 5 }} 
                    />
                  </Typography>
                <Typography>
                  Оставьте отзыв
                </Typography>
                <input sx={{ width: 560 }} id="outlined-basic" variant="outlined" rows={20} className='comment'/>
                <Link>
                  <Button className='btn-comment' data-id={oneRoute.id} variant="contained" color="primary">
                    Оценить маршрут
                  </Button>
                </Link>
                </form>
              </>
            )}
          </Card>
        </div>
      </Grid>

      <script src="https://api-maps.yandex.ru/2.1/?apikey=454e7c2a-3167-48eb-bcbe-fd1c343cac62&lang=ru_RU"></script>
      <script async src="js/route.js"></script>
      <script async src='js/comment.js'></script>
    </Layout>
  );
};

//добавить на link href
