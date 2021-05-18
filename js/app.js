const selectElement = function (element) {
  return document.querySelector(element);
}

let openFa = selectElement('#openFa');
let faTime = selectElement('i');
let body = selectElement('body');
let closeFa = selectElement('#closeFa');

openFa.addEventListener('click', function () {
  body.classList.add('open');
  faTime.style.display = "none";
  closeFa.style.display = "block";
});

closeFa.addEventListener('click', function () {
  body.classList.remove('open');
  faTime.style.display = "block";
  closeFa.style.display = "none";
})







