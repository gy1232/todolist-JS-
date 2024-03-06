// const title = document.getElementById('title');
// console.log('title');

// title.innerText = 'Got you!';
// console.log(title.className);

// const hellos = document.getElementsByClassName('hello');
// console.log(hellos);

// const title = document.getElementsByTagName('.hello h1');
// console.log(title);

// const title = document.querySelector('.hello h1');
// console.log(title);
// title.style.color = 'blue';

const h1 = document.querySelector('div.hello:first-child h1');

// console.dir(title);

// function handleTitleClick() {
//   h1.style.color = 'blue';
//   console.log(h1.style.color);
// }

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === 'blue') {
//     newColor = 'tomato';
//   } else {
//     newColor = 'blue';
//   }

function handleTitleClick() {
  // const clickedClass = 'clicked';
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }

  h1.classList.toggle('clicked');
}

//   h1.style.color = newColor;
// }

// function handleMouseEnter() {
//   h1.innerText = 'Mouse is here!';
// }

// function handleMouseLeave() {
//   h1.innerText = 'Mouse is gone!';
// }

// function hanleWindowResize() {
//   document.body.style.backgroundColor = 'tomato';
// }

// function handleWindowCopy() {
//   alert('copier!');
// }

// function handleWindowOffline() {
//   alert('SOS on WIFI');
// }

// function handleWindowOnline() {
//   alert('ALL GOOOD');
// }

h1.addEventListener('click', handleTitleClick);
// h1.addEventListener('mouseenter', handleMouseEnter);
// h1.addEventListener('mouseleave', handleMouseLeave);

// window.addEventListener('resize', hanleWindowResize);
// window.addEventListener('copy', handleWindowCopy);
// window.addEventListener('offline', handleWindowOffline);
// window.addEventListener('online', handleWindowOnline);
