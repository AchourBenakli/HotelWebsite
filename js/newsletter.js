let newsletter = document.getElementById('newsletterId');
let buttonNewsletter = document.querySelector('#buttonNewsletter');


buttonNewsletter.addEventListener('click', function (event) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(newsletter.value)) {
    event.preventDefault();
    alert("Votre adresse email a bien ete envoye !");
  }
  else {
    event.preventDefault();
    alert("Merci de renseigner un email valide !");
    return false;
  }
});


