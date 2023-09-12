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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous" />
        {/* <link rel="stylesheet" href="/css/style.css" /> */}
        <script defer src="/js/common.js" />
        <title>ReactSSR</title>
      </head>
      <body>
        <NavBar user={user}/>
        <div className="container">
          <div className="row">
            {children}
          </div>
        </div>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous" />
      </body>
    </html>
  );
}

module.exports = Layout;
