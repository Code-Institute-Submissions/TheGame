// The idea for the contact form JavaScript comes from our project "Rosie" on Front-End interactive development part of the course at Code Institute
// as I only have an access to two free contact form templates- and I don't need paid version of the Email.js just yet, 
// I left it with "aikido" form name. 
// I'm going to change it, once I will create new email js account for my sensei, so all messages from our actual Aikido websites will go straight to him.

function sendMail(contactForm) {
	emailjs.send("gmail", "aikido", {
			"from_name": contactForm.name.value,
			"from_email": contactForm.email.value,
			"message": contactForm.contact.value
		})
		.then(
			function (response) {
				alert("Success! :)", response);
			},
			function (error) {
				alert("Error! Sending failed!", error);
			})
		.then(
			function redirect() {
				location.replace("index.html");
			});

	return false; // To block from loading a new page
}