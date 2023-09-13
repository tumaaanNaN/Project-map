// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import {
  Link, AppBar, Toolbar, Typography, Button, Box,
} from '@mui/material';

const React = require('react');

function NavBar({ user }) {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Link href="/">
          <Box
            component="img"
            sx={{
              height: 70,
              width: 70,
              maxHeight: { xs: 70, md: 70 },
              maxWidth: { xs: 100, md: 100 },
            }}
            alt="logo"
            src="https://my-personal-bucket-for-objects.storage.yandexcloud.net/images/4f6954ae-0a47-44ea-be6f-d07e3e909547.png"
          />
        </Link>
        {/* <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}> */}
        {/* <Typography variant="h6">
            Место для логотипа
            src = https://my-personal-bucket-for-objects.storage.yandexcloud.net/images/4f6954ae-0a47-44ea-be6f-d07e3e909547.png
          </Typography>
        </a> */}
        <div style={{ marginLeft: 'auto' }}>
          {user ? (
            <>
              <Typography variant="body1" style={{ marginRight: '16px' }}>
                {`Привет ${user.login}`}
              </Typography>
              <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">
                  {user.login}
                </Button>
              </a>
              <a href="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">
                  Профиль
                </Button>
              </a>
              <a href="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">
                  Выйти
                </Button>
              </a>
            </>
          ) : (
            <>
              <a href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">
                  Авторизоваться
                </Button>
              </a>
              <a href="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">
                  Зарегистрироваться
                </Button>
              </a>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

// const React = require('react');

// function NavBar({ user }) {
//   return (
//     <header>
//       <nav className="navbar">
//         <div className="rege-buttons">
//           <a href="/">
//             <button className="logo-brand">
//               Место для логотипа
//             </button>
//           </a>
//           {user ? (
//             <>
//               <p>{`Привет ${user.login}`}</p>
//               <a href="/" className="navbar-brand">
//                 {user.login}
//               </a>
//               {' '}
//               <a href="/profile">
//                 <button className="navbar-brand">
//                   Профиль
//                 </button>
//               </a>
//               {' '}
//               <a href="/logout">
//                 <button id="logout" className="navbar-brand">
//                   Выйти
//                 </button>
//               </a>
//               {' '}
//             </>
//           ) : (
//             <>
//               {' '}
//               <a href="/login">
//                 <button className="navbar-brand">
//                   Авторизоваться
//                 </button>
//               </a>
//               {' '}
//               <a href="/register">
//                 <button className="navbar-brand">
//                   Зарегистрироваться
//                 </button>
//               </a>
//               {' '}
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }

module.exports = NavBar;
