const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ user }) {
  return (
    <Layout user={user}>
      <h1>Профиль Пользователя</h1>
      <form id="form">
        <ul className="play">
          <h2>Пользователь:</h2>
          <li id="user">{user.login}</li>
        </ul>
        {/* <button id="prof" className="btn btn-primary"> Редактировать </button> */}
      </form>
      <div id="map" style={{ width: '500px', height: '370px' }} />
      <input id="coordinates" type="text" name="coordinates" placeholder="Название маршрута" />
      <br />
      <input id="feedback" type="text" name="feedback" placeholder="Ваш отзыв" />
      <script src="https://api-maps.yandex.ru/2.1/?apikey=454e7c2a-3167-48eb-bcbe-fd1c343cac62&lang=ru_RU" type="text/javascript" />
      <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript" />
      <script src="js/coordinates.js" />
    </Layout>
  );
};
