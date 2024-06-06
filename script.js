
window.sr = ScrollReveal({ reset: true });

sr.reveal(" .area1 ", { duration: 2000 }); 

sr.reveal(" .lixo, .lixeira, .imgPeixe, .imgCriancas, .imgOcean, .imgCosta ", { duration: 1300 }); 

function navigateToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
