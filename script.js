document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var mobileNav = document.getElementById('navMobile');
  if (!burger || !mobileNav) return;

  burger.addEventListener('click', function () {
    mobileNav.classList.toggle('open');
  });

  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
    });
  });
});
