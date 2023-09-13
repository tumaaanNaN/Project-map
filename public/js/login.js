console.log('asdadasdadad');
const loginForm = document.querySelector('#logForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    [e.target.login.name]: e.target.login.value,
    [e.target.password.name]: e.target.password.value,
  };
  if (!data.login || !data.password) {
    alert('Введите свои данные');
  } else {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        window.location.replace('/');
      }
    //   const answer = await response.json();
    } catch (error) {
      alert('Попробуйте еще раз', error);
    }
  }
});
