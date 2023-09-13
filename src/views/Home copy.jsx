const React = require("react");
const Layout = require("./Layout");

function Home() {
  return (
    <Layout>
      <h1>Домашняя страница</h1>
      <div id="map" style={{ width: '500px', height: '370px' }}></div>
      <input id="coordinates" type="text" name='coordinates' placeholder="Название маршрута"></input>
      <script src="https://api-maps.yandex.ru/2.1/?apikey=454e7c2a-3167-48eb-bcbe-fd1c343cac62&lang=ru_RU"  type="text/javascript"></script>
      <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript"></script>
      <script src="js/coordinates.js"></script>
    </Layout>
  );
}

module.exports = Home;
