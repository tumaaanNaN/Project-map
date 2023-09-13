const React = require('react');
const Layout = require('./Layout');

module.exports = function Register() {
  return (
    <Layout>
      <form
        action="/register"
        method="POST"
        className="login-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '100px',
          gap: '5px',
        }} // Временно добавил стили сюда, потом нужно обязательно убрать их
      >
        <label htmlFor="login" className="form-label">
          Логин
          <input
            type="text"
            placeholder="Введите логин"
            name="login"
            className="form-control"
            required
          />
        </label>
        <label htmlFor="name" className="form-label">
          Имя
          <input
            type="text"
            placeholder="Введите логин"
            name="name"
            className="form-control"
            required
          />
        </label>
        <label htmlFor="password" className="form-label">
          Пароль
          <input
            type="password"
            placeholder="Введите пароль"
            name="password"
            className="form-control"
            required
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Зарегистрироваться
        </button>
      </form>
    </Layout>
  );
};
