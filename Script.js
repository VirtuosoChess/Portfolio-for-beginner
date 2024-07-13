document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const languageToggle = document.getElementById('language-toggle');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const texts = {
        en: {
            title: "My Portfolio",
            about: "About",
            projects: "Projects",
            contact: "Contact",
            "about-heading": "About Me",
            "about-text": "I am a web developer passionate about creating interactive and functional websites. Here are some of my recent projects.",
            "projects-heading": "Projects",
            "project1-title": "Project 1",
            "project1-text": "Chess set with built-in computer.",
            "project2-title": "Project 2",
            "project2-text": "Chess help site.",
            "project3-title": "Project 3",
            "project3-text": "Introductory website to astronomical navigation.",
            "contact-heading": "Contact",
            "contact-name": "Name:",
            "contact-email": "Email:",
            "contact-message": "Message:",
            "contact-submit": "Send",
            footer: "&copy; 2024 My Portfolio. All rights reserved."
        },
        fr: {
            title: "Mon Portfolio",
            about: "À propos",
            projects: "Projets",
            contact: "Contact",
            "about-heading": "À propos de moi",
            "about-text": "Je suis un développeur web passionné par la création de sites web interactifs et fonctionnels. Voici quelques-uns de mes projets récents.",
            "projects-heading": "Projets",
            "project1-title": "Projet 1",
            "project1-text": "Jeu d'échecs avec ordinateur intégré.",
            "project2-title": "Projet 2",
            "project2-text": "Site d'aide aux échecs.",
            "project3-title": "Projet 3",
            "project3-text": "Site web d'initiation à la navigation astronomique.",
            "contact-heading": "Contact",
            "contact-name": "Nom :",
            "contact-email": "Email :",
            "contact-message": "Message :",
            "contact-submit": "Envoyer",
            footer: "&copy; 2024 Mon Portfolio. Tous droits réservés."
        }
    };

    languageToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        document.documentElement.lang = newLang;
        updateLanguage(newLang);
    });

    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            element.innerText = texts[lang][key];
        });
    }
});


