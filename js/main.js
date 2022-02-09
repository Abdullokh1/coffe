let elopen = document.getElementById('headBtn');

let elhide = document.getElementById('headContent');

let elItem = document.getElementById('openItem');

let elshowItem = document.getElementById('hideItem');

let elupImg = document.getElementById('upImg');

let elItemsecond = document.getElementById('openItem-2');

let elshowItemsecond = document.getElementById('hideItem-2');

let elupImgsecond = document.getElementById('upImg-2');

let elItemthird = document.getElementById('openItem-3');

let elshowItemthird = document.getElementById('hideItem-3');

let elupImgthird = document.getElementById('upImg-3');

let elItemfourth = document.getElementById('openItem-4');

let elshowItemfourth = document.getElementById('hideItem-4');

let elupImgfourth = document.getElementById('upImg-4');

let elItemfifth = document.getElementById('openItem-5');

let elshowItemfifth = document.getElementById('hideItem-5');

let elupImgfifth = document.getElementById('upImg-5');


elopen.addEventListener('click', function(){
  elhide.classList.toggle('show');
  elopen.classList.toggle('white');
})

elItem.addEventListener('click', function(){
  elshowItem.classList.toggle('see');
})
elItem.addEventListener('click', function(){
  elupImg.src = "../images/up-arrow.svg";
})

elItemsecond.addEventListener('click', function(){
  elshowItemsecond.classList.toggle('see');
})
elItemsecond.addEventListener('click', function(){
  elupImgsecond.src = "../images/up-arrow.svg";
})

elItemthird.addEventListener('click', function(){
  elshowItemthird.classList.toggle('see');
})
elItemthird.addEventListener('click', function(){
  elupImgthird.src = "../images/up-arrow.svg";
})

elItemfourth.addEventListener('click', function(){
  elshowItemfourth.classList.toggle('see');
})
elItemfourth.addEventListener('click', function(){
  elupImgfourth.src = "../images/up-arrow.svg";
})

elItemfifth.addEventListener('click', function(){
  elshowItemfifth.classList.toggle('see');
})
elItemfifth.addEventListener('click', function(){
  elupImgfifth.src = "../images/up-arrow.svg";
})




