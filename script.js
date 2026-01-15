// Bouton test iteractif
const bouton =
document.getElementById('monBouton');
bouton.addEventListener('click', () => {
  alert('Bravo ! Tu as cliqué sur le bouton !');
});

// Formulaire de contact (simulé)
const form =
document.getElementById('contactForm');
form.addEventListener('submit', (e) => { 
  e.preventDefault(); // empêche l'envoi réel
  alert('Merci pour votre message !'); 
  form.reset();
});