const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <h1>Домашняя страница</h1>
      <input id="coordinates" />
      <div id="map" style={{ width: '500px', height: '370px' }} />
      <script src="https://api-maps.yandex.ru/2.1/?apikey=454e7c2a-3167-48eb-bcbe-fd1c343cac62&lang=ru_RU" />
      <script async src="js/maps.js" />
    </Layout>
  );
}

module.exports = Home;
