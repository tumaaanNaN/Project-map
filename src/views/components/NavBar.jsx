const React = require('react');

function NavBar({ user }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        {user ? (
          <>
            <a href="/" className="navbar-brand">
              {user.login}
            </a>
            {' '}
            <a href="/login" className="navbar-brand">
              logout
            </a>
            {' '}
            <a href="/register" className="navbar-brand">
              global
            </a>
            {' '}
          </>
        ) : (
          <>
            <a href="/" className="navbar-brand">
              home
            </a>
            {' '}
            <a href="/login" className="navbar-brand">
              login
            </a>
            {' '}
            <a href="/register" className="navbar-brand">
              register
            </a>
            {' '}
          </>
        )}
      </nav>
    </header>
  );
}

module.exports = NavBar;
