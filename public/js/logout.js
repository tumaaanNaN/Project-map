const logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('/logout');
    console.log(response);
    if (response.redirected) {
      window.location.href = response.url;
    }
  } catch (error) {
    console.log(error);
  }
});
