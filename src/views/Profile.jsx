const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ user }) {
  return (
    <Layout user={user}>
      <h1>Профиль Пользователя</h1>
      <form id="form">
        <ul className="play">
          <h2>Игрок:</h2>
          <li id="user">{login}</li>
          <li id="user">{name}</li>
        </ul>
        <button id="prof" className="btn btn-primary"> Редактировать </button>
      </form>
    </Layout>
  );
};
