const commentbtn = document.querySelector('.btn-comment');
const comment = document.querySelector('.comment');
const number = document.querySelector('.number');
// const formcomment = document.querySelector('.form-comment')


commentbtn.addEventListener('click', async (event) => {
    try {
        event.preventDefault();
        const { id } = event.target.dataset;
        const num = number.value;
        const com = comment.value;
        const response = await fetch('/comment', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ com, num, id }),
    });
    if(response.status === 400){
        alert('Вы не поставили оценку и комментарий')
    } else if (response.status === 401) {
        alert('У вас нет оценки');
      } else if (response.status === 402) {
        alert('У вас нет комментария');
      } else if (response.status === 200) {
        alert('Спасибо за оценку)');
        comment.value = '';
        number.value = '';
    }
    }
    catch (err) {console.log(err);}
})