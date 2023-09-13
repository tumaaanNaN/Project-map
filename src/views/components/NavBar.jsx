const React = require('react');

function NavBar({ user }) {
  return (
    <header>
      <nav className="navbar">
        <div className="rege-buttons">
          <a href="/">
            <button className="logo-brand">
              Место для логотипа
            </button>
          </a>
          {user ? (
            <>
              <p>{`Привет ${user.login}`}</p>
              <a href="/" className="navbar-brand">
                {user.login}
              </a>
              {' '}
              <a href="/profile">
                <button className="navbar-brand">
                  Профиль
                </button>
              </a>
              {' '}
              <a href="/logout">
                <button id="logout" className="navbar-brand">
                  Выйти
                </button>
              </a>
              {' '}
            </>
          ) : (
            <>
              {' '}
              <a href="/login">
                <button className="navbar-brand">
                  Авторизоваться
                </button>
              </a>
              {' '}
              <a href="/register">
                <button className="navbar-brand">
                  Зарегистрироваться
                </button>
              </a>
              {' '}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

module.exports = NavBar;
