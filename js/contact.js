let inputs = document.querySelector('form');
let submitContact = document.getElementById("submitContact");

submitContact.addEventListener('click', function sendEmail(event) {
  event.preventDefault();
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "968ee54ae12e62",
    Password: "15713f3ab95a70",
    To: 'achourbenakli10@gmail.com',
    From: inputs.elements["email"].value,
    Name: inputs.elements["name"].value,
    Number: inputs.elements["Phone"].value,
    Subject: inputs.elements["subject"].value,
    Body: inputs.elements["Message"].value,
  }).then(
    message => alert("mail sent successfully")
  );
});


