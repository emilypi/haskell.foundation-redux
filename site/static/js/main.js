// Mobile nav functionality

const openButton = document.getElementById('mobile-nav-open');
const closeButton = document.getElementById('mobile-nav-close');
const backdrop = document.getElementById('nav-backdrop');
const mobileNav = document.getElementById('mobile-nav');

const openNav = () => {
  document.body.classList.add('overflow-hidden');
  backdrop.classList.remove('hidden');
  mobileNav.classList.remove('hidden');
}

const closeNav = () => {
  document.body.classList.remove('overflow-hidden');
  backdrop.classList.add('hidden');
  mobileNav.classList.add('hidden');
}

openButton.addEventListener('click', openNav);
closeButton.addEventListener('click', closeNav);
backdrop.addEventListener('click', closeNav);

// Desktop nav dropdown functionality

const affiliatesButton = document.getElementById('affiliates-nav-item');
const affiliatesMenu = document.getElementById('affiliates-nav-item-menu');


let affiliatesButtonTimeout = null;
let affiliatesMenuTimeout = null;

affiliatesButton.addEventListener('mouseover', () => {
  clearTimeout(affiliatesMenuTimeout);
  affiliatesMenu.classList.remove('hidden');
});
affiliatesButton.addEventListener('mouseout', () => {
  affiliatesButtonTimeout = setTimeout(() => {
	affiliatesMenu.classList.add('hidden');
  }, 200);
});

affiliatesMenu.addEventListener('mouseover', () => {
  clearTimeout(affiliatesButtonTimeout);
});
affiliatesMenu.addEventListener('mouseout', function(event) {
  var e = event.toElement || event.relatedTarget;
  if (e.parentNode == this || e == this) {
	 return;
  }
  affiliatesMenuTimeout = setTimeout(() => {
	affiliatesMenu.classList.add('hidden');
  }, 200);
}, true);
