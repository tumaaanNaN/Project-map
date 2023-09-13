const React = require('react');
const NavBar = require('./components/NavBar');

function Layout({ children, user }) {
  // console.log(children);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/common.js" />
        <title>Велопрогулки</title>
      </head>
      <body>
        <div className="navbar-container">
          <NavBar user={user} />
        </div>
        <div className="container">
          <div className="row">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
