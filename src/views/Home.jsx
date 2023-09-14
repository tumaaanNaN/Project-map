import {
  Button, CardActionArea, Box, Link, Grid, Card, CardContent, Typography,
} from '@mui/material';

const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ routes, user }) {
  return (
    <Layout user={user}>
      <Box
        style={{
          position: 'relative',
          width: '1100px',
          height: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '1cm',
          marginBottom: '2cm',
          display: 'block',
        }}
      >
        <img
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '16px',
          }}
          alt="lending"
          src="https://my-personal-bucket-for-objects.storage.yandexcloud.net/images/df63f821-5d0e-4068-8a7d-0c9f352838a3.webp"
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h4" style={{ margin: '0' }}>Добро пожаловать в сервис "Велопрогулки"! Здесь Вы можете найти как уже готовые маршруты, так и создать свои собственные</Typography>
        </div>
      </Box>
      <Grid item xs={12}>
        <Typography variant="h2" style={{ textAlign: 'center', marginTop: '2cm', marginBottom: '2cm' }}>
          Готовые маршруты
        </Typography>
        <div style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'stretch', marginTop: '1cm',
        }}
        >
          {routes.map((el) => (
            <Card key={el.id} sx={{ maxWidth: 600, margin: '1cm' }}>
              <CardActionArea />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {' '}
                  {el.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Длина:
                  {' '}
                  {el.length}
                  {' '}
                  км
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Оценка:
                  {' '}
                  {el.rating}
                  /5
                </Typography>
                {/* {author.map((auth) => ( */}
                  <Typography variant="body2" color="text.secondary">
                    Автор:
                    {' '}
                    {el["User.login"]}
                  </Typography>
                {/* // ))} */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div id="buttons" />
                  <Link href={`/${el.id}`}>
                    <Button size="small" color="primary">
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Grid>
    </Layout>
  );
};
