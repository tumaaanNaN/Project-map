const React = require("react");
const Layout = require("./Layout");

function Login() {
  return (
    <Layout>
      <form
        action="/login"
        method="POST"
        className="login-container"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
          gap: "5px",
        }} // Временно добавил стили сюда, потом нужно обязательно убрать их
      >
        <label htmlFor="login" className="form-label">
          Логин
          <input
            id="login"
            className="form-control"
            name="login"
            type="text"
            placeholder="Введите логин"
            required
          />
        </label>
        <label htmlFor="password" className="form-label">
          Пароль
          <input
            id="password"
            className="form-control"
            name="password"
            type="password"
            placeholder="Введите пароль"
            autoComplete="on"
            required
          />
        </label>
        <button className="btn btn-warning" type="submit">
          Войти в систему
        </button>
      </form>
    </Layout>
  );
}
module.exports = Login;
