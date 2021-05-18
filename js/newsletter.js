let newsletter = document.querySelector('.newsletter-input');
let buttonNewsletter = document.querySelector('#buttonNewsletter');

buttonNewsletter.addEventListener('submit', function (event) {
  var modele = /^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/;
  if (modele.test(newsletter)) {
    event.preventDefault();
    alert("Merci d'ajouter un email valide !");
  }
  else {
    event.preventDefault();
    alert("Votre adresse email a bien ete envoye !");
    return false;
  }
});

