let counter = document.getElementById('counter');
let paused = false;
setInterval(() => {
  if (!paused) {
    counter.textContent++
  }
}, 1000);
const btnPaused = () => (paused = !paused);

const minus = document.getElementById('minus');
minus.addEventListener('click', () => {
  counter.textContent--;
});

const add = document.getElementById('plus');
add.addEventListener('click', () => {
  counter.textContent++;
});

const like = document.getElementById('heart');
let likes = 0;
like.addEventListener('click', (e) => {
  likes ++
  console.log(e.target)
  let allLIKES= document.querySelector('.likes');
  let list = document.createElement('li');
  list.textContent = `${counter.innerHTML} has ${likes} likes`;
  allLIKES.appendChild(list);
});

const pause = document.getElementById('pause');
pause.addEventListener('click', () => {
  if (pause.innerText === 'pause') {
    like.disabled = true;
    add.disabled = true;
    minus.disabled = true;
    // clearTimeout(time);
    btnPaused();
    pause.innerText = 'resume';
  } else if (pause.innerText === 'resume') {
    //    console.log('hello')
    like.disabled = false;
    add.disabled = false;
    minus.disabled = false;
    btnPaused();
    pause.innerText = 'pause';
  }
});
let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addComment();
  form.reset();
});
//active comments
const addComment = () => {
  let input = document.getElementById('comment-input').value;
  let activeComments = document.getElementById('list');
  let comment = document.createElement('li');
  comment.innerText = input;
  activeComments.appendChild(comment);
}; 
