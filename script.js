const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const formulaire = document.getElementById("contact-form");
const statut = document.getElementById("form-status");

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const sujet = document.getElementById("sujet").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!nom || !email || !sujet || !message) {
        statut.textContent = "Veuillez remplir tous les champs.";
        statut.style.color = "red";
        return;
    }

    statut.textContent =
        "Les champs sont valides, mais le message n'a pas encore été envoyé.";
    statut.style.color = "#173f73";
});

const formulaire = document.getElementById("contact-form");
const statut = document.getElementById("form-status");

const boutonEmail = document.getElementById("btn-email");
const boutonWhatsApp = document.getElementById("btn-whatsapp");

function recupererMessage() {
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const sujet = document.getElementById("sujet").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!formulaire.reportValidity()) {
        return null;
    }

    if (!nom || !email || !sujet || !message) {
        statut.textContent = "Veuillez remplir tous les champs.";
        statut.style.color = "red";
        return null;
    }

    return { nom, email, sujet, message };
}

// Préparer un message WhatsApp
boutonWhatsApp.addEventListener("click", function () {
    const donnees = recupererMessage();

    if (!donnees) return;

    const texte =
        "Bonjour Dzaba Byl Frans !\n\n" +
        "Nom : " + donnees.nom + "\n" +
        "E-mail : " + donnees.email + "\n" +
        "Sujet : " + donnees.sujet + "\n\n" +
        "Message :\n" + donnees.message;

    const url =
        "https://wa.me/237689543937?text=" +
        encodeURIComponent(texte);

    window.open(url, "_blank");

    statut.textContent =
        "WhatsApp s'ouvre avec ton message préparé.";
    statut.style.color = "#173f73";
});

// Préparer un e-mail
boutonEmail.addEventListener("click", function () {
    const donnees = recupererMessage();

    if (!donnees) return;

    const destinataire = "dzababylfrans200618@gmail.com";

    const sujet = encodeURIComponent(donnees.sujet);

    const corps = encodeURIComponent(
        "Nom : " + donnees.nom + "\n" +
        "E-mail : " + donnees.email + "\n\n" +
        "Message :\n" + donnees.message
    );

    const url =
        "mailto:" + destinataire +
        "?subject=" + sujet +
        "&body=" + corps;

    window.location.href = url;

    statut.textContent =
        "Ton application e-mail va s'ouvrir avec le message préparé.";
    statut.style.color = "#173f73";
});

// Empêcher la soumission classique du formulaire
formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
});
