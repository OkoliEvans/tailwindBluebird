let menu = document.getElementById('menu');
let hamburger = document.getElementById('hamburger');

hamburger.onclick = () => {
  if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
}
