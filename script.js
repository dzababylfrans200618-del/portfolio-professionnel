// ========================================
// 1. MENU DE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// ========================================
// 2. FORMULAIRE DE CONTACT
// ========================================

const formulaire = document.getElementById("contact-form");
const statut = document.getElementById("form-status");

const boutonEmail = document.getElementById("btn-email");
const boutonWhatsApp = document.getElementById("btn-whatsapp");

function recupererMessage() {
    if (!formulaire.reportValidity()) {
        return null;
    }

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const sujet = document.getElementById("sujet").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!nom || !email || !sujet || !message) {
        statut.textContent = "Veuillez remplir tous les champs.";
        statut.style.color = "red";
        return null;
    }

    return { nom, email, sujet, message };
}

// ========================================
// 3. ENVOI PAR WHATSAPP
// ========================================

if (boutonWhatsApp) {
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
            "WhatsApp va s'ouvrir avec ton message préparé. " +
            "Appuie sur Envoyer dans WhatsApp.";
        statut.style.color = "#173f73";
    });
}

// ========================================
// 4. PRÉPARER UN E-MAIL
// ========================================

if (boutonEmail) {
    boutonEmail.addEventListener("click", function () {
        const donnees = recupererMessage();

        if (!donnees) return;

        const destinataire =
            "dzababylfrans200618@gmail.com";

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
            "Si une application e-mail est configurée, " +
            "elle va s'ouvrir avec ton message préparé. " +
            "Vérifie le message puis appuie sur Envoyer.";
        statut.style.color = "#173f73";
    });
}

// ========================================
// 5. EMPÊCHER L'ENVOI CLASSIQUE DU FORMULAIRE
// ========================================

if (formulaire) {
    formulaire.addEventListener("submit", function (event) {
        event.preventDefault();

        statut.textContent =
            "Choisis Envoyer par e-mail ou Envoyer par WhatsApp.";
        statut.style.color = "#173f73";
    });
                                 }
